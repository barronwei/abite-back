exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', table => {
    table
      .uuid('id')
      .notNull()
      .primary()
    table.text('userId').notNull()
    table.text('restaurantID').notNull()
    table.text('content').notNull()
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
  return knex.schema.dropTable('comments')
}
