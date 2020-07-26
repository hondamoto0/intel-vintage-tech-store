import React, { useContext } from "react";
// Context API
import { ProductContext } from "../context/products";
// Components
import { Loading } from "../components";
import Filters from "../components/Products/Filters";
import PageProducts from "../components/Products/PageProducts";
export default function Products() {
  const { loading, products } = useContext(ProductContext);
  // const { greeting } = useContext(ProductContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Filters />
      <PageProducts />
    </>
  );
}
