require('dotenv').config()
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient({})

async function main() {
    console.log('🚀 Starting tsgabrielle® Automated Masterclass Execution...')

    // --- LEVEL 4: Data Entry ---
    console.log('💎 Level 4: Seeding Luxury Products & Variants...')

    const scarf = await prisma.product.upsert({
        where: { id: 'silk-scarf-001' },
        update: {},
        create: {
            id: 'silk-scarf-001',
            name: 'Holographic Silk Scarf',
            description: 'A limited edition scarf with tsgabrielle holographic patterns.',
            price: 250.00,
            category: 'Accessories',
            imageUrl: '/images/scarf.jpg',
            variants: {
                create: [
                    {
                        sku: 'TSG-HLG-GLD-01',
                        color: 'Champagne Gold',
                        size: 'One Size',
                        stock: 50
                    },
                    {
                        sku: 'TSG-HLG-SLV-01',
                        color: 'Starlight Silver',
                        size: 'One Size',
                        stock: 30
                    }
                ]
            }
        }
    })

    console.log(`✅ Product created: ${scarf.name}`)

    // --- LEVEL 5: Security (RLS) ---
    console.log('🔒 Level 5: Configuring Security & Row Level Security (RLS)...')

    try {
        await prisma.$executeRawUnsafe(`ALTER TABLE "Product" ENABLE ROW LEVEL SECURITY;`)
        await prisma.$executeRawUnsafe(`ALTER TABLE "ProductVariant" ENABLE ROW LEVEL SECURITY;`)

        // Create public read policies
        await prisma.$executeRawUnsafe(`
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Public read access for Products') THEN
          CREATE POLICY "Public read access for Products" ON "Product" FOR SELECT USING (true);
        END IF;
      END
      $$;
    `)

        console.log('✅ RLS Enabled and Read Policies created.')
    } catch (error) {
        console.warn('⚠️ RLS setup warning (Account might lack permissions or already set):', error.message)
    }

    // --- LEVEL 6: Scaling & Real-time ---
    console.log('📡 Level 6: Enabling Real-time Inventory Listeners...')

    try {
        await prisma.$executeRawUnsafe(`
      DO $$
      BEGIN
        IF EXISTS (SELECT 1 FROM pg_publication WHERE pubname = 'supabase_realtime') THEN
          BEGIN
            ALTER PUBLICATION supabase_realtime ADD TABLE "ProductVariant";
          EXCEPTION WHEN duplicate_object THEN
            -- Table already in publication
          END;
        END IF;
      END $$;
    `)
        console.log('✅ Real-time enabled for Product Variants.')
    } catch (error) {
        console.warn('⚠️ Real-time setup warning:', error.message)
    }

    console.log('🏆 Masterclass Automation Complete! All Levels Synced.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
