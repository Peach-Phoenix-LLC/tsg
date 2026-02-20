"use server";

import { prisma } from "@/lib/prisma";

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

        // Create the order and nested order items in a single Prisma transaction
        const newOrder = await prisma.order.create({
            data: {
                totalAmount: totalAmount,
                status: "PENDING",
                items: {
                    create: cartItems.map((item) => ({
                        product: { connect: { id: item.id } },
                        quantity: item.quantity,
                        unitPrice: item.price,
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
