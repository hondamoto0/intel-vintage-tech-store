import React from "react";
// react-router-dom
import { Link } from "react-router-dom";
// components
import { Hero, FeaturedProduct } from "../../components";
export default function Home() {
  return (
    <>
      <Hero>
        <Link to="/products" className="btn btn-primary btn-hero">
          our products
        </Link>
      </Hero>
      <FeaturedProduct />
    </>
  );
}
