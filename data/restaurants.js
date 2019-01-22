const casual = require('casual')

casual.define('restaurant', () => ({
  id: casual.uuid,
  content: casual.sentences(2),
  name: casual.random_element([
    'Bliss',
    'Jada',
    'Diego',
    'Dalton',
    'Elizabeth',
    'Kofi',
    'Spencer',
  ]),
}))

const restaurants = []

for (let i = 0; i < 15; i++) {
  restaurants.push(casual.post)
}

module.exports = restaurants
