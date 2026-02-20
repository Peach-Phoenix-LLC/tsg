import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';

export async function GET() {
    try {
        const setting = await prisma.globalSetting.findUnique({
            where: { key: 'maintenance_mode' }
        });
        return NextResponse.json({ enabled: setting?.value === 'true' });
    } catch (error) {
        return NextResponse.json({ enabled: false });
    }
}

export async function POST(request: Request) {
    const session = await getServerSession();

    // Auth check - simplified for now
    if (!session?.user?.email) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { enabled } = await request.json();
        const setting = await prisma.globalSetting.upsert({
            where: { key: 'maintenance_mode' },
            update: { value: String(enabled) },
            create: { key: 'maintenance_mode', value: String(enabled) }
        });
        return NextResponse.json({ success: true, enabled: setting.value === 'true' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update setting' }, { status: 500 });
    }
}
