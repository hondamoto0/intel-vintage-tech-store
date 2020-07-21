// products context
import React, { useState, useEffect } from "react";
// gọi API
import { getProducts } from "../apis/productsApi";
// khởi tạo Context API
import { featuredProductsFilter, flattenProducts } from "../utils/helpers";
// function Helper

const ProductContext = React.createContext();
// Provider , Consumer , useContext();

function ProductProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    // callAPI
    setLoading(true);
    const getProductsRequest = async () => {
      const resp = await getProducts("/products");
      const { data } = resp;
      const featuredProducts = featuredProductsFilter(flattenProducts(data));
      const products = flattenProducts(data);
      setFeatured(featuredProducts);
      setProducts(products);
      setLoading(false);
    };
    getProductsRequest();
  }, []);
  return (
    <ProductContext.Provider value={{ products, loading, featured }}>
      {children}
    </ProductContext.Provider>
  );
}

export { ProductContext, ProductProvider };
