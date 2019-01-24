const Comment = require('../../../models/Comment')
const Restaurant = require('../../../models/Restaurant')

const commentsResolver = async (obj, args, context) => {
  const restReturn = await Restaurant.query()
    .select('id')
    .where('name', args.name)
    .then(res => res[0].id)
  const searchReturn = await Comment.query()
    .select('content')
    .where('restaurantId', restReturn)
  const results = searchReturn.map(e => e.content)
  return results
}

const resolver = {
  Query: {
    comments: commentsResolver,
  },
}

module.exports = resolver
