import { Client } from 'pg';

async function verifyDatabaseConnection() {
    console.log(`Connecting to database at 34.70.168.74...`);

    const client = new Client({
        user: 'postgres',
        host: '34.70.168.74',
        database: 'tsgabrielle',
        password: 'X7f#9Lm$2qRz!666',
        // SSL is usually required for Cloud SQL public IP connections
        ssl: { rejectUnauthorized: false }
    });

    try {
        await client.connect();
        console.log('✅ Database connection established successfully.');

        const res = await client.query('SELECT NOW() as time');
        console.log(`   Database Server Time: ${res.rows[0].time}`);

        await client.end();
    } catch (err: any) {
        console.error(`❌ Database connection failed: ${err.message}`);
    }
}

verifyDatabaseConnection();