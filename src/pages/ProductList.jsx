import React from "react";
import useAxios from "../components/hooks/useAxios";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

function ProductList() {
  const { data, isLoading, error } = useAxios(
    "https://api.escuelajs.co/api/v1/products"
  );

  // useEffect(() =>
  // {
  //     const getProducts = async () =>
  //     {
  //         const results = await axios.get( "https://api.escuelajs.co/api/v1/products");
  //         setProducts(results.data)

  //     };

  //     getProducts()
  // },[])

  if (isLoading) return <Spinner />;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-wrap gap-10 justify-center pt-10">
      <div className="text-white">
        <h1>our products</h1>
      </div>
      {data?.map((data) => (
        <Product product={data} />
      ))}{" "}
    </div>
  );
}

export default ProductList;
