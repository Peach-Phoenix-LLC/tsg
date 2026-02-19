import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { items, shipping, total, userId } = body;

        // Create the order and order items in a transaction
        const order = await prisma.order.create({
            data: {
                userId: userId || undefined, // undefined allows it to be null if optional
                guestEmail: shipping.email,
                firstName: shipping.firstName,
                lastName: shipping.lastName,
                address: shipping.address,
                city: shipping.city,
                zipCode: shipping.zipCode,
                total: parseFloat(total),
                status: 'PENDING',
                items: {
                    create: items.map((item: any) => ({
                        productId: item.id, // Assuming cart item has product id
                        quantity: item.quantity,
                        price: item.price
                    }))
                }
            }
        });

        return NextResponse.json(order);
    } catch (error: any) {
        console.error('Error creating order:', error);
        return NextResponse.json({ error: 'Failed to create order', details: error.message, stack: error.stack }, { status: 500 });
    }
}

export async function GET(request: Request) {
    try {
        const orders = await prisma.order.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                items: {
                    include: {
                        product: true
                    }
                },
                user: {
                    select: {
                        name: true,
                        email: true
                    }
                }
            }
        });

        return NextResponse.json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 });
    }
}
