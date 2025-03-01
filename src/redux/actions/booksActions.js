// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../firebase/firebaseConfig"; // Corrected path

// export const fetchBooks = () => async (dispatch) => {
//   try {
//     const querySnapshot = await getDocs(collection(db, "books"));
//     const books = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     dispatch({ type: "FETCH_BOOKS_SUCCESS", payload: books });
//   } catch (error) {
//     dispatch({ type: "FETCH_BOOKS_ERROR", payload: error.message });
//   }
// };
import axios from "axios";

export const FETCH_BOOKS_REQUEST = "FETCH_BOOKS_REQUEST";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";

const FIREBASE_URL = "https://books-library-management-app-default-rtdb.firebaseio.com/books.json";

// Fetch Books from Firebase Realtime Database
export const fetchBooks = () => async (dispatch) => {
  dispatch({ type: FETCH_BOOKS_REQUEST });

  try {
    const response = await axios.get(FIREBASE_URL);

    // Firebase Realtime Database returns an object instead of an array, so we need to convert it
    const booksArray = response.data
      ? Object.keys(response.data).map((key) => ({ id: key, ...response.data[key] }))
      : [];

    dispatch({ type: FETCH_BOOKS_SUCCESS, payload: booksArray });
  } catch (error) {
    dispatch({ type: FETCH_BOOKS_FAILURE, payload: error.message });
  }
};
