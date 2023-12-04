/* eslint-disable @next/next/no-img-element */
"use client";

import { truncateText } from "@/lib/truncateText";
import Image from "next/image";

type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
};
const Products = ({ products }: { products: Product[] }) => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      {products.map((product) => (
        <div
          key={product.id}
          data-testid="product-card"
          className="flex flex-col gap-2 p-6 m-4 shadow-md rounded-xl bg-zinc-800 w-80"
        >
          <p data-id="id" className="text-zinc-300">
            {product.id}
          </p>
          <p className="text-lg text-zinc-200">
            {product.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          <h2
            title={product.title}
            className="text-2xl font-bold text-zinc-100"
          >
            {truncateText(product.title, 20)}
          </h2>
          <img
            src={product.images[0]}
            width={300}
            height={200}
            alt={product.title}
            loading="lazy"
            className="object-contain rounded-xl w-80 h-52"
          />
          <p className="text-zinc-400" title={product.description}>
            {truncateText(product.description, 30)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Products;
