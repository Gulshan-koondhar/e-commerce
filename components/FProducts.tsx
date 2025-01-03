/* eslint-disable @next/next/no-async-client-component */

import { ShoppingCart } from "lucide-react";
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

  const truncateName = (name: string, length: number) => {
    return name.length > length ? `${name.slice(0, length)}...` : name;
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1 className="font-bold text-2xl mb-4">Featured Products</h1>
      <ul className="flex justify-center items-center gap-4 flex-wrap">
        {products.length > 0 ? (
          products.map((product) => (
            <Link
              href={`/products/${product.id}`}
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
                  <h1 className="text-lg font-semibold my-2 ">
                    {truncateName(product.title, 25)}
                  </h1>
                  <p className="font-medium text-lg">{`$ ${product.price}`}</p>
                </div>
                <div className="relative">
                  <button className="bg-black text-white py-2 px-3 rounded absolute -top-10 right-0">
                    <ShoppingCart />
                  </button>
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
