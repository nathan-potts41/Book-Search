const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
}
type Book {
    authors: [String]
    bookId: ID!
    description: String!
    title: String!
    image: String
    link: String
}
type Auth {
    token: ID!
    user: User
}
type Query {
    me: User
}

input BookInput {
    authors: [String],
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    # saveBook(author: [String!], description: String!, title: String!, bookId: String!, image: String!, link: String!): User
    saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
}
`;

module.exports = typeDefs;