"use server";

import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function createOrderAction(formData: any, cartItems: any[]) {
    try {
        if (!cartItems || cartItems.length === 0) {
            return { success: false, error: "Cart is empty" };
        }

        // Calculate totals server-side for security (assuming price is passed correctly for demo purposes)
        // In a real production app, prices MUST be fetched again from DB to prevent tampering
        const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
        const shipping = subtotal > 0 ? 35.00 : 0;
        const tax = Number((subtotal * 0.08875).toFixed(2));
        const totalAmount = subtotal + shipping + tax;

        // Get user session if available
        const session = await getServerSession(authOptions);
        let userId = null;
        if (session?.user?.email) {
            const profile = await prisma.profile.findUnique({
                where: { email: session.user.email }
            });
            if (profile) userId = profile.id;
        }

        // Create the order and nested order items in a single Prisma transaction
        const newOrder = await prisma.order.create({
            data: {
                user_id: userId,
                total_amount: totalAmount,
                status: "PENDING",
                items: {
                    create: cartItems.map((item) => ({
                        product: { connect: { id: item.id } },
                        quantity: item.quantity,
                        price: item.price,
                    }))
                }
            }
        });

        // Normally here we'd integrate Stripe/Payment Gateway
        // For now, we just mock the success

        return { success: true, orderId: newOrder.id };

    } catch (error) {
        console.error("Failed to create order:", error);
        return { success: false, error: "Failed to process order" };
    }
}
