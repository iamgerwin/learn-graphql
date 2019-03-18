// import { compose, graphql } from 'react-apollo'

import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: String
        language: String
        email: String
    }

    type Email {
        email: String
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
    }

    type Query {
        hello: String
        friend: Friend
    }

    input FriendInput {
        id: ID
        firstName: String
        lastName: String
        gender: String
        language: String
        email: String!
    }
`)

export default schema;