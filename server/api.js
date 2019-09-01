const axios = require('axios');
const { prop } = require('ramda');

const url = (path) => `https://api.github.com/${path}`;

exports.api = Object.freeze({

    searchUsers: (params) => axios
        .get(url('search/users'), { params })
        .then(
            prop('data'),
            (error) => ({
                status: error.response.status,
                message: error.response.statusText,
            }),
        ),

    getUser: (login) => axios
        .get(url(`users/${login}`))
        .then(
            prop('data'),
            (error) => ({
                status: error.response.status,
                message: error.response.statusText,
            }),
        ),
});
