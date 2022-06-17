const { v4: uuid } = require("uuid");
const Mutation = {
  addPost: (parent, { input }, { post }) => {
    const newPost = {
      id: new Date().getMilliseconds(),
      ...input,
    };
    post.push(newPost);
    return newPost;
  },
  deletePost:(parent,{id},{post}) =>{
    post = post.filter(item=>item.id !== Number(id))
    return true
  },
  updatePost:(parent,{id,input},{post}) => {
    const index = post.findIndex(item=>item.id === Number(id))
    post[index] = {...post[index],...input}
    return post[index]
  }
};

module.exports = Mutation;
