import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="snap-center flex justify-center item-center rounded-lg">
        <a href="m">
          <img
            className="p-4 rounded-t-lg"
            src={product.category.image}
            alt=""
          />
        </a>
      </div>

      <div className="px-5 pb-5 item-center justify-center m-4">
        <a href="m">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-2 text-white">
          {/* <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"> */}
          {product.description}
          {/* </span> */}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>
          <Link
            to={`/product-list/${product.id}`}
            className="text-white bg-gray-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-600"
          >
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
