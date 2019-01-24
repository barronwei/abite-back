const casual = require('casual')

casual.define('comment', () => ({
  id: casual.uuid,
  userId: casual.uuid,
  restaurantId: casual.uuid,
  content: casual.sentences(2),
}))

const comments = []
for (let i = 0; i < 15; i += 1) {
  comments.push(casual.comment)
}

module.exports = comments
