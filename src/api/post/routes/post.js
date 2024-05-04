'use strict';

/**
 * post router
 */

const { createCoreRouter, createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::post.post', {
    config: {
        find: {
            auth: { enabled: false }, // Configure auth as an object
        },
        findOne: {
            auth: { enabled: false }, // Configure auth as an object
        },
        create: {
            auth: { enabled: false }, // Configure auth as an object
        },
        update: {
            auth: { enabled: false }, // Configure auth as an object
        },
        delete: {
            auth: { enabled: false }, // Configure auth as an object
        },
    },
    routes: [
        { // Adding custom route for search
            method: 'GET',
            path: '/posts/search', // Define the path for search
            handler: 'post.search', // This should map to the search method in your controller
            config: {
                auth: { enabled: false }, // Adjust authentication as necessary, using an object
                policies: [],
                middlewares: [],
            },
        },
    ],
});
