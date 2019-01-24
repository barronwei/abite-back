const User = require('../../../models/User')
const Comment = require('../../../models/Comment')
const Restaurant = require('../../../models/Comment')

const userResolver = async (obj, args, context) => {
  // TODO: Write a resolver which returns a user given a user id.

  const userReturn = await User.query()
    .select('id', 'name', 'email', 'hometown')
    .where('email', args.email)

  // const { id, name, email, hometown } = userReturn

  // const resolve = { id, name, email, hometown }

  console.log(userReturn)

  return userReturn[0]
}

const favoritesResolver = async (obj, args, context) => {
  // const favReturn = await Comment.query()
  //   .select('userId', 'restaurantId', 'content', 'createdAt', 'updatedAt')
  //   .where('userId', args.id)

  const holder = await User.$relatedQuery('restaurants')
    .select('name')
    .where('userId', args.id)
  // const restName = await Restaurant.query().where('id', favReturn.restaurantId)

  // const returnType = {
  //   userId: favReturn.userId,
  //   restId: favReturn.restaurantId,
  //   restName: favReturn.restName[0].name,
  //   conte,
  // }
  return holder
}

const resolver = {
  Query: {
    user: userResolver,
    userFavorites: favoritesResolver,
  },
}

module.exports = resolver
