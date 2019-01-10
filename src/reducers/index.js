import { GET_BOOKS, GET_SELECTED_BOOK, FILTER_EBOOKS, FILTER_PRINTBOOKS, SORT_RECENT, SORT_EDITIONS, CLEAR, STATECHANGE, ERROR } from '../actions';

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

