const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database...');

    const silkScarf = await prisma.product.upsert({
        where: { id: 'silk-scarf-001' },
        update: {},
        create: {
            id: 'silk-scarf-001',
            name: 'Holographic Silk Scarf',
            description: 'Woven from bio-engineered silk strands infused with micro-prisms.',
            price: 250.00,
            category: 'Accessories',
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCn7d33aUR8mKHtpFidHn9nS5ApaGDapJ6dXVPRVyuKhuw9xgEbe51TUmGuQBvVOASjYf3FaGvH2J22yNN3PKLwxRkTJkJhJspQE7PlQc7KP6OD4o0v397Yb1ktF21xlJhwvbrjpHA9DHoQQOwKWAF01-TTXzJgcLPOD9XxNn3qWA-vNlJtibJFXNigcSQNscxeHq4JE5-_gs1QtVkWt7Ocixhaj9JkZxDe6PyU7VumiuuF3MIaULzZQVBSzLp6J6ER8hhdawFDs2X4',
            variants: {
                create: [
                    { sku: 'SCARF-001-WHT', color: 'Prism White', stock: 50 },
                    { sku: 'SCARF-001-BLK', color: 'Void Black', stock: 30 },
                    { sku: 'SCARF-001-SLV', color: 'Cyber Silver', stock: 20 },
                ]
            }
        },
    });

    console.log({ silkScarf });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
