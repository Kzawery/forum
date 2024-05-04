'use strict';

/**
 * subreddit controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::subreddit.subreddit');
