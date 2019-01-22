const User = require('../../models/User')

const addRes = async (obj, { input }, context) => {
  if (!context.user) {
    return {
      error: {
        message: 'User not logged in',
      },
    }
  }

  const user = await User.query()
    .where('id', context.user.id)
    .then(res => res[0])

  if (!user) {
    return {
      error: {
        message: 'Logged in user does not exist',
      },
    }
  }

  const res = await user.$relatedQuery('restuarunts').insert({ input })

  if (!res) {
    throw new Error('Could not add restuarunt')
  }

  return {
    res,
  }
}

const resolver = { Mutation: { addRes } }

module.exports = resolver
