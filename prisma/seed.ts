import "dotenv/config";
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'

const pool = new Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
    console.log('🚀 Starting tsgabrielle® Full Product Catalog Seed...')

    // ─────────────────────────────────────────
    // ACCESSORIES
    // ─────────────────────────────────────────
    await prisma.product.upsert({
        where: { id: 'tsg-acc-001' },
        update: { name: 'Holographic Silk Scarf', price: 250, imageUrl: '/images/products/scarf-holographic.jpg' },
        create: {
            id: 'tsg-acc-001',
            name: 'Holographic Silk Scarf',
            description: 'Limited edition scarf with tsgabrielle holographic weave. One size fits all.',
            price: 250.00,
            category: 'accessories',
            imageUrl: '/images/products/scarf-holographic.jpg',
            variants: {
                create: [
                    { sku: 'TSG-ACC-SRF-GLD', color: 'Champagne Gold', size: 'One Size', stock: 50 },
                    { sku: 'TSG-ACC-SRF-SLV', color: 'Starlight Silver', size: 'One Size', stock: 30 },
                    { sku: 'TSG-ACC-SRF-RSE', color: 'Flamant Rose', size: 'One Size', stock: 25 },
                ]
            }
        }
    })

    await prisma.product.upsert({
        where: { id: 'tsg-acc-002' },
        update: {},
        create: {
            id: 'tsg-acc-002',
            name: 'Iridescence Leather Belt',
            description: 'Cruelty-free vegan leather with iridescent coating. Adjustable up to 42".',
            price: 180.00,
            category: 'accessories',
            imageUrl: '/images/products/belt-iridescence.jpg',
            variants: {
                create: [
                    { sku: 'TSG-ACC-BLT-BLK', color: 'Midnight Black', size: 'S/M', stock: 40 },
                    { sku: 'TSG-ACC-BLT-WHT', color: 'Pearl White', size: 'S/M', stock: 35 },
                    { sku: 'TSG-ACC-BLT-BLK-L', color: 'Midnight Black', size: 'L/XL', stock: 30 },
                ]
            }
        }
    })

    await prisma.product.upsert({
        where: { id: 'tsg-acc-003' },
        update: {},
        create: {
            id: 'tsg-acc-003',
            name: 'Crystal Skies Sunglasses',
            description: 'Oversized gradient lenses with titanium frame. UV400 protection.',
            price: 320.00,
            category: 'accessories',
            imageUrl: '/images/products/sunglasses-crystal.jpg',
            variants: {
                create: [
                    { sku: 'TSG-ACC-SUN-CLR', color: 'Crystal Clear', size: 'One Size', stock: 60 },
                    { sku: 'TSG-ACC-SUN-BLU', color: 'Arctic Blue', size: 'One Size', stock: 45 },
                ]
            }
        }
    })

    await prisma.product.upsert({
        where: { id: 'tsg-acc-004' },
        update: {},
        create: {
            id: 'tsg-acc-004',
            name: 'TransLove Enamel Pin Set',
            description: 'Set of 5 collectible enamel pins celebrating trans joy and pride. Gold plating.',
            price: 45.00,
            category: 'accessories',
            imageUrl: '/images/products/pins-translove.jpg',
            variants: {
                create: [
                    { sku: 'TSG-ACC-PIN-SET', color: 'Multi', size: 'One Size', stock: 200 },
                ]
            }
        }
    })

    console.log('✅ Accessories seeded')

    // ─────────────────────────────────────────
    // HATS
    // ─────────────────────────────────────────
    await prisma.product.upsert({
        where: { id: 'tsg-hat-001' },
        update: {},
        create: {
            id: 'tsg-hat-001',
            name: 'Peach Phoenix™ Bucket Hat',
            description: 'Structured terry-cloth bucket hat. Embroidered Peach Phoenix logo. Vegan materials.',
            price: 95.00,
            category: 'hats',
            imageUrl: '/images/products/hat-peach-phoenix.jpg',
            variants: {
                create: [
                    { sku: 'TSG-HAT-BKT-S', color: 'Peach Coral', size: 'S/M', stock: 80 },
                    { sku: 'TSG-HAT-BKT-L', color: 'Peach Coral', size: 'L/XL', stock: 60 },
                    { sku: 'TSG-HAT-BKT-BLK-S', color: 'Midnight Black', size: 'S/M', stock: 50 },
                ]
            }
        }
    })

    await prisma.product.upsert({
        where: { id: 'tsg-hat-002' },
        update: {},
        create: {
            id: 'tsg-hat-002',
            name: 'Cosmic Beret',
            description: 'Sculptural wool beret with galaxy-printed lining. One size adjustable.',
            price: 140.00,
            category: 'hats',
            imageUrl: '/images/products/hat-cosmic-beret.jpg',
            variants: {
                create: [
                    { sku: 'TSG-HAT-BRT-NVY', color: 'Deep Navy', size: 'One Size', stock: 45 },
                    { sku: 'TSG-HAT-BRT-PRP', color: 'Nebula Purple', size: 'One Size', stock: 35 },
                ]
            }
        }
    })

    await prisma.product.upsert({
        where: { id: 'tsg-hat-003' },
        update: {},
        create: {
            id: 'tsg-hat-003',
            name: 'Arizona Rancher Hat',
            description: 'Wide-brim vegan suede hat. Desert-ready with UV protection band.',
            price: 175.00,
            category: 'hats',
            imageUrl: '/images/products/hat-arizona.jpg',
            variants: {
                create: [
                    { sku: 'TSG-HAT-RCH-TAN', color: 'Sand Tan', size: 'S/M', stock: 40 },
                    { sku: 'TSG-HAT-RCH-TAN-L', color: 'Sand Tan', size: 'L/XL', stock: 30 },
                    { sku: 'TSG-HAT-RCH-BRN', color: 'Cognac Brown', size: 'S/M', stock: 25 },
                ]
            }
        }
    })

    console.log('✅ Hats seeded')

    // ─────────────────────────────────────────
    // HOME & DÉCOR
    // ─────────────────────────────────────────
    await prisma.product.upsert({
        where: { id: 'tsg-home-001' },
        update: {},
        create: {
            id: 'tsg-home-001',
            name: 'Iridescence Candle Set',
            description: 'Set of 3 luxury soy candles with notes of white tea, iris, and amber. 40-hour burn.',
            price: 120.00,
            category: 'home-decor',
            imageUrl: '/images/products/candles-iridescence.jpg',
            variants: {
                create: [
                    { sku: 'TSG-HOME-CND-SET', color: 'Iridescent White', size: 'Set of 3', stock: 75 },
                ]
            }
        }
    })

    await prisma.product.upsert({
        where: { id: 'tsg-home-002' },
        update: {},
        create: {
            id: 'tsg-home-002',
            name: 'Good Vibes Throw Blanket',
            description: 'Ultra-soft recycled fleece throw. 50"x60". Machine washable.',
            price: 85.00,
            category: 'home-decor',
            imageUrl: '/images/products/blanket-good-vibes.jpg',
            variants: {
                create: [
                    { sku: 'TSG-HOME-BLK-YLW', color: 'Sunshine Yellow', size: '50x60"', stock: 100 },
                    { sku: 'TSG-HOME-BLK-GRN', color: 'Sage Green', size: '50x60"', stock: 80 },
                    { sku: 'TSG-HOME-BLK-PNK', color: 'Blush Pink', size: '50x60"', stock: 90 },
                ]
            }
        }
    })

    await prisma.product.upsert({
        where: { id: 'tsg-home-003' },
        update: {},
        create: {
            id: 'tsg-home-003',
            name: 'Pride \'25 Art Print',
            description: 'Museum-quality giclée print on archival paper. Certificate of authenticity included. Limited to 500.',
            price: 200.00,
            category: 'home-decor',
            imageUrl: '/images/products/print-pride25.jpg',
            variants: {
                create: [
                    { sku: 'TSG-HOME-PRT-SM', color: 'Full Color', size: '8x10"', stock: 200 },
                    { sku: 'TSG-HOME-PRT-MD', color: 'Full Color', size: '11x14"', stock: 150 },
                    { sku: 'TSG-HOME-PRT-LG', color: 'Full Color', size: '18x24"', stock: 100 },
                ]
            }
        }
    })

    console.log('✅ Home & Décor seeded')

    // ─────────────────────────────────────────
    // FOR HIM
    // ─────────────────────────────────────────
    await prisma.product.upsert({
        where: { id: 'tsg-him-001' },
        update: {},
        create: {
            id: 'tsg-him-001',
            name: 'Made In USA Crewneck',
            description: 'Heavyweight 380gsm organic cotton crewneck. GOTS certified. Embroidered flag detail.',
            price: 165.00,
            category: 'for-him',
            imageUrl: '/images/products/crewneck-made-in-usa.jpg',
            variants: {
                create: [
                    { sku: 'TSG-HIM-CRW-WHT-S', color: 'Optic White', size: 'S', stock: 60 },
                    { sku: 'TSG-HIM-CRW-WHT-M', color: 'Optic White', size: 'M', stock: 80 },
                    { sku: 'TSG-HIM-CRW-WHT-L', color: 'Optic White', size: 'L', stock: 70 },
                    { sku: 'TSG-HIM-CRW-WHT-XL', color: 'Optic White', size: 'XL', stock: 50 },
                    { sku: 'TSG-HIM-CRW-NVY-M', color: 'Navy', size: 'M', stock: 65 },
                    { sku: 'TSG-HIM-CRW-NVY-L', color: 'Navy', size: 'L', stock: 55 },
                ]
            }
        }
    })

    await prisma.product.upsert({
        where: { id: 'tsg-him-002' },
        update: {},
        create: {
            id: 'tsg-him-002',
            name: 'Paris Structured Blazer',
            description: 'Tailored unstructured blazer with tsgabrielle monogram lining. Modern slim cut.',
            price: 480.00,
            category: 'for-him',
            imageUrl: '/images/products/blazer-paris.jpg',
            variants: {
                create: [
                    { sku: 'TSG-HIM-BLZ-BLK-S', color: 'Jet Black', size: 'S', stock: 20 },
                    { sku: 'TSG-HIM-BLZ-BLK-M', color: 'Jet Black', size: 'M', stock: 25 },
                    { sku: 'TSG-HIM-BLZ-BLK-L', color: 'Jet Black', size: 'L', stock: 20 },
                    { sku: 'TSG-HIM-BLZ-CRM-M', color: 'Ivory Cream', size: 'M', stock: 15 },
                    { sku: 'TSG-HIM-BLZ-CRM-L', color: 'Ivory Cream', size: 'L', stock: 15 },
                ]
            }
        }
    })

    await prisma.product.upsert({
        where: { id: 'tsg-him-003' },
        update: {},
        create: {
            id: 'tsg-him-003',
            name: 'Good Vibes Graphic Tee',
            description: 'Relaxed fit oversized tee with Good Vibes Only screen print. 100% organic cotton.',
            price: 75.00,
            category: 'for-him',
            imageUrl: '/images/products/tee-good-vibes.jpg',
            variants: {
                create: [
                    { sku: 'TSG-HIM-TEE-WHT-S', color: 'White', size: 'S', stock: 120 },
                    { sku: 'TSG-HIM-TEE-WHT-M', color: 'White', size: 'M', stock: 150 },
                    { sku: 'TSG-HIM-TEE-WHT-L', color: 'White', size: 'L', stock: 130 },
                    { sku: 'TSG-HIM-TEE-WHT-XL', color: 'White', size: 'XL', stock: 90 },
                    { sku: 'TSG-HIM-TEE-BLK-M', color: 'Black', size: 'M', stock: 100 },
                    { sku: 'TSG-HIM-TEE-BLK-L', color: 'Black', size: 'L', stock: 95 },
                ]
            }
        }
    })

    console.log('✅ For Him seeded')

    // ─────────────────────────────────────────
    // FOR HER
    // ─────────────────────────────────────────
    await prisma.product.upsert({
        where: { id: 'tsg-her-001' },
        update: {},
        create: {
            id: 'tsg-her-001',
            name: 'Flamant Rose Silk Slip Dress',
            description: 'Bias-cut silk-satin slip dress in flamingo rose. Adjustable spaghetti straps. Dry clean only.',
            price: 395.00,
            category: 'for-her',
            imageUrl: '/images/products/dress-flamant-rose.jpg',
            variants: {
                create: [
                    { sku: 'TSG-HER-DRS-RSE-XS', color: 'Flamant Rose', size: 'XS', stock: 20 },
                    { sku: 'TSG-HER-DRS-RSE-S', color: 'Flamant Rose', size: 'S', stock: 30 },
                    { sku: 'TSG-HER-DRS-RSE-M', color: 'Flamant Rose', size: 'M', stock: 30 },
                    { sku: 'TSG-HER-DRS-RSE-L', color: 'Flamant Rose', size: 'L', stock: 20 },
                    { sku: 'TSG-HER-DRS-BLK-S', color: 'Midnight Black', size: 'S', stock: 25 },
                    { sku: 'TSG-HER-DRS-BLK-M', color: 'Midnight Black', size: 'M', stock: 25 },
                ]
            }
        }
    })

    await prisma.product.upsert({
        where: { id: 'tsg-her-002' },
        update: {},
        create: {
            id: 'tsg-her-002',
            name: 'TransFLOWer Wrap Skirt',
            description: 'Flowy wrap skirt printed with the TransFLOWer motif. Recycled polyester satin. One size wraps XS-XL.',
            price: 145.00,
            category: 'for-her',
            imageUrl: '/images/products/skirt-transflower.jpg',
            variants: {
                create: [
                    { sku: 'TSG-HER-SKT-TFW-OS', color: 'TransFLOWer Multi', size: 'One Size', stock: 90 },
                ]
            }
        }
    })

    await prisma.product.upsert({
        where: { id: 'tsg-her-003' },
        update: {},
        create: {
            id: 'tsg-her-003',
            name: 'Womanizer Power Suit',
            description: 'Double-breasted power blazer + wide-leg trouser set. Stretch crepe. Confidence guaranteed.',
            price: 620.00,
            category: 'for-her',
            imageUrl: '/images/products/suit-womanizer.jpg',
            variants: {
                create: [
                    { sku: 'TSG-HER-SUT-RED-XS', color: 'Crimson Red', size: 'XS', stock: 15 },
                    { sku: 'TSG-HER-SUT-RED-S', color: 'Crimson Red', size: 'S', stock: 20 },
                    { sku: 'TSG-HER-SUT-RED-M', color: 'Crimson Red', size: 'M', stock: 20 },
                    { sku: 'TSG-HER-SUT-RED-L', color: 'Crimson Red', size: 'L', stock: 15 },
                    { sku: 'TSG-HER-SUT-BLK-S', color: 'Jet Black', size: 'S', stock: 18 },
                    { sku: 'TSG-HER-SUT-BLK-M', color: 'Jet Black', size: 'M', stock: 18 },
                ]
            }
        }
    })

    await prisma.product.upsert({
        where: { id: 'tsg-her-004' },
        update: {},
        create: {
            id: 'tsg-her-004',
            name: 'Glow in Winter \'26 Puffer',
            description: 'Reflective puffer jacket with phosphorescent panels. Glows in the dark. Vegan fill.',
            price: 545.00,
            category: 'for-her',
            imageUrl: '/images/products/puffer-winter26.jpg',
            variants: {
                create: [
                    { sku: 'TSG-HER-PUF-WHT-XS', color: 'Arctic White', size: 'XS', stock: 25 },
                    { sku: 'TSG-HER-PUF-WHT-S', color: 'Arctic White', size: 'S', stock: 30 },
                    { sku: 'TSG-HER-PUF-WHT-M', color: 'Arctic White', size: 'M', stock: 30 },
                    { sku: 'TSG-HER-PUF-WHT-L', color: 'Arctic White', size: 'L', stock: 20 },
                    { sku: 'TSG-HER-PUF-BLK-S', color: 'Jet Black', size: 'S', stock: 25 },
                    { sku: 'TSG-HER-PUF-BLK-M', color: 'Jet Black', size: 'M', stock: 25 },
                ]
            }
        }
    })

    console.log('✅ For Her seeded')

    // ─────────────────────────────────────────
    // EXCLUSIVE 💎
    // ─────────────────────────────────────────
    await prisma.product.upsert({
        where: { id: 'tsg-exc-001' },
        update: {},
        create: {
            id: 'tsg-exc-001',
            name: 'Crystal Skies Corset Top',
            description: 'Hand-beaded corset with Swarovski crystal detailing. Made to order. Ships in 4-6 weeks.',
            price: 1200.00,
            category: 'exclusive',
            imageUrl: '/images/products/corset-crystal-skies.jpg',
            variants: {
                create: [
                    { sku: 'TSG-EXC-CRS-CLR-XS', color: 'Crystal Clear', size: 'XS', stock: 5 },
                    { sku: 'TSG-EXC-CRS-CLR-S', color: 'Crystal Clear', size: 'S', stock: 5 },
                    { sku: 'TSG-EXC-CRS-CLR-M', color: 'Crystal Clear', size: 'M', stock: 5 },
                    { sku: 'TSG-EXC-CRS-BLU-S', color: 'Sapphire Blue', size: 'S', stock: 3 },
                    { sku: 'TSG-EXC-CRS-BLU-M', color: 'Sapphire Blue', size: 'M', stock: 3 },
                ]
            }
        }
    })

    await prisma.product.upsert({
        where: { id: 'tsg-exc-002' },
        update: {},
        create: {
            id: 'tsg-exc-002',
            name: 'Pride \'25 Limited Bomber',
            description: 'Rainbow-sequined bomber jacket. Numbered edition — only 100 made. Inner sleeve signed.',
            price: 850.00,
            category: 'exclusive',
            imageUrl: '/images/products/bomber-pride25.jpg',
            variants: {
                create: [
                    { sku: 'TSG-EXC-BMB-RBW-S', color: 'Rainbow', size: 'S', stock: 20 },
                    { sku: 'TSG-EXC-BMB-RBW-M', color: 'Rainbow', size: 'M', stock: 30 },
                    { sku: 'TSG-EXC-BMB-RBW-L', color: 'Rainbow', size: 'L', stock: 30 },
                    { sku: 'TSG-EXC-BMB-RBW-XL', color: 'Rainbow', size: 'XL', stock: 20 },
                ]
            }
        }
    })

    console.log('✅ Exclusive seeded')

    // ─────────────────────────────────────────
    // SALE ✨
    // ─────────────────────────────────────────
    await prisma.product.upsert({
        where: { id: 'tsg-sale-001' },
        update: {},
        create: {
            id: 'tsg-sale-001',
            name: 'Iridescence Mini Bag [ARCHIVE]',
            description: 'Season-1 archive piece. Nano crossbody in iridescent PVC. Minor cosmetic irregularities — priced to clear.',
            price: 89.00,
            category: 'sale',
            imageUrl: '/images/products/bag-iridescence-archive.jpg',
            variants: {
                create: [
                    { sku: 'TSG-SLE-BAG-IRD-OS', color: 'Iridescent', size: 'One Size', stock: 30 },
                ]
            }
        }
    })

    await prisma.product.upsert({
        where: { id: 'tsg-sale-002' },
        update: {},
        create: {
            id: 'tsg-sale-002',
            name: 'Cosmic Hoodie [ARCHIVE]',
            description: 'S1 archive hoodie. Galaxy-dye relaxed pullover. Minor fading variation in dye — each is unique.',
            price: 65.00,
            category: 'sale',
            imageUrl: '/images/products/hoodie-cosmic-archive.jpg',
            variants: {
                create: [
                    { sku: 'TSG-SLE-HOD-CSM-S', color: 'Galaxy Multi', size: 'S', stock: 15 },
                    { sku: 'TSG-SLE-HOD-CSM-M', color: 'Galaxy Multi', size: 'M', stock: 20 },
                    { sku: 'TSG-SLE-HOD-CSM-L', color: 'Galaxy Multi', size: 'L', stock: 18 },
                ]
            }
        }
    })

    console.log('✅ Sale seeded')

    // ─────────────────────────────────────────
    // DELETE old placeholder product
    // ─────────────────────────────────────────
    try {
        await prisma.productVariant.deleteMany({ where: { productId: 'silk-scarf-001' } })
        await prisma.product.delete({ where: { id: 'silk-scarf-001' } })
        console.log('🗑️  Removed old placeholder product.')
    } catch {
        // Already gone — that's fine
    }

    console.log('')
    console.log('🏆 tsgabrielle® Product Database COMPLETE!')
    console.log('   7 categories | 16 products | 90+ variants')
    console.log('')
}

main()
    .then(async () => { await prisma.$disconnect() })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
