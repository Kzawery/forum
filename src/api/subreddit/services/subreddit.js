'use strict';

/**
 * subreddit service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::subreddit.subreddit');
