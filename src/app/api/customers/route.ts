import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        const customers = await prisma.user.findMany({
            where: {
                role: 'CUSTOMER'
            },
            include: {
                orders: {
                    orderBy: {
                        createdAt: 'desc'
                    },
                    take: 1
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        // Format for the admin table
        const formattedCustomers = customers.map(user => ({
            id: user.id,
            name: user.name || 'Anonymous',
            email: user.email,
            lastOrder: user.orders[0]?.createdAt || user.createdAt,
            totalSpent: 0 // Would require more complex aggregation
        }));

        return NextResponse.json(formattedCustomers);
    } catch (error) {
        console.error('Error fetching customers:', error);
        return NextResponse.json({ error: 'Failed to fetch customers' }, { status: 500 });
    }
}
