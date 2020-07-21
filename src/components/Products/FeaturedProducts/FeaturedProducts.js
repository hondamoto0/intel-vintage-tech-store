import React, { useContext } from "react";
// Components
import { ProductList } from "../";
// Context API
import { ProductContext } from "../../../context/products";
// Hoc
import withLoading from "../../../hoc/withLoading";
const FeaturedProductsContainer = withLoading(ProductList);
export default function FeaturedProducts() {
  const { loading, featured } = useContext(ProductContext);
  return (
    <FeaturedProductsContainer
      isLoading={loading}
      title="featured products"
      products={featured}
    />
  );
}
