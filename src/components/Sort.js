import React from 'react';

const Sort = props => (
  <div>
    <div className='filter-bar'>
      <label id='filter-by-label'>Sort By:</label>
      <select id='custom-select' onChange={props.sort}>
        <option value='relevance'>Relevance</option>
        <option value='recent'>Most Recent</option>
        <option value='editions'>Most Editions</option>
      </select>
    </div>
  </div>
)

export default Sort;
