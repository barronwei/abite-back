const User = require('../../../models/Resturaunt')

const searchResolver = async (obj, args, context) => {

  let usersList = await User.query()

  if (substr) {
    usersList = usersList.filter(el =>
      el.name.toLowerCase().includes(args.hometown.toLowerCase()),
    )
  }

  return usersList
}

const resolver = {
  Query: {
    search: userResolver,
    users: usersResolver,
  },
}

module.exports = resolver
