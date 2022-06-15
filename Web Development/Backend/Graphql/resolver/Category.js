const { products, categories, reviews } = require("../db");
const Category = {
  products: (parent, args, context) => {
    const { id } = parent;
    return products.filter((product) => product.categoryId === id);
  },
}

module.exports = Category