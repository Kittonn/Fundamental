const Query = {
  hello: (parent, args, context) => "kitton",
  count: (parent, args, context) => 12,
  pi: (parent, args, context) => 3.14,
  check: (parent, args, context) => false,
  arrStr: (parent, args, context) => ["hello", "world"],
  products: (parent, args, { products }) => products,
  product: ({ id }, args, { products }) => {
    const product = products.find((product) => product.id === id);
    if (!product) return null;
    return product;
  },
  categories: (parent, args, { categories }) => categories,
  category: ({ id }, args, { categories }) => {
    const category = categories.find((cate) => cate.id === id);
    if (!category) return null;
    return category;
  },
};

module.exports = Query;
