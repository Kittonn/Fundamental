const Product = {
  category: ({ categoryId }, args, { categories }) => {
    return categories.find((cate) => cate.id === categoryId);
  },
  reviews: ({ id }, args, { reviews }) => {
    return reviews.filter((re) => re.productId === id);
  },
};

module.exports = Product;
