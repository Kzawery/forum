'use strict';

/**
 * subreddit router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::subreddit.subreddit');
