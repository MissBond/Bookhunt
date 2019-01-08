import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchBooks, fetchSelectedBook} from '../reducers/index';
import SearchBar from './SearchBar';
import BookList from './BookList';

class Home extends Component {
  state = {
   emptyState: false
  }

  getBooks = e => {
    e.preventDefault();
    let title = e.target.elements.title.value;
    this.props.getBooks(title)
    e.target.elements.title.value = '';
  }

  getSelectedBook = bookId => {
    this.props.getBook(bookId);
    this.setState({
      emptyState: true
    })
  }

  render () {
    return (
        <div>
          {!this.state.emptyState ?
          <div>
            <h1>Bookhunt</h1>
            <SearchBar getBooks={this.getBooks}/>
            <BookList books={this.props.books} getSelectedBook={this.getSelectedBook}/>
          </div>
          : null}
        </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getBooks: books => dispatch(fetchBooks(books)),
  getBook: book => dispatch(fetchSelectedBook(book))
})

export default connect(null, mapDispatchToProps)(Home);
