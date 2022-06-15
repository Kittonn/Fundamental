const Product = {
  category: ({ categoryId }, args, { categories }) => {
    return categories.find((cate) => cate.id === categoryId);
  },
};

module.exports = Product;
