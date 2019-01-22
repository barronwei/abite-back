const User = require('../../../models/User')

const userResolver = async (obj, args, context) => {
  // TODO: Write a resolver which returns a user given a user id.

  const userReturn = await User.query().where('email', 'LIKE', args.email)

  return userReturn
}

const resolver = {
  Query: {
    user: userResolver
  }
}

module.exports = resolver
