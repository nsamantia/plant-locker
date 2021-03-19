SELECT p.id, p.plant, p.plant_category_id, p.plant_image, p.plant_comment
FROM plants_second_pl p
JOIN users_pl u ON p.user_id = u.id
WHERE u.id = $1 AND p.id = $2;