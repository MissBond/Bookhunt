import axios from 'axios';

const GET_BOOKS = 'GET_BOOKS';
const GET_SELECTED_BOOK = 'GET_SELECTED_BOOK';

const getBooks = books => ({type: GET_BOOKS, books});
const getSelectedBook = book => ({type: GET_SELECTED_BOOK, book});

export const fetchBooks = (searchTerm) => async dispatch => {
  try {
    const {data} = await axios.get(`http://openlibrary.org/search.json?q=${searchTerm}`);
    dispatch(getBooks(data.docs));
  } catch (err) {
    console.log(err);
  }
}

export const fetchSelectedBook = (bookId) => async dispatch => {
  try {
    const {data} = await axios.get(`https://openlibrary.org/api/books?bibkeys=OLID:${bookId}&jscmd=details&format=json`);
    dispatch(getSelectedBook(data));
  } catch (err) {
    console.log(err);
  }
}

const initialState = {
  books: [],
  book: {}
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {...state, books: action.books};
    case GET_SELECTED_BOOK:
      return {...state, book: action.book};
  }
  return state;
}

export default rootReducer;
