const Query = {
  posts: (parent, args, { post }) => post,
  post: (parent, { id }, { post }) => {
    return post.find((item) => item.id === Number(id));
  },
};

module.exports = Query;
