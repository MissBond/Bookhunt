import axios from 'axios';

export const GET_BOOKS = 'GET_BOOKS';
export const GET_SELECTED_BOOK = 'GET_SELECTED_BOOK';
export const FILTER_EBOOKS = 'FILTER_EBOOKS';
export const FILTER_PRINTBOOKS = 'FILTER_PRINTBOOKS';
export const SORT_RECENT = 'SORT_RECENT';
export const SORT_EDITIONS = 'SORT_EDITIONS';
export const CLEAR = 'CLEAR';
export const STATECHANGE = 'STATECHANGE';
export const ERROR = 'ERROR';


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
    const {data} = await axios.get(`https://openlibrary.org/search.json?q=${searchTerm}`);
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
