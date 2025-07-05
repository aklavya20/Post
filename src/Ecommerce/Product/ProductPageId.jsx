import { useParams } from "react-router";
import useFetch from "../CustomHook/useFetch";

const ProductPageId = () => {
  const id = useParams();
  const url = `https://dummyjson.com/products/${id.id}`;
  const data = useFetch(url);
  console.log("ProductPageId:", data);
  return (
    <>
      <div className="border rounded-lg w-96 h-auto m-6">
        <div className=" flex flex-row justify-center">
          <img className="w-44 h-44" src={data.images} />
        </div>
        <div className="flex flex-row justify-end pr-2">
          <span className="bg-zinc-600 border rounded-lg text-white px-3 py-1 right-0">
            {data.category}
          </span>
        </div>
        <div className="font-medium text-xl text-center">{data.title}</div>
        <div className=" font-light text-sm p-3">{data.description}</div>
        <div className="flex flex-row px-3 justify-between">
          <div className="flex flex-row font-light text-xs">
            <div className="font-medium mr-1">£</div>
            {data.price}
          </div>
          <div className="flex flex-row text-xs">
            <div className="font-medium">Discount:</div>
            {data.discountPercentage}%
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
    </>
  );
};

export default ProductPageId;
