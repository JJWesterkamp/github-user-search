const btoa = require('btoa');
const mcache = require('memory-cache');
const { cacheTTLSeconds } = require('../config/app');

const cacheKeyFromString = (data) => 'express:gh-user-search:' + btoa(data);
const cacheKeyFromObject = (data) => cacheKeyFromString(JSON.stringify(data));

const Cache = Object.freeze({

    getUser: (login) => JSON.parse(mcache.get(cacheKeyFromString(login))),
    hasUser: (login) => !!Cache.getUser(login),
    putUser: (login, data) => mcache.put(
        cacheKeyFromString(login),
        JSON.stringify(data),
        cacheTTLSeconds * 1000,
    ),

    getSearchResults: (params) => JSON.parse(mcache.get(cacheKeyFromObject(params))),
    hasSearchResults: (params) => !!Cache.getSearchResults(params),
    putSearchResults: (params, data) => mcache.put(
        cacheKeyFromObject(params),
        JSON.stringify(data),
        cacheTTLSeconds * 1000,
    ),
});

exports.Cache = Cache;
