const BaseModel = require('./BaseModel')
const { HasManyRelation } = require('objection')

class Comment extends BaseModel {
  static get tableName() {
    return 'comments'
  }

  static get relationMappings() {
    const Restaurant = require('./Restaurant')
    return {
      restaurants: {
        relation: HasManyRelation,
        modelClass: Restaurant,
        join: {
          from: 'comments.restaurantId',
          to: 'restaurants.id',
        },
      },
    }
  }
}

module.exports = Comment
