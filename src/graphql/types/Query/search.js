const User = require('../../../models/Restaurant')

const searchResolver = async (obj, args, context) => {
  const usersList = await User.query()

  return usersList.filter(el =>
    el.name.toLowerCase().includes(args.hometown.toLowerCase()),
  )
}

const resolver = {
  Query: {
    search: searchResolver,
  },
}

module.exports = resolver
