// TODO - create client object for Google API connection which can be exported

const config = require('./config.js')

const googleMapsClient = require('@google/maps').createClient({
  key: config.apiKey,
  Promise: Promise, // 'Promise' is the native constructor.
})

module.exports = { googleMapsClient }

const google_api = require('./google_api.js')
