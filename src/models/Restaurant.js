const BaseModel = require('./BaseModel')
const { ManyToManyRelation } = require('objection')

class Restaurant extends BaseModel {
  static get tableName() {
    return 'restaurants'
  }

  static get relationMappings() {
    const User = require('./User')
    return {
      usersrestaurants: {
        relation: ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'restaurants.id',
          through: {
            from: 'usersrestaurants.restaurantId',
            to: 'usersrestaurants.userId',
          },
          to: 'users.id',
        },
      },
    }
  }
}

module.exports = Restaurant
