const User = require('../../../models/Resturaunt')

const searchResolver = async (obj, args, context) => {

  let usersList = await User.query()

  return usersList.filter(el =>
    el.name.toLowerCase().includes(args.hometown.toLowerCase()),
  )}

const resolver = {
  Query: {
    search: searchResolver,
  },
}

module.exports = resolver
