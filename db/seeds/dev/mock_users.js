const usersData = require('../../../data/users')
const restaurantsData = require('../../../data/restaurants')
const commentsData = require('../../../data/comments')

// const createPost = (knex, post, name) => {
//   return knex('users')
//     .where('name', name)
//     .first()
//     .then(user => {
//       const { id, content } = post
//       return knex('posts').insert({
//         id,
//         content,
//         userId: user.id,
//       })
//     })
// }

// const createHobby = (knex, hobbyObj, name) => {
//   return knex('users')
//     .where('name', name)
//     .first()
//     .then(user => {
//       const { hobby, id } = hobbyObj
//       return knex('hobbies').insert({
//         id,
//         hobby,
//         userId: user.id,
//       })
//     })
// }

exports.seed = function(knex, Promise) {
  knex('users')
    .del()
    .then(() => knex('users').insert(usersData))
  knex('restaurants')
    .del()
    .then(() => knex('restaurants').insert(restaurantsData))
  knex('comments')
    .del()
    .then(() => knex('comments').insert(commentsData))
}
