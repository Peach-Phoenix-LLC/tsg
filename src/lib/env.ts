/**
 * /lib/env.ts
 * 
 * Runtime environment variable validation.
 */

const requiredEnvVars = [
    'NEXT_PUBLIC_SUPABASE_URL',
    'NEXT_PUBLIC_SUPABASE_ANON_KEY',
    'SUPABASE_SERVICE_ROLE_KEY',
    'STITCH_API_KEY',
    'STITCH_SERVER_URL',
    'DATABASE_URL',
];

export function validateEnv() {
    const missing = requiredEnvVars.filter((key) => !process.env[key]);

    if (missing.length > 0) {
        throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
    }
}
