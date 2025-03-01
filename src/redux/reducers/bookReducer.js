import { FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE } from "../actions/booksActions";

const initialState = {
  books: [],
  loading: false,
  error: null,
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return { ...state, loading: true };

    case FETCH_BOOKS_SUCCESS:
      return { ...state, loading: false, books: action.payload };

    case FETCH_BOOKS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
