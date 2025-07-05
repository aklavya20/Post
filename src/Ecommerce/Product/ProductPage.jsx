import React from "react";
import useFetch from "../CustomHook/useFetch";
import { Link } from "react-router";

const ProductPage = () => {
  const url = "https://dummyjson.com/products";
  const products = useFetch(url);
  console.log(products);
  return (
    <div className="flex flex-col space-y-2 m-6">
      {products.products &&
        products.products.map((p, i) => (
          <Link to={`/product/${p.id}`}>
            <div className="border rounded-lg w-96 h-auto" key={i}>
              <div className=" flex flex-row justify-center">
                <img className="w-44 h-44" src={p.images} />
              </div>
              <div className="flex flex-row justify-end pr-2">
                <span className="bg-zinc-600 border rounded-lg text-white px-3 py-1 right-0">
                  {p.category}
                </span>
              </div>
              <div className="font-medium text-xl text-center">{p.title}</div>
              <div className=" font-light text-sm p-3">{p.description}</div>
              <div className="flex flex-row px-3 justify-between">
                <div className="flex flex-row font-light text-xs">
                  <div className="font-medium mr-1">£</div>
                  {p.price}
                </div>
                <div className="flex flex-row text-xs">
                  <div className="font-medium">Discount:</div>
                  {p.discountPercentage}%
                </div>
              </div>
              <div className="flex flex-row py-1 px-2 justify-between">
                <button className="bg-black border rounded-lg px-3 py-1 text-white">
                  View
                </button>
                <button className="bg-black border rounded-lg px-3 py-1 text-white">
                  Buy Now
                </button>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default ProductPage;
