const BaseModel = require('./BaseModel')
const { HasManyRelation, ManyToManyRelation } = require('objection')

class Res extends BaseModel {
  static get tableName() {
    return 'res'
  }

  static get relationMappings() {
    const User = require('./User')
    const UserRes = require('./UserRes')
    return {
      posts: {
        relation: HasManyRelation,
        modelClass: Post,
        join: {
          from: 'users.id',
          to: 'posts.userId',
        },
      },
      hobbies: {
        relation: HasManyRelation,
        modelClass: Hobby,
        join: {
          from: 'users.id',
          to: 'hobbies.userId',
        },
      },
      following: {
        relation: ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          through: {
            // follows is the join table.
            from: 'follows.followerId',
            to: 'follows.followingId',
          },
          to: 'users.id',
        },
      },
    }
  }
}

module.exports = Res
