import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const BookDetailPage = (props) => {
  const { book } = props;
  console.log('bookoo', book['OLID:OL1862811M']);
  return(
  <div>
    <h1>hello</h1>
    <Link to='/'><button>Back to Search</button></Link>
  </div>
  )
}

const mapStateToProps = ({book}) => ({book});

export default connect(mapStateToProps)(BookDetailPage);
