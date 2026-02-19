import 'dotenv/config';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('Testing Order Creation...');
    console.log('Database URL exists:', !!connectionString);

    // Payload
    const orderData = {
        userId: undefined, // Guest
        guestEmail: 'test-script@example.com',
        firstName: 'Script',
        lastName: 'Tester',
        address: '123 Test Lane',
        city: 'Testville',
        zipCode: '12345',
        total: 250.00,
        status: 'PENDING',
        items: {
            create: [
                {
                    productId: 'tsg-acc-001',
                    quantity: 1,
                    price: 250.00
                }
            ]
        }
    };

    try {
        const order = await prisma.order.create({
            data: orderData
        });
        console.log('✅ Order created successfully:', order);
    } catch (error) {
        console.error('❌ Error creating order:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
