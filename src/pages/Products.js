import React, { useContext } from "react";
// Context API
import { ProductContext } from "../context/products";
// Components
import { Loading, ProductList } from "../components";

export default function Products() {
  const { loading, products } = useContext(ProductContext);
  // const { greeting } = useContext(ProductContext);
  if (loading) {
    return <Loading />;
  }
  return <ProductList title="our products" products={products} />;
}
