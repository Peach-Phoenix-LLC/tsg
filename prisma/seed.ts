import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('Seeding database with tsgabrielle® inventory...')

    // Clear existing products (optional, be careful in production!)
    // await prisma.orderItem.deleteMany()
    // await prisma.product.deleteMany()

    // 1. Core Collection (From Home Page)
    const coreProducts = [
        {
            name: "Structured Wool Trench Coat",
            description: "A masterclass in tailoring. This structured wool trench coat features exaggerated lapels, military-inspired epaulettes, and a waist-cinching belt for a dramatic silhouette. Woven from 100% premium virgin wool in Italy.",
            price: 1850.00,
            category: "Outerwear",
            image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFo8GfNqgU9A_Z_44QYEqcQy6OQk3R2y_qP_s4xZ2jR8m6WqY1bY8c4Lp_N3_GfH_Y5_w4gP9vA6T8uM2bT_N8v_A3Q4wF9_Y1y_C4gP3x_E_W8_Y3y_q_N3_m_w5eT6_N7_E_m3u_E9bY1yWq_g_G9y4g_S_HwM9wM8_K8gX8_P9wY1",
            stock: 12,
            seo_title: "Structured Wool Trench Coat | tsgabrielle®",
            seo_description: "Italian virgin wool trench coat with military-inspired details by tsgabrielle®."
        },
        {
            name: "Silk Satin Midi Slip Dress",
            description: "Fluid elegance. Cut on the bias from heavyweight silk satin, this midi dress drapes perfectly across the body. Features a cowl neckline, delicate spaghetti straps, and a sultry side slit. Ideal for evening soirées.",
            price: 890.00,
            category: "Dresses",
            image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-6OVKfH9k5yQeM8zH2uG5oN4fB7pX9lV6cW3tZ0yR8gP1kT4sE2qL6jI7xM5rC8nU9aV4cW7uQ1vT3oE8yL5kI9rP6fV2wZ0xM4qC7hU5sE2yN8gP1jT4vL6kI9gP1fW2xM4cW7tZ0yR8",
            stock: 25,
            seo_title: "Silk Satin Midi Slip Dress | tsgabrielle®",
            seo_description: "Heavyweight silk satin slip dress with cowl neck."
        },
        {
            name: "Cashmere Turtleneck Sweater",
            description: "The foundation of a luxury winter wardrobe. Spun from 100% Mongolian cashmere, this oversized turtleneck offers unparalleled softness and warmth. Finished with ribbed trims and a side-split hem.",
            price: 650.00,
            category: "Knitwear",
            image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9sM1rW4lT7yH2oQ8cE5vN6jI0xP4pL3gA7uC9xG5dF2mV1wB4tZ8yR6jI9nX3sH5aE2vP4mK7eU8yL0wB4oQ8cG5rW4lT7tZ8pL3mK7uC9xG5dF2jI9nX3sH5aE2vP4yR6wB4eU8cG5tZ8",
            stock: 40,
            seo_title: "Cashmere Turtleneck Sweater | tsgabrielle®",
            seo_description: "100% Mongolian cashmere oversized sweater."
        }
    ]

    // 2. Shopping Bag specific items to ensure cart functionality works exactly as designed
    const cartSpecificProducts = [
        {
            name: "Sculpted Wool Overcoat",
            description: "Midnight Navy, Size 38R. Exquisite structural design with suppressed waist.",
            price: 1250.00,
            category: "Outerwear",
            image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9sM1rW4lT7yH2oQ8cE5vN6jI0xP4pL3gA7uC9xG5dF2mV1wB4tZ8yR6jI9nX3sH5aE2vP4mK7eU8yL0wB4oQ8cG5rW4lT7tZ8pL3mK7uC9xG5dF2jI9nX3sH5aE2vP4yR6wB4eU8cG5tZ8",
            stock: 5,
            seo_title: "Sculpted Wool Overcoat | tsgabrielle®",
            seo_description: "Midnight Navy Sculpted Wool Overcoat."
        },
        {
            name: "Standard Tote No. 4",
            description: "Black Pebble Calfskin. Hand-stitched full-grain Italian leather.",
            price: 890.00,
            category: "Accessories",
            image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-6OVKfH9k5yQeM8zH2uG5oN4fB7pX9lV6cW3tZ0yR8gP1kT4sE2qL6jI7xM5rC8nU9aV4cW7uQ1vT3oE8yL5kI9rP6fV2wZ0xM4qC7hU5sE2yN8gP1jT4vL6kI9gP1fW2xM4cW7tZ0yR8",
            stock: 18,
            seo_title: "Standard Tote No. 4 | tsgabrielle®",
            seo_description: "Black Pebble Calfskin leather tote bag."
        }
    ]

    const allProducts = [...coreProducts, ...cartSpecificProducts]

    for (const product of allProducts) {
        const createdProduct = await prisma.product.create({
            data: product
        })
        console.log(`Created product: ${createdProduct.name}`)
    }

    console.log('Seeding finished.')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
