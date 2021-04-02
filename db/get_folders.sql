SELECT c.category
FROM category_pl c
JOIN users_pl u ON c.user_id = u.id
WHERE u.id = $1;