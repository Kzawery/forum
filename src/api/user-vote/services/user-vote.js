'use strict';

/**
 * user-vote service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-vote.user-vote');
