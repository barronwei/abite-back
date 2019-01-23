const casual = require('casual')

casual.define('restaurant', () => ({
  id: casual.uuid,
  name: casual.random_element([
    'rest1',
    'rest2',
    'rest3',
    'rest4',
    'rest5',
    'rest6',
    'rest7',
  ]),
  lat: 1,
  long: 2,
}))

const restaurants = []

for (let i = 0; i < 15; i += 1) {
  restaurants.push(casual.restaurant)
}

module.exports = restaurants
