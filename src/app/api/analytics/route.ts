import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        const totalSales = await prisma.order.aggregate({
            _sum: {
                total: true
            }
        });

        const totalOrders = await prisma.order.count();
        const totalCustomers = await prisma.user.count({
            where: {
                role: 'CUSTOMER'
            }
        });

        // Get sales from last 30 days
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const recentSales = await prisma.order.aggregate({
            where: {
                createdAt: {
                    gte: thirtyDaysAgo
                }
            },
            _sum: {
                total: true
            }
        });

        return NextResponse.json({
            totalSales: totalSales._sum.total || 0,
            totalOrders,
            totalCustomers,
            recentSales: recentSales._sum.total || 0,
            growth: 12.5 // Mock growth for now
        });
    } catch (error) {
        console.error('Error fetching analytics:', error);
        return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 });
    }
}
