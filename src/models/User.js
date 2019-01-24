const BaseModel = require('./BaseModel')
const { ManytoManyRelation } = require('objection')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    const Restaurant = require('./Restaurant')
    return {
      users: {
        relation: ManytoManyRelation,
        modelClass: Restaurant,
        join: {
          from: 'restaurants.id',
          through: {
            from: 'usersrestaurants.restaurantId',
            to: 'usersrestaurants.userId',
          },
          to: 'restaurants.userId',
        },
      },
    }
  }
}

module.exports = User
