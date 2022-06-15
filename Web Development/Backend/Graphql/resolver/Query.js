const { products, categories, reviews } = require("../db");
const Query =  {
  hello: () => "kitton",
  count: () => 12,
  pi: () => 3.14,
  check: () => false,
  arrStr: () => ["hello", "world"],
  products: () => products,
  product: (parent, args, context) => {
    const { id } = args;
    const product = products.find((product) => product.id === id);
    if (!product) return null;
    return product;
  },
  categories: () => categories,
  category: (parent, args, context) => {
    const { id } = args;
    const category = categories.find((cate) => cate.id === id);
    if (!category) return null;
    return category;
  },
}

module.exports = Query