const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL || 'postgresql://postgres:P%40risAZ2026%2A@db.fsfrihuhqjwrkvftgkzj.supabase.co:5432/postgres'
});

client.connect()
    .then(() => {
        console.log('Successfully connected to database with connection string.');
        return client.query('SELECT NOW()');
    })
    .then(res => {
        console.log('Query result:', res.rows);
    })
    .catch(err => {
        console.error('Connection error:', err.stack);
    })
    .finally(() => {
        client.end();
    });
