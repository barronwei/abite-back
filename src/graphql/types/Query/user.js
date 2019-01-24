const User = require('../../../models/User')

const userResolver = async (obj, args, context) => {
  // TODO: Write a resolver which returns a user given a user id.

  const userReturn = await User.query()
    .select('id', 'name', 'email', 'hometown')
    .where('email', args.email)

  return userReturn[0]
}

const favoritesResolver = async (obj, args, context) => {
  // const favReturn = await Comment.query()
  //   .select('userId', 'restaurantId', 'content', 'createdAt', 'updatedAt')
  //   .where('userId', args.id)

  const holder = await User.query().findById(args.id)

  const restaurants = await holder
    .$relatedQuery('usersrestaurants')
    .select('restaurantId')

  // const restName = await Restaurant.query().where('id', favReturn.restaurantId)

  // const returnType = {
  //   userId: favReturn.userId,
  //   restId: favReturn.restaurantId,
  //   restName: favReturn.restName[0].name,
  //   conte,
  // }
  return restaurants
}

const resolver = {
  Query: {
    user: userResolver,
    userFavorites: favoritesResolver,
  },
}

module.exports = resolver
