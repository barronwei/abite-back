const BaseModel = require('./BaseModel')
const { ManyToManyRelation } = require('objection')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    const Restaurant = require('./Restaurant')
    return {
      users: {
        relation: ManytoManyRelation,
        modelClass: User,
        join: {
          from: 'restaurants.id',
          through: {
            from: 'usersrestaurants.restaurantId',
            to: 'usersrestaurants.userId',
          },
          to: 'posts.userId',
        },
      },
    }
  }
}

module.exports = User
