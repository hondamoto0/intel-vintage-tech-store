// helper functions
export const featuredProductsFilter = products => {
  const featuredProducts = products.filter(product => product.featured);
  return featuredProducts;
};

// đổi từ image url => image
export const flattenProducts = products => {
  return products.map(product => {
    let image = product.image && `${product.image.url}`;
    return { ...product, image };
  });
};

export const paginate = products => {
  //   const itemsPerPage = 4;
  //   const numberOfPages = Math.ceil(products.length / itemsPerPage);
  //   const newProducts = Array.from({ length: numberOfPages }, () => {});
  //   return products;
};
