import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const BookList = (props) => {
  const { books } = props;
  return (
    <div id='book-list'>
      {books && books.map((book, i) => (
          <ul key={i}>
            <li id='book-list-items'>
              <Link to={`/book/${book.title}`}><h2 onClick={() => props.getSelectedBook(book.edition_key[0])}>{book.title}</h2></Link>
              <p>{book.author_name && book.author_name[0]}</p>
              <p>First Year Published: {book.first_publish_year}</p>
            </li>
          </ul>
        ))}
    </div>
  )
}

const mapStateToProps = ({books}) => ({books});

export default connect(mapStateToProps)(BookList);
