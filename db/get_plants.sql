SELECT *
FROM plants_pl p
JOIN users_pl u ON p.user_id = u.id
-- JOIN category_pl c ON p.plant_category_id = c.category_id
WHERE u.id = $1 AND p.plant_category_id = $2;