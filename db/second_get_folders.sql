SELECT * 
FROM category_second_pl cs
JOIN users_pl u ON cs.user_id = u.id
-- JOIN category_pl c ON cs.category_one_id = category_id
WHERE u.id = $1 AND cs.category_one_id = $2;