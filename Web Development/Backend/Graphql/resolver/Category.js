const Category = {
  products: ({ id }, { filter }, { products }) => {
    const categoryProducts = products.filter(
      (product) => product.categoryId === id
    );
    let filterCategoryProduct = categoryProducts;
    if (filter) {
      if (filter.onSale === true) {
        filterCategoryProduct = filterCategoryProduct.filter((product) => {
          return product.onSale;
        });
      }
    }
    return filterCategoryProduct;
  },
};

module.exports = Category;
