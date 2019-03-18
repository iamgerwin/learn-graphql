import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();


app.get('/', (req, res) => {
    res.send('GraphQL learning!');
});

const root = { friend: () => {
    return {
        "id": "01633",
        "firstName": "John Gerwin",
        "lastName": "De las Alas",
        "gender": "Male",
        "language": "Tagalog",
        "email": "gerwin@intelean.com",
    }
} };

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8080, () => console.log('Running server on localhost:8080'));