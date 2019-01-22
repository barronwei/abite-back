const casual = require('casual')

casual.define('post', () => ({
  id: casual.uuid,
  userId: casual.uuid,
  restId: casual.uuid,
  content: casual.sentences(2),
}))

const posts = []

for (let i = 0; i < 15; i++) {
  posts.push(casual.post)
}

module.exports = posts
