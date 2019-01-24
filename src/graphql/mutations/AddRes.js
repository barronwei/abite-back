const Restaurant = require('../../models/Restaurant')
const Comment = require('../../models/Comment')

const addRes = async (obj, args, context) => {
  const rest = await Restaurant.query()
    .select('id', 'name', 'hometown', 'lat', 'long')
    .where('id', args.input.restaurantId)

  if (!rest.length) {
    await Comment.query().insert({
      userId: 'dab',
      restaurantId: args.input.restaurantId,
      content: args.input.content,
    })
    await Restaurant.query().insert({
      restaurantId: args.input.restaurantId,
      hometown: 'dab',
    }) // replace dab with context user hometown
  }
  return rest[0]
}

const resolver = { Mutation: { addRes } }

module.exports = resolver
