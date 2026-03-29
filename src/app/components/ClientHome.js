"use client";

import { useEffect, useState } from "react";
import ProductGrid from "./ProductGrid";
import Filters from "./Filters";

export default function ClientHome() {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [showFilters, setShowFilters] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setSortedProducts(data);
      });
  }, []);

  const handleSort = (type) => {
    let sorted = [...products];

    if (type === "low") {
      sorted.sort((a, b) => a.price - b.price);
    }

    if (type === "high") {
      sorted.sort((a, b) => b.price - a.price);
    }

    setSortedProducts(sorted);
  };

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>Lorem ipsum dolor sit amet consectetur</p>
      </section>

      {/* TOOLBAR */}
      <div className="toolbar">
        <span>{sortedProducts.length} ITEMS</span>

        <button
          className="filter-btn"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? "HIDE FILTER" : "SHOW FILTER"}
        </button>

        <select onChange={(e) => handleSort(e.target.value)}>
          <option value="default">RECOMMENDED</option>
          <option value="low">PRICE LOW TO HIGH</option>
          <option value="high">PRICE HIGH TO LOW</option>
        </select>
      </div>

      <div className="main">
        {showFilters && <Filters />}
        <ProductGrid products={sortedProducts} />
      </div>
    </>
  );
}