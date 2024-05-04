'use strict';

/**
 * post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post', {
    async search(ctx) {
        const { q } = ctx.query;
        
        if (!q) {
            return ctx.badRequest('Search query parameter "q" is required.');
        }
        
        try {
            // Make sure to use the correct entity service API to search
            const posts = await strapi.entityService.search({
                entity: 'api::post.post',
                filters: {
                    $text: {
                        $search: q
                    }
                }
            });

            // Returning posts in a standardized response format
            return this.transformResponse(posts);
        } catch (err) {
            ctx.throw(500, `Failed to perform search: ${err.message}`);
        }
    },
});
