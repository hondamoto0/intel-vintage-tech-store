// helper functions
import url from "./URL";
export const featuredProductsFilter = products => {
  const featuredProducts = products.filter(product => product.featured);
  return featuredProducts;
};

// đổi từ image url => image
export const flattenProducts = products => {
  return products.map(product => {
    let image = `${product.image.url}`;
    return { ...product, image };
  });
};
