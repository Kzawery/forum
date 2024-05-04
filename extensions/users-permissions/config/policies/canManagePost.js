module.exports = async (ctx, next) => {
    const { id, user } = ctx.state;
    const postId = ctx.params.id;  
  
    const post = await strapi.services.post.findOne({ id: postId });
    if (!post) {
      return ctx.unauthorized(`Post doesn't exist`);
    }
  
    if (post.user.id === user.id || (post.subreddit.moderators.some(moderator => moderator.id === user.id))) {
      return next();  // Proceed if the user is the author or a moderator of the subreddit
    }
  
    return ctx.unauthorized(`You're not allowed to perform this action`);
  };
  