const merge = require('lodash.merge')

const auth = require('./Auth')
const user = require('./User')
const post = require('./AddRes')

const resolvers = [auth, user, post]

module.exports = merge(...resolvers)
