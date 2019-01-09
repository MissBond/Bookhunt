import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const BookList = (props) => {
  const { books } = props;
  return (
    <div>
      {books && books.map((book, i) => (
          <div key={i}>
            <Link to={`/book/${book.title}`}><p onClick={() => props.getSelectedBook(book.cover_edition_key)}>{book.title}</p></Link>
            <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`} alt='Book Cover Thumbnail'/>
            <p>{book.author_name && book.author_name[0]}</p>
            <p>First Year Published: {book.first_publish_year}</p>
          </div>
        ))}
    </div>
  )
}

const mapStateToProps = ({books}) => ({books});

export default connect(mapStateToProps)(BookList);
