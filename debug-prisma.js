
const { PrismaClient } = require('@prisma/client');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');

const pool = new Pool({ connectionString: 'postgresql://postgres.waoklslnherhziscjbnc:P%40risAZ2026*@aws-0-us-east-1.pooler.supabase.com:5432/postgres' });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    try {
        const products = await prisma.product.findMany({ take: 4 });
        console.log("SUCCESS");
        console.log(products);
    } catch (e) {
        console.error("PRISMA ERROR:", e);
    } finally {
        await prisma.$disconnect();
        await pool.end();
    }
}
main();
