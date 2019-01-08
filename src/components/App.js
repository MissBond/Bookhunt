import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchBooks} from '../reducers/index';
import SearchBar from './SearchBar';
import BookList from './BookList';
import BookDetailPage from './BookDetailPage';


class App extends Component {
  state = {
   emptyState: true
  }

  getBooks = e => {
    e.preventDefault();
    let title = e.target.elements.title.value;
    this.props.fetchBooks(title)
    e.target.elements.title.value = '';
    console.log(this.props);
  }

  showDetails = () => {
    this.setState({
      ...this.state,
      emptyState: false,
      addNewState: true
    })
  }

  render () {
    return (

        <div>
          <h1>Bookhunt</h1>
          <SearchBar getBooks={this.getBooks}/>
          {this.state.emptyState && <BookList books={this.props.books} showDetails={this.showDetails}/>}
          {this.state.addNewState && <BookDetailPage />}
        </div>

    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchBooks}, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
