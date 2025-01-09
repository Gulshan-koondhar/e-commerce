/* eslint-disable @next/next/no-async-client-component */

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProducts {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Products = async ({ limit }: { limit?: number }) => {
  const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
  const products: IProducts[] = await res.json();

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1 className="font-bold text-2xl mb-4">Featured Products</h1>
      <ul className="flex justify-center items-center gap-4 flex-wrap">
        {products.length > 0 ? (
          products.map((product) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="ring-2 ring-gray-300 shadow-xl rounded-lg p-2"
            >
              <div className="w-[270px]">
                <Image
                  src={product.image}
                  alt="product Image"
                  width={400}
                  height={400}
                  className="w-[300px] h-[200px] object-contain"
                />
                <div>
                  <h1 className="text-lg font-semibold mt-4 line-clamp-1 ">
                    {product.title}
                  </h1>
                  <p className="font-medium text-lg">{`$ ${product.price}`}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No products available</p>
        )}
      </ul>
    </div>
  );
};

export default Products;
