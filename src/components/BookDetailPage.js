import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from './Header';

const BookDetailPage = (props) => {
  const { book } = props;
  const bookId = Object.keys(props.book)[0];
  const bookInfo = book[bookId];

  return(
  <div>
    {bookInfo &&
     <div id='book-details'>
      <Header />
      <h2 className='book-detail-title'>{bookInfo.details.title}</h2>

      {/* Set default value for keys that do not exsist  */}
      {bookInfo.details.covers ? <img className='book-detail-img' src={`https://covers.openlibrary.org/b/id/${bookInfo.details.covers[0]}-L.jpg`} alt='Book Cover'/> : <img className='book-detail-img' src='http://blogs.ucl.ac.uk/library-archae/files/2013/03/bookworm.jpg' alt='Book Cover'/>}
      <p><b>Author:</b> {bookInfo.details.authors ? bookInfo.details.authors[0].name : 'Not mentioned.'}</p>
      <p><b>ISBN:</b> {bookInfo.details.isbn_10 ? bookInfo.details.isbn_10[0] : 'Not mentioned.'}</p>
      <p><b>Publish Date:</b> {bookInfo.details.publish_date}</p>
      <p><b>Publisher:</b> {bookInfo.details.publishers ? bookInfo.details.publishers[0] : 'Not mentioned.'}</p>
      <p><b>Number of Pages:</b> {bookInfo.details.number_of_pages && bookInfo.details.number_of_pages}</p>
      <div id='back' className='buttons'>
        <Link to='/'><button>Back to Search</button></Link>
      </div>
     </div>
    }
  </div>
  )
}

const mapStateToProps = ({book}) => ({book});
export default connect(mapStateToProps)(BookDetailPage);
