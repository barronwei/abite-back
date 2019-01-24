const BaseModel = require('./BaseModel')
const { ManytoManyRelation } = require('objection')

class Restaurant extends BaseModel {
  static get tableName() {
    return 'restaurants'
  }

  static get relationMappings() {
    const User = require('./User')
    return {
      restaurants: {
        relation: ManytoManyRelation,
        modelClass: User,
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

module.exports = Restaurant
