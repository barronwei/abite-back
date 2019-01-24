const gql = require('graphql-tag')

module.exports = gql`
  type Query {
    user(email: String!): User! ###
    userFavorites(userId: ID!): [Restaurant!]
    search(hometown: String!): [Restaurant!] ###
    drop(hometown: String!): [Hom!]
    comments(name: String!): [String!]
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
    hometown: String!
    lat: Float
    long: Float
  }

  type Hom {
    name: String!
    lat: Float!
    long: Float!
  }

  type Mutation {
    addRes(input: AddResInput): AddResReturn!
    remRes(input: RemResInput!): RemResReturn!
    createUser(input: CreateUserInput!): LoginReturn!
    loginUser(email: String!, password: String!): LoginReturn!
    # addCom(input: AddComInput!): AddComReturn!
  }

  input AddResInput {
    userId: ID!
    comment: String!
    restaurantId: ID!
  }

  type AddResReturn {
    restaurant: Restaurant
    error: Error
  }

  input AddHomInput {
    userId: ID!
    restaurantId: ID!
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
    success: Boolean
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

  # input AddComInput {
  #   restaurantId: ID!
  #   userId: ID!
  #   content: String!
  # }

  # type AddComReturn {
  #   restaurant: String!
  #   content: String!
  # }

  type Error {
    message: String
  }
`
