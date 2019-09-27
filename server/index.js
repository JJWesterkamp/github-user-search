const { isNil } = require('ramda');
const { Cache } = require('./cache');
const { api } = require('./api');
const { requestSearchParams } = require('./util/requestSearchParams');
const { app } = require('./bootstrap/express.bootstrap');
const { serverPort } = require('../config/app');

app.get('/', (req, res) => res.json({ message: `Here's the server!` }));

app.get('/search', (req, res) => {

    const query = requestSearchParams(req);

    if (isNil(query.q)) {
        res.status(422)
            .json({ message: 'Missing required parameter: q' });
        return;
    }

    if (Cache.hasSearchResults(query)) {
        res.json(Cache.getSearchResults(query));
        return;
    }

    api.searchUsers(query)
        .then(
            (users) => {
                Cache.putSearchResults(query, users);
                res.json(users);
            },
            (error) => res.status(error.status || 500)
                .json({ message: error.message }),
        );
});

app.get('/user/:login', (req, res) => {

    const login = req.params.login;

    if (Cache.hasUser(login)) {
        res.json(Cache.getUser(login));
        return;
    }

    api.getUser(login)
        .then(
            (user) => {
                Cache.putUser(login, user);
                res.json(user);
            },
            (error) => res.status(error.status || 500)
                .json({ message: error.message }),
        );
});

app.listen(serverPort, () => {
    console.log(`listening on ${serverPort}`);
});
