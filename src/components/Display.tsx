"use client";

import { useState } from "react";
import Products from "./Products";

type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
};

const Display = ({ passed_products }: { passed_products: Product[] }) => {
  const [products, setProducts] = useState(passed_products);
  const [searchText, setSearchText] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase()) ||
      product.description.toLowerCase().includes(searchText.toLowerCase()) ||
      product.price.toString().includes(searchText)
  );

  return (
    <>
      <div className="flex justify-center">
        <input
          type="text"
          className="p-2 bg-white border border-gray-300 rounded w-80"
          placeholder="search cards..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <Products products={filteredProducts} />
    </>
  );
};

export default Display;
