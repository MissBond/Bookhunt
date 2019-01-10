import axios from 'axios';

const GET_BOOKS = 'GET_BOOKS';
const GET_SELECTED_BOOK = 'GET_SELECTED_BOOK';
const FILTER_EBOOKS = 'FILTER_EBOOKS';
const FILTER_PRINTBOOKS = 'FILTER_PRINTBOOKS';
const SORT_RECENT = 'SORT_RECENT';
const SORT_EDITIONS = 'SORT_EDITIONS';
const CLEAR = 'CLEAR';
const STATECHANGE = 'STATECHANGE';
const ERROR = 'ERROR';


export const getBooks = books => ({type: GET_BOOKS, books});
export const getSelectedBook = book => ({type: GET_SELECTED_BOOK, book});
export const filterEBooks = books => ({type: FILTER_EBOOKS, books});
export const filterPrintBooks = books => ({type: FILTER_PRINTBOOKS, books});
export const sortRecent = books => ({type: SORT_RECENT, books});
export const sortEditions = books => ({type: SORT_EDITIONS, books});
export const clear = books => ({type: CLEAR, books});
export const stateChange = () => ({type: STATECHANGE})
export const error = () => ({type: ERROR})


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
  book: {},
  emptyState: false,
  error: ''
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {...state, books: action.books};
    case GET_SELECTED_BOOK:
      return {...state, book: action.book};
    case FILTER_EBOOKS:
     return {...state, books: state.books.filter(book => book.ebook_count_i > 0)};
    case FILTER_PRINTBOOKS:
      return {...state, books: state.books.filter(book => book.ebook_count_i <= 0)};
    case SORT_RECENT:
      return {...state, books: state.books.sort((bookA, bookB) => bookA.first_publish_year < bookB.first_publish_year ? 1 : -1)};
    case SORT_EDITIONS:
      return {...state, books: state.books.sort((bookA, bookB) => bookA.edition_count < bookB.edition_count ? 1 : -1)};
    case CLEAR:
      return {...state, books: []};
    case STATECHANGE:
      return {...state, emptyState: true};
    case ERROR:
      return {...state, error: 'Please enter a term to search :)'};
    default:
      return state;
  }
}

export default rootReducer;
