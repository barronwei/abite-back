exports.up = function(knex, Promise) {
  return knex.schema.createTable('usersrestaurants', table => {
    table
      .uuid('id')
      .notNull()
      .primary()
    table.text('userId').notNull()
    table.text('restaurantId').notNull()
    table
      .timestamp('createdAt')
      .defaultTo(knex.fn.now())
      .notNull()
    table
      .timestamp('updatedAt')
      .defaultTo(knex.fn.now())
      .notNull()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('usersrestaurants')
}
