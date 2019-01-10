import React from 'react';

const Filter = props => (
  <div>
    <div className='filter-bar'>
      <label id='filter-by-label'>Filter By:</label>
      <select id='custom-select' onChange={props.filter}>
        <option value='all'>All</option>
        <option value='ebooks'>Ebooks</option>
        <option value='print'>Print Books</option>
      </select>
    </div>
  </div>
)

export default Filter;
