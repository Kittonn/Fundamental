const { products, categories, reviews } = require("../db");
const Product = {
  category: (parent, args, context) => {
    const { categoryId } = parent;
    return categories.find((cate) => cate.id === categoryId);
  },
}

module.exports = Product