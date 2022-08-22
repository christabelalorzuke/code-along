import React from "react";
import useAxios from "./hook.js/useAxios";
import Product from "./Product";
import Spinner from "./Spinner";

function ProductList() {
  // const [products , setProducts ]= useState([])
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
      <Spinner />
      {data.map((data) => (
        <Product product={data} />
      ))}{" "}
    </div>
  );
}

export default ProductList;
