import { NextResponse } from 'next/server';
import { Pool } from 'pg';

export async function GET() {
    const regions = [
        'us-east-1', 'us-east-2', 'us-west-1', 'us-west-2',
        'eu-west-1', 'eu-west-2', 'eu-west-3', 'eu-central-1',
        'ap-southeast-1', 'ap-southeast-2', 'ap-northeast-1', 'ap-northeast-2', 'ap-south-1',
        'ca-central-1', 'sa-east-1'
    ];

    const results = [];

    for (const region of regions) {
        const host = `aws-0-${region}.pooler.supabase.com`;
        const connectionString = `postgresql://postgres.waoklslnherhziscjbnc:P%40risAZ2026*@${host}:5432/postgres`;

        const pool = new Pool({
            connectionString,
            connectionTimeoutMillis: 1000,
        });

        try {
            const client = await pool.connect();
            results.push({ region, status: 'SUCCESS' });
            client.release();
            break; // Found it!
        } catch (err: any) {
            results.push({ region, status: 'ERROR', error: err.message });
        } finally {
            await pool.end();
        }
    }

    console.log('GLOBAL LOGIN RESULTS:', JSON.stringify(results, null, 2));

    return NextResponse.json({ results });
}
