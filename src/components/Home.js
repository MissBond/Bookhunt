import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchBooks, fetchSelectedBook, filterEBooks, filterPrintBooks, getBooks, sortRecent, sortEditions, clear, stateChange, error} from '../actions';
import SearchBar from './SearchBar';
import BookList from './BookList';
import Error from './Error';
import Header from './Header';
import Sort from './Sort';
import Filter from './Filter';

class Home extends Component {

  getBooks = e => {
    e.preventDefault();
    let searchTerm = e.target.elements.title.value;
    if (searchTerm === '') this.props.errorHandle();
    this.props.fetchBooks(searchTerm);
    e.target.elements.title.value = '';
  }

  getSelectedBook = bookId => {
    this.props.getBook(bookId);
  }

  filter = e => {
    const filterTerm = e.target.value;
    const {books} = this.props;

    if (filterTerm === 'ebooks') {
      this.props.filterEBooks(books);
    } else if (filterTerm === 'print') {
      this.props.filterPrintBooks(books);
    } else {
      this.props.getAllBooks(books);
    }
  }

  sort = e => {
    const sortTerm = e.target.value;
    const {books} = this.props;

    if (sortTerm === 'recent') {
      this.props.sortRecent(books);
    } else if (sortTerm === 'editions') {
      this.props.sortEditions(books);
    }
  }

  clearSearch = () => {
    this.props.clear(this.props.books);
  }

  render () {
    return (
        <div>
          {/* Only show home components if book detail page is not visible */}
          {this.props.stateChange ?
            <div>
              <div className='home-container'>
                <Header />
                <SearchBar getBooks={this.getBooks} clearSearch={this.clearSearch} error={this.props.error}/>
              </div>

              {/* If book list is visible, show filters.
              If not and user gives empty search, throw error */}
              {!this.props.books.length ? <Error error={this.props.error}/> : <div className='selections'>
                <Filter filter={this.filter} showComponent={false}/>
                <Sort sort={this.sort}/>
              </div> }

              <BookList books={this.props.books} getSelectedBook={this.getSelectedBook}/>
            </div>
          : null}
       </div>
    )
  }
}

const mapStateToProps = ({books, error}) => ({books, error});

const mapDispatchToProps = dispatch => ({
  fetchBooks: searchTerm => dispatch(fetchBooks(searchTerm)),
  getBook: book => dispatch(fetchSelectedBook(book)),
  filterEBooks: books => dispatch(filterEBooks(books)),
  filterPrintBooks: books => dispatch(filterPrintBooks(books)),
  getAllBooks: books => dispatch(getBooks(books)),
  sortRecent: books => dispatch(sortRecent(books)),
  sortEditions: books => dispatch(sortEditions(books)),
  clear: books => dispatch(clear(books)),
  stateChange: () => dispatch(stateChange()),
  errorHandle: () => dispatch(error())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
