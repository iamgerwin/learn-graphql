// import { compose, graphql } from 'react-apollo'

import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: String
        language: String
        emails: [Email]!
    }

    type Email {
        email: String
    }

    type Query {
        hello: String
        friend: Friend
    }
`)

export default schema;