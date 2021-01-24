import React from "react";
// Styling
import { SearchBarStyled } from "../styles";
// import ProductList from "./ProductList"

const SearchBar = (props) => {
  return (
    <SearchBarStyled
      // onChange={(event) => console.log(event.target.value)}
      onChange={(event) => props.setQuery(event.target.value)}
      placeholder="Search for a cookie name"
    />
  );
};

export default SearchBar;
