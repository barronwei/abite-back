const BaseModel = require('./BaseModel')
const { ManyToManyRelation } = require('objection')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    const Restaurant = require('./Restaurant')
    return {
      usersrestaurants: {
        relation: ManyToManyRelation,
        modelClass: Restaurant,
        join: {
          from: 'users.id',
          through: {
            from: 'usersrestaurants.userId',
            to: 'usersrestaurants.restaurantId',
          },
          to: 'restaurants.id',
        },
      },
    }
  }
}

module.exports = User
