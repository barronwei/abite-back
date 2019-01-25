const User = require('../../models/User')
const Restaurant = require('../../models/Restaurant')
const bcrypt = require('bcrypt')
const config = require('../../../config')
const jwt = require('jsonwebtoken')
const _ = require('lodash')

const createUser = async (obj, { input }) => {
  const registerInput = _.pick(input, ['name', 'email', 'hometown'])
  const placeholder = _.pick(input, ['restaurant'])
  const restaurantInput = _.pick(input, ['hometown'])
  restaurantInput.name = placeholder.restaurant
  console.log(input.restaurant)
  console.log(restaurantInput)
  console.log(registerInput)

  const result = await User.query().findOne('email', input.email)

  if (result) {
    return {
      error: { message: 'Email already exists!' },
    }
  }

  const hash = bcrypt.hashSync(input.password, config.saltRounds)

  registerInput.password = hash

  const user = await User.query().insertWithRelatedAndFetch(registerInput)

  if (!user) {
    return {
      error: { message: 'There was an error registering your information.' },
    }
  }

  const payload = { id: user.id }
  const token = jwt.sign(payload, config.tokenSecret)

  const rest = await Restaurant.query()
    .select('id', 'name', 'hometown', 'lat', 'long')
    .where('name', restaurantInput.name)

  if (!rest.length) {
    const restaurant = await Restaurant.query().insertWithRelatedAndFetch(
      restaurantInput,
    )
  }

  return {
    user,
    token,
  }
}

const resolver = { Mutation: { createUser } }

module.exports = resolver

// const User = require('../../models/User')
// const bcrypt = require('bcrypt')
// const config = require('../../../config')
// const jwt = require('jsonwebtoken')
// const _ = require('lodash')

// const createUser = async (obj, { input }) => {
//   const registerInput = _.pick(input, ['name', 'email', 'hometown'])

//   const result = await User.query().findOne('email', input.email)

//   if (result) {
//     return {
//       error: { message: 'Email already exists!' },
//     }
//   }

//   const hash = bcrypt.hashSync(input.password, config.saltRounds)

//   registerInput.password = hash

//   const user = await User.query().insert(registerInput)

//   console.log(user)

//   const payload = { id: user.id }
//   const token = jwt.sign(payload, config.tokenSecret)

//   return {
//     user,
//     token,
//   }
// }

// const resolver = { Mutation: { createUser } }

// module.exports = resolver
