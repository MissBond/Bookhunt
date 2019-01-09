import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const BookDetailPage = (props) => {
  const { book } = props;
  const bookId = Object.keys(props.book)[0];
  const bookInfo = book[bookId];

  return(
  <div>
    {bookInfo &&
     <div>
      <h2>{bookInfo.details.title}</h2>
      <img src={`https://covers.openlibrary.org/b/id/${bookInfo.details.covers[0]}-L.jpg`} alt='Book Cover'/>
      <p>Author: {bookInfo.details.authors[0].name}</p>
      <p>ISBN: {bookInfo.details.isbn_10[0]}</p>
      <p>Publish Date: {bookInfo.details.publish_date}</p>
      <p>Publisher: {bookInfo.details.publishers[0]}</p>
      <p>Number of Pages: {bookInfo.details.number_of_pages}</p>
      <Link to='/'><button>Back to Search</button></Link>
     </div>
    }
  </div>
  )
}

const mapStateToProps = ({book}) => ({book});

export default connect(mapStateToProps)(BookDetailPage);
