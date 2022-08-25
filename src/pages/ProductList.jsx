import React, { useEffect } from "react";
import useAxios from "../hooks/useAxios";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
import { useProductContext } from "../Context/productContext";

function ProductList() {
  const { data, isLoading, error } = useAxios(
    "https://fakestoreapi.com/products"
  );
  const { products, setProducts } = useProductContext();

  useEffect(() => {
    setProducts(data);
  }, [data, setProducts]);

  if (isLoading) return <Spinner />;
  if (error) return <p>{error}</p>;

  console.log(products);

  return (
    <div className="flex flex-wrap gap-10 justify-center pt-10 ">
      <div className="text-white ">
        <h1>our products</h1>
      </div>
      {products?.map((data) => (
        <Product product={data} />
      ))}{" "}
    </div>
  );
}

export default ProductList;
