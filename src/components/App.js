import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import {fetchBooks} from '../reducers/index';
import BookList from './BookList';
import SearchBar from './SearchBar';

class App extends Component {

  getBooks = e => {
    e.preventDefault();
    let title = e.target.elements.title.value;
    this.props.fetchBooks(title)
    e.target.elements.title.value = '';
    console.log(this.props);
  }

  render () {
    //console.log('props', this.props);
    return (
      <div>
        {/* <Route exact path='/book' component={BookDetailPage} /> */}
        Bookhunt
        <SearchBar getBooks={this.getBooks}/>
        <BookList books={this.props.books}/>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchBooks}, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
