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
  //filters
  const [sorted, setSorted] = useState([]);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    search: "",
    category: "all",
    shipping: false,
    price: "all"
  });

  const changePage = index => {
    setPage(index);
  };

  const updateFilters = e => {
    const value = e.target.value;
    const type = e.target.type;
    const name = e.target.name;
    if (type === "checkbox") {
      setFilters({
        ...filters,
        [name]: e.target.checked
      });
    } else if (type === "radio") {
      if (value === "all") {
        setFilters({ ...filters, [name]: value });
      } else {
        setFilters({ ...filters, [name]: parseInt(value) });
      }
    } else {
      setFilters({ ...filters, [name]: value });
    }
  };

  useEffect(() => {
    // callAPI
    setLoading(true);
    const getProductsRequest = async () => {
      const resp = await getProducts("/products");
      const { data } = resp;
      const featuredProducts = featuredProductsFilter(flattenProducts(data));
      const products = flattenProducts(data);
      setSorted(products); // thừa
      setProducts(products);
      setFeatured(featuredProducts);
      setLoading(false);
    };
    getProductsRequest();
  }, []);

  useEffect(() => {
    console.log("run");
    let newProducts = [...products].sort((a, b) => b.price - a.price);
    const { search, category, price, shipping } = filters;
    if (search !== "") {
      newProducts = newProducts.filter(
        item =>
          item.title.toLowerCase().indexOf(search.trim().toLowerCase()) !== -1
      );
    }
    if (category !== "all") {
      newProducts = newProducts.filter(item => item.category === category);
    }
    if (shipping) {
      newProducts = newProducts.filter(item => item.shipping === shipping);
    }
    if (price !== "all") {
      switch (price) {
        case 0:
          newProducts = newProducts.filter(item => item.price < 300);
          break;
        case 300:
          newProducts = newProducts.filter(item => item.price < 650);
          break;
        case 650:
          newProducts = newProducts.filter(item => item.price > 650);
          break;
        default:
          break;
      }
    }
    setPage(1);
    setSorted(newProducts);
  }, [filters, products]);

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        featured,
        sorted,
        page,
        filters,
        changePage,
        updateFilters
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export { ProductContext, ProductProvider };
