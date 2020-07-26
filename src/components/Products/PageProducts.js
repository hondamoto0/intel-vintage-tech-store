import React, { useContext } from "react";
// components
import { ProductList } from "./index";
// Context API
import { ProductContext } from "../../context/products";
// icons
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
const itemsPerPage = 4;
const PageProducts = () => {
  const { sorted, page, changePage, products } = useContext(ProductContext);
  const pagnigateProducts = products => {
    let currentPageOfProducts = page;
    let endIndexOfProducts = currentPageOfProducts * itemsPerPage;
    let startIndexOfProducts = endIndexOfProducts - itemsPerPage;
    return products.slice(startIndexOfProducts, endIndexOfProducts);
  };
  const renderPaginations = () => {
    const numPages = Math.ceil(sorted.length / itemsPerPage);
    if (numPages <= 1) {
      return;
    }
    const numButtonsPages = [...Array(numPages)];
    console.log("re-render");
    return (
      <div className="pagination-buttons">
        {/* prev button */}
        {page > 1 && (
          <button
            className="prev-page-btn"
            onClick={() => changePage(page - 1)}
          >
            <FaAngleDoubleLeft />
          </button>
        )}
        {numButtonsPages.map((_, i) => (
          <button
            className={`page-btn ${page === i + 1 && `page-btn-current`}`}
            key={i}
            onClick={() => {
              changePage(i + 1);
            }}
          >
            {i + 1}
          </button>
        ))}
        {/* next button */}
        {page < numPages && (
          <button
            className="next-page-btn"
            onClick={() => changePage(page + 1)}
          >
            <FaAngleDoubleRight />
          </button>
        )}
      </div>
    );
  };
  if (sorted.length > 0) {
    return (
      <>
        <ProductList products={pagnigateProducts(sorted)} />
        {renderPaginations()}
      </>
    );
  } else {
    return <h3 className="search-errors">We cant find any products here</h3>;
  }
};

export default PageProducts;
