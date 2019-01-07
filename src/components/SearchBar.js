import React from "react";

const SearchBar = props => (
  <form onSubmit={props.getBooks}>
    <input type="text" name="title" placeholder="Start your book search..."/>
    <button>Find Books</button>
  </form>
)

export default SearchBar;
