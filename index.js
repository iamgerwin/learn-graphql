import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();


app.get('/', (req, res) => {
    res.send('GraphQL learning!');
});

class Friend
{
    constructor(id, {firstName, lastName, gender, language, email}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.language = language;
        this.email = email;
    }
}

const friendDatabase = {};

const root = {
    friend: () => {
        return {
            "id": "01633",
            "firstName": "John Gerwin",
            "lastName": "De las Alas",
            "gender": "Male",
            "language": "Tagalog",
            "emails": [
                {"email": "gerwin@intelean.com"},
                {"email": "gerwin2@intelean.com"},
            ],
        }
    },
    createFriend: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        friendDatabase[id] = input;
        return new Friend(id, input);
    }
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8080, () => console.log('Running server on localhost:8080'));