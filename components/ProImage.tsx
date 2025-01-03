"use client";
import Image from "next/image";
import React, { useState } from "react";

const productImage = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/29352713/pexels-photo-29352713/free-photo-of-scenic-open-road-under-clear-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/6984547/pexels-photo-6984547.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/29369234/pexels-photo-29369234/free-photo-of-scenic-mountain-view-with-power-lines.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/28748477/pexels-photo-28748477/free-photo-of-open-book-and-camera-amid-autumn-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

const ProImage = () => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div>
        <Image
          src={productImage[index].url}
          alt=""
          fill
          sizes="50vw"
          className="rounded-md"
        />
      </div>
      <div>
        {productImage.map((img, idx) => (
          <div key={img.id} onClick={() => setIndex(idx)}>
            <Image
              src={img.url}
              alt=""
              fill
              sizes="30vw"
              className="rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProImage;
