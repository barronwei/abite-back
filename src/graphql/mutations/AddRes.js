const Restaurant = require('../../models/Restaurant')

const addRes = async (obj, { input }, context) => {
  const rest = await Restaurant.query()
    .where('id', context.user.id)
    .then(res => res[0])

  const res = await Restaurant.$relatedQuery('restuarunts').insert({ input })

  if (!res) {
    throw new Error('Could not add restuarunt')
  }

  return {
    res,
  }
}

const resolver = { Mutation: { addRes } }

module.exports = resolver
