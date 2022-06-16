const { v4: uuid } = require("uuid");
const Mutation = {
  addCategory: (parent, { input }, { categories }) => {
    const { name } = input;
    const newCategory = {
      id: uuid(),
      name,
    };
    categories.push(newCategory);
    return newCategory;
  },
  deleteCategory: (parent, { id }, { categories }) => {
    categories = categories.filter((cate) => cate.id !== id);
    return true;
  },
  updateCategory: (parent,{id,input},{categories}) => {
    const index = categories.findIndex(cate=>cate.id===id)
    categories[index] = {...categories[index],...input}
    return categories[index]
  }
};

module.exports = Mutation;
