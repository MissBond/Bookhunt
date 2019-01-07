import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import BookList from './components/BookList';
import SearchBar from './components/SearchBar';
import BookDetailPage from './components/BookDetailPage';

class App extends React.Component {
  state = {
    books: [],
    error: ''
  }

  //http://openlibrary.org/api/books?bibkeys=OLID:OL9701406M&jscmd=data&format=json

  getBooks = async (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const api_call = await fetch(`http://openlibrary.org/search.json?q=${title}`)
    const data = await api_call.json();

    if (title) {
      this.setState({
        books: data.docs,
        error: ''
      })
    } else {
      this.setState({
        books: [],
        error: 'Please enter a book title to search for.'
      })
    }
  }

  render () {
    //console.log('state', this.state)
    return (
      <Router>
      <div>
        {/* <Route exact path='/book' component={BookDetailPage} /> */}
        Bookhunt
        <SearchBar getBooks={this.getBooks}/>
        <BookList books={this.state.books}/>
      </div>
      </Router>
    )
  }
}

export default App;
