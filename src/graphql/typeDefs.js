const gql = require('graphql-tag')

module.exports = gql`
  type Query {
    user(email: String!): User! ###
    search(hometown: String!): [Restaurant!] ###
    drop(hometown: String!): [Hom!]
  }

  type User {
    id: ID!
    name: String!
    email: String!
    hometown: Hom!
  }

  type Restaurant {
    id: ID!
    name: String!
    lat: float!
    long: float!
  }

  type Hom {
    name: String!
    lat: float!
    long: float!
  }

  type Mutation {
    addRes(input: AddResInput): AddResReturn!
    addHom(input: AddHomInput!): AddHomReturn!
    remRes(input: RemResInput!): RemResReturn!
    editHom(input: EditHomInput!): EditHomReturn!
    createUser(input: CreateUserInput!): LoginReturn!
    loginUser(email: String!, password: String!): LoginReturn!
    addCom(input: AddComInput!): AddComReturn!
  }

  input AddResInput {
    userId: ID!
    restaurantId: ID!
  }

  type AddResReturn {
    restaurant: Restaurant
    error: Error
  }

  input AddHomInput {
    userId: ID!
    restaurantID: ID!
  }

  type AddHomReturn {
    hom: Hom
    error: Error
  }

  input RemResInput {
    userId: ID!
    restaurantId: ID!
  }

  type RemResReturn {
    success: bool
    error: Error
  }

  input EditHomInput {
    userId: ID!
    hometown: String!
  }

  type EditHomReturn {
    hom: Hom
    error: Error
  }

  type userRestaurant {
    userId: ID!
    restaurantId: ID!
    comment: String!
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

  input AddComInput {
    restaurantID: ID!
    userId: ID!
    content: String!
  }

  type AddComReturn {
    restaurant: String!
    content: String!
  }

  type Error {
    message: String
  }
`
