const gql = require('graphql-tag')

module.exports = gql`

  type Query {
    user(username: String!): User!
    search(hometown: String!): [Restaurant!]
    drop(hometown: String!): [Hom!]
  }

  type Mutation {
    addRes(input: String!): AddResReturn!
    remRes(input: ID!): RemResReturn!
    addHom(input: String!): AddHomReturn!
    editHom(input: ID!): EditHomReturn!
    createUser(input: CreateUserInput!): LoginReturn!
    loginUser(email: String!, password: String!): LoginReturn!
  }

  type AddResReturn {
    restaurant: Restaurant
    error: Error
  }

  type RemResReturn {
    success: bool
    error: Error
  }

  type AddHomReturn {
    hom: Hom
    error: Error
  }

  type EditHomReturn {
    hom: Hom
    error: Error
  }
  
  type User {
    id: ID!
    name: String!
    email: String!
    hometown: Hom!
  }

  type Restaurant {
    id: ID!
    location: Loc!
  }

  type userRestaurant {
    userId: ID!
    restaurantId: ID!
    comment: String!
  }

  type Hom {
    name: String!
    loc: Loc!
  }

  type Loc {
    lat: float!
    long: float!
  }

  input CreateUserInput {
    name: String!
    email: String!
    password: String!
    hometown: String
  }

  input SearchInput {
    search: String!
  }

  type LoginReturn {
    user: User
    token: String
    error: Error
  }

  type Error {
    message: String
  }
`
