import axios from 'axios';

const GET_BOOKS = 'GET_BOOKS';

const getBooks = books => ({type: GET_BOOKS, books});

export const fetchBooks = (searchTerm) => async dispatch => {
  try {
    const {data} = await axios.get(`http://openlibrary.org/search.json?q=${searchTerm}`);
    dispatch(getBooks(data.docs));
  } catch (err) {
    console.log(err);
  }
}

const rootReducer = (state = [], action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {...state, books: action.books};
  }
  return state;
}

export default rootReducer;
