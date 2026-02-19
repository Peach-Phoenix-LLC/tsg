-- LEVEL 4: Data Entry (E-commerce Production Design)
-- Clear existing to avoid conflicts if re-run
DELETE FROM "ProductVariant" WHERE sku LIKE 'TSG-%';
DELETE FROM "Product" WHERE id = 'silk-scarf-001';

-- Insert Product
INSERT INTO "Product" (id, name, description, price, category, "imageUrl", "createdAt", "updatedAt")
VALUES (
    'silk-scarf-001', 
    'Holographic Silk Scarf', 
    'A limited edition scarf with tsgabrielle holographic patterns.', 
    250.00, 
    'Accessories', 
    '/images/scarf.jpg', 
    NOW(), 
    NOW()
);

-- Insert Variants
INSERT INTO "ProductVariant" (id, sku, color, size, stock, price, "productId", "createdAt", "updatedAt")
VALUES 
(
    gen_random_uuid(), 
    'TSG-HLG-GLD-01', 
    'Champagne Gold', 
    'One Size', 
    50, 
    NULL, 
    'silk-scarf-001', 
    NOW(), 
    NOW()
),
(
    gen_random_uuid(), 
    'TSG-HLG-SLV-01', 
    'Starlight Silver', 
    'One Size', 
    30, 
    NULL, 
    'silk-scarf-001', 
    NOW(), 
    NOW()
);

-- LEVEL 5: Security (Row Level Security)
ALTER TABLE "Product" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "ProductVariant" ENABLE ROW LEVEL SECURITY;

-- Create Public Read Policies (Allow everyone to see products)
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Public read access for Products') THEN
        CREATE POLICY "Public read access for Products" ON "Product" FOR SELECT USING (true);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Public read access for Variants') THEN
        CREATE POLICY "Public read access for Variants" ON "ProductVariant" FOR SELECT USING (true);
    END IF;
END
$$;

-- LEVEL 6: Scaling & Real-time
-- Enable real-time for ProductVariant
-- We use a DO block to safely interact with publications
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM pg_publication WHERE pubname = 'supabase_realtime') THEN
        -- Check if table is already in publication to avoid error
        IF NOT EXISTS (
            SELECT 1 FROM pg_publication_tables 
            WHERE pubname = 'supabase_realtime' AND tablename = 'ProductVariant'
        ) THEN
            ALTER PUBLICATION supabase_realtime ADD TABLE "ProductVariant";
        END IF;
    END IF;
END $$;
