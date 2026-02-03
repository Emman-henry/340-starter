-- ============================================
-- TASK 1 QUERIES FOR ASSIGNMENT 2
-- ============================================


-- 1️⃣ INSERT Tony Stark (WITHOUT account_id or account_type)
INSERT INTO account (
  account_firstname,
  account_lastname,
  account_email,
  account_password
)
VALUES (
  'Tony',
  'Stark',
  'tony@starkindustries.com',
  'ironman123'
);


-- 2️⃣ UPDATE Tony Stark account_type to "Admin"
UPDATE account
SET account_type = 'Admin'
WHERE account_email = 'tony@starkindustries.com';


-- 3️⃣ DELETE Tony Stark
DELETE FROM account
WHERE account_email = 'tony@starkindustries.com';


-- 4️⃣ UPDATE GM Hummer description (small → huge)
UPDATE inventory
SET inv_description = REPLACE(inv_description, 'small interiors', 'a huge interior')
WHERE inv_make = 'GM' 
AND inv_model = 'Hummer';


-- 5️⃣ INNER JOIN inventory + classification for "Sport"
SELECT 
  inventory.inv_make,
  inventory.inv_model,
  inventory.inv_price,
  classification.classification_name
FROM inventory
INNER JOIN classification 
ON inventory.classification_id = classification.classification_id
WHERE classification.classification_name = 'Sport';


-- 6️⃣ UPDATE image paths (/images/ → /images/vehicles/)
UPDATE inventory
SET 
  inv_image = REPLACE(inv_image, '/images/', '/images/vehicles/'),
  inv_thumbnail = REPLACE(inv_thumbnail, '/images/', '/images/vehicles/');
