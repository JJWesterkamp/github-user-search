const resultsPageSizes = Object.freeze({
    SMALL: 10,
    MEDIUM: 25,
    LARGE: 50,
    XLARGE: 100,
    getValues: () => [10, 25, 50, 100],
});

/**
 * The default params for the github API user search.
 * These are also the params we expect from our clients
 * when they perform  user search.
 */
const defaultSearchParams = Object.freeze({
    q: null,
    page: 1,
    per_page: resultsPageSizes.MEDIUM,
});

const searchParameterKeys = Object.keys(defaultSearchParams);

const cacheTTLSeconds = 300;
const serverHost = 'http://localhost';
const serverPort = process.env.PORT || 4000;

module.exports = {
    cacheTTLSeconds,
    defaultSearchParams,
    searchParameterKeys,
    resultsPageSizes,
    serverHost,
    serverPort,
};
