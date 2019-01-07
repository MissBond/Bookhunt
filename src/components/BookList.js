import React from 'react';
import {Link} from 'react-router-dom';

const BookList = (props) => {
  const { books } = props;
  console.log('books', books)

  return (
    <div>
      {books && books.map((book, i) => (
          <div key={i}>
            <Link to={`/book`}>{book.title}</Link>
            <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`} alt='Book Cover Thumbnail'/>
            <p>{book.author_name && book.author_name[0]}</p>
            <p>First Year Published: {book.first_publish_year}</p>
          </div>
        ))}
    </div>
  )
}

export default BookList;
