"use client";

import { ProductType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProductCard = ({ product }: { product: ProductType }) => {
  const [acImg, setAcImg] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });
  const handleProductType = ({
    type,
    value,
  }: {
    type: "size" | "color";
    value: string;
  }) => {
    setAcImg((prev) => ({
      ...prev,
      [type]: value,
    }));
  };
  console.log(product.id, acImg.color, acImg.size);

  return (
    <>
      <div className="shadow-lg rounded-lg overflow-hidden">
        <Link href={`/products/${product.id}`}>
          <div className="relative aspect-[2/3]">
            <Image
              src={product.images[acImg.color]}
              alt="img"
              width={100}
              height={100}
              className="object-cover hover:scale-105 transition-all duration-300"
            />
          </div>
        </Link>
        <div>
          {product.name} <br />
          {product.shortDescription} <br />
          <div>
            <span>size</span> <br />
            <select
              name="size"
              id="size"
              onChange={(e) =>
                handleProductType({ type: "size", value: e.target.value })
              }
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        </div>
        <br />
        <div className="p-6 flex gap-2">
          <br />
          {product.colors.map((col) => (
            <div
              key={col}
              className={`w-6 h-6 cursor-pointer rounded-full block border  ${
                acImg.color == col ? "border-black border-4" : "border-gray-700"
              } `}
              style={{ backgroundColor: col }}
              onClick={() => handleProductType({ type: "color", value: col })}
            ></div>
          ))}
        </div>

        <div>
          ${product.price.toFixed(2)} <br />
          <button className="cursor-pointer">add to card</button>
        </div>
        {/* {product.name} <br />
          {product.shortDescription} <br />
          {product.price} <br />
          {product.description} <br />
          {product.name}
          <br />
          {product.colors[0]}
          <br />
          {product.images[acImg]}
          <div className="p-6 flex gap-2">
            <br />
            {product.colors.map((col) => (
              <div
                className={`w-6 h-6 cursor-pointer rounded-full block border  ${
                  acImg == col ? "border-black border-4" : "border-gray-700"
                } `}
                style={{ backgroundColor: col }}
                onClick={() => setAcImg(col)}
              > 
              </div>
            ))}
          </div> */}
      </div>
    </>
  );
};

export default ProductCard;
