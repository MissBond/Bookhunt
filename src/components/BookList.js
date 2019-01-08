import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const BookList = (props) => {
  const { books } = props;
  console.log('books', books)

  return (
    <div>
      {books && books.map((book, i) => (
          <div key={i}>
            {/* <Link>{book.title}</Link> */}
            <a onClick={props.showDetails}>{book.title}</a>
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
