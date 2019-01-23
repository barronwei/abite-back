const User = require('../../models/User')
const bcrypt = require('bcrypt')
const config = require('../../../config')
const jwt = require('jsonwebtoken')
const _ = require('lodash')

const createUser = async (obj, { input }) => {
  const registerInput = _.pick(input, ['name', 'email', 'hometown'])

  const result = await User.query().findOne('email', input.email)

  if (result) {
    return {
      error: { message: 'Email already exists!' },
    }
  }

  const hash = bcrypt.hashSync(input.password, config.saltRounds)

  registerInput.password = hash

  const user = await User.query().insertWithRelatedAndFetch(registerInput)

  const payload = { id: user.id }
  const token = jwt.sign(payload, config.tokenSecret)

  return {
    user,
    token,
  }
}

const resolver = { Mutation: { createUser } }

module.exports = resolver
