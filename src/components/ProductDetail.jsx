import React from "react";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";

const ProductDetail = () => {
  const { productId } = useParams();
  const { data } = useAxios("https://api.escuelajs.co/api/v1/products/1");
  return (
    <div className="min-h-screen bg-orange-500 flex justify-center items-center ">
      <div className="max-w-5xl bg-white grid grid-cols-2 rounded-lg max-h-5xl">
        <div>
          <img src={data?.category.image} alt="" />
          <div>
            {data?.images.map((image, index) => (
              <img classNmae="w-40" key={index} src={image} alt="" />
            ))}
          </div>
        </div>
        <div className="">
            hello
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
