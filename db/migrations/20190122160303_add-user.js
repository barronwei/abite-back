exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table
      .uuid('id')
      .notNull()
      .primary()
    table.text('name').notNull()
    table.text('email').notNull()
    table.text('hometown').notNull()
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
  return knex.schema.dropTable('users')
}
