import React from 'react';

const SearchBar = props => (
  <div className='form'>
    <form onSubmit={props.getBooks}>
      <label htmlFor='form-search'></label>
      <input type='text' id='form-search' name='title' placeholder='Start your book search...'/>
      <div className='buttons'>
        <button>Find Books</button>
        <button onClick={props.clearSearch}>Clear Search</button>
      </div>
    </form>
  </div>
)

export default SearchBar;
