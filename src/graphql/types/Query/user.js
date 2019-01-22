const User = require('../../../models/User')

const userResolver = async (obj, args, context) => {
  // TODO: Write a resolver which returns a user given a user id.

  const userReturn = await User.query().findById(args.id)

  return userReturn
}

const usersResolver = async (obj, args, context) => {
  const { substr, hometown, house, concentration, hobbies } = args

  /* TODO: Write a resolver which returns a list of all users.

  Once you're done, implement the following pieces of functionality one by one:

  If any of the following arguments are provided, apply the corresponding filter:
    - substr: include only users whose name contains the substring
    - hometown: include only users from that hometown
    - house: include only users from that house
    - concentration: include only users who have that concentration
    - hobbies: include only users who have indicated one of the hobbies in that list
  */

  let usersList = await User.query()

  if (substr) {
    usersList = usersList.filter(el =>
      el.name.toLowerCase().includes(substr.toLowerCase()),
    )
  }

  if (hometown) {
    usersList = usersList.filter(
      el => el.hometown.toLowerCase() === hometown.toLowerCase(),
    )
  }

  if (house) {
    usersList = usersList.filter(
      el => el.house.toLowerCase() === house.toLowerCase(),
    )
  }

  if (concentration) {
    usersList = usersList.filter(
      el => el.concentration.toLowerCase() === concentration.toLowerCase(),
    )
  }

  if (hobbies) {
    usersList = usersList.filter(
      el => el.hobbies.toLowerCase() === hobbies.toLowerCase(),
    )
  }

  return usersList
}

const resolver = {
  Query: {
    user: userResolver,
    users: usersResolver,
  },
}

module.exports = resolver
