const queryString = require("querystring");
const PARSED_QUERY_STRING = queryString.parse(window.location.search.replace(/^(\?|#|&)/, ""));

/**
 * Manager of url query string
 * It can insert/update, remove query keys
 *
 * @module Core
 * @class QueryStringManager
 */
const QueryStringManager = {

    /**
     * Insert/update a query key
     *
     * @method set
     * @for QueryStringManager
     * @param  {String} key   query key
     * @param  {String} value query value
     * @chainable
     */
    set: function(key, value) {
        PARSED_QUERY_STRING[key] = value;
        return QueryStringManager;
    },

    /**
     * Get a query value
     *
     * @method get
     * @for QueryStringManager
     * @param  {String} key   query key
     */
    get: function(key) {
        return PARSED_QUERY_STRING[key];
    },

    /**
     * get all passed query strings
     *
     * @method getPasedQueryStrings
     * @for QueryStringManager
     * @param
     * @returns {{}|*}
     */
    getParsedQueryString: function() {
        return PARSED_QUERY_STRING;
    },

    /**
     * Remove a query key
     *
     * @method remove
     * @for QueryStringManager
     * @param  {String} key   query key
     * @chainable
     */
    remove: function(key) {
        delete PARSED_QUERY_STRING[key];
        return QueryStringManager;
    },

    /**
     * Trigger the change of window.location
     *
     * @method save
     * @for QueryStringManager
     */
    save: function() {
        window.location.search = queryString.stringify(PARSED_QUERY_STRING);
    },

    stringify: function() {
        return queryString.stringify(PARSED_QUERY_STRING);
    }
};

module.exports = QueryStringManager;
