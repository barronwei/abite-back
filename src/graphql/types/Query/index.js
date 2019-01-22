const merge = require('lodash.merge')

const user = require('./user')
const search = require('./search')
const drop = require('./drop')

const resolvers = [user, search, drop]

module.exports = merge(...resolvers)
