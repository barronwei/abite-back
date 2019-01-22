const BaseModel = require('./BaseModel')
const { HasManyRelation, ManyToManyRelation } = require('objection')

class UserRes extends BaseModel {
  static get tableName() {
    return 'userres'
  }

  static get relationMappings() {
    const User = require('./User')
    const Res = require('./Res')
    return {
      posts: {
        relation: ManyToManyRelation,
        modelClass: Post,
        join: {
          from: 'users.id',
          to: 'res.userId',
        },
      },
    }
  }
}

module.exports = UserRes
