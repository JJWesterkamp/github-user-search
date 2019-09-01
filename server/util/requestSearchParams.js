const { mergeRight, pick, pipe, prop } = require('ramda');
const { defaultSearchParams, searchParameterKeys } = require('../../config/app');

/**
 * @param {e.Request} request
 * @type {function(request: e.Request): { q: string|null, page: number, per_page: number }}
 */
exports.requestSearchParams = pipe(
    prop('query'),
    pick(searchParameterKeys),
    mergeRight(defaultSearchParams),
);
