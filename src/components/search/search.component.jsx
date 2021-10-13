import React from "react";

const Search = (props) => {
  return (
    <input
      type="search"
      placeholder="search by name"
      onChange={props.searchInputChangeHandler}
    />
  );
};

export default Search;
