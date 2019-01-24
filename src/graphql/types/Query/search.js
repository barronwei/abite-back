const Restaurant = require('../../../models/Restaurant')

const searchResolver = async (obj, args, context) => {
  const searchReturn = await Restaurant.query()
    .select('id', 'name', 'hometown', 'lat', 'long')
    .where('hometown', args.hometown)
  return searchReturn
}

const resolver = {
  Query: {
    search: searchResolver,
  },
}

module.exports = resolver
