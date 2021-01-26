// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data
import products from "../products";
// State
import {useState} from "react";

const ProductList = () => {
  const [query, setQuery] = useState("");

  const filteredList = products.filter((product) => product.name.includes(query))
  console.log(filteredList);

  const productList = filteredList.map((product) => (
    <ProductItem product={product} key={product.id} />
  ))
  // const productList = products.map((product) => (
  //   <ProductItem product={product} key={product.id} />
  // ));

  

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productList}</ListWrapper>
    </>
  );
};

export default ProductList;
