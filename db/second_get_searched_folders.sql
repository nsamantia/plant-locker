SELECT * 
FROM category_second_pl c
JOIN users_pl u ON c.user_id = u.id
WHERE u.id = $1 AND c.category ILIKE $2 AND c.category_one_id = $3;