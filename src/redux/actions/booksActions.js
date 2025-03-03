
// import axios from "axios";

// export const FETCH_BOOKS_REQUEST = "FETCH_BOOKS_REQUEST";
// export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
// export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";

// const FIREBASE_URL = "https://module4evaluation-default-rtdb.firebaseio.com/books.json";

// // Fetch Books from Firebase Realtime Database
// export const fetchBooks = () => async (dispatch) => {
//   dispatch({ type: FETCH_BOOKS_REQUEST });

//   try {
//     const response = await axios.get(FIREBASE_URL);

//     // Firebase Realtime Database returns an object instead of an array, so we need to convert it
//     const booksArray = response.data
//       ? Object.keys(response.data).map((key) => ({ id: key, ...response.data[key] }))
//       : [];

//     dispatch({ type: FETCH_BOOKS_SUCCESS, payload: booksArray });
//   } catch (error) {
//     dispatch({ type: FETCH_BOOKS_FAILURE, payload: error.message });
//   }
// };
import axios from "axios";

export const FETCH_BOOKS_REQUEST ="FETCH_BOOKS_REQUEST";
export const FETCH_BOOKS_SUCCESS ="FETCH_BOOKS_SUCCESS"
export const FETCH_BOOKS_FAILURE ="FETCH_BOOKS_FAILURE";
export const ADD_BOOK_TO_USER_LIST="ADD_BOOK_TO_USER_LIST";

const FIREBASE_URL=`https://module4evaluation-default-rtdb.firebaseio.com/books.json`;

//actions creators for fetching books
export const fetchBooks=()=>async(dispatch)=>{
    dispatch({type:FETCH_BOOKS_REQUEST , loading:true});
    try{
const res=await axios.get(FIREBASE_URL);
//console.log(res.data)
dispatch({type:FETCH_BOOKS_SUCCESS, payload :res.data})
    }catch(error){
        dispatch({type:FETCH_BOOKS_FAILURE, payload :error.message})
    }
}

//action creators for adding book to user list
export const addBooks=(bookId, userId,books)=>async(dispatch)=>{
    try{
const response=await axios.put(`https://module4evaluation-default-rtdb.firebaseio.com/users/${userId}/myBooks/${bookId}.json`, {
    userId,
    ...books
})
console.log(response.data)
dispatch({type:ADD_BOOK_TO_USER_LIST, payload: {bookId,userId,...books}}) 
//dispatch({type:ADD_BOOK_TO_USER_LIST, payload: {bookId, userId}})   
}catch(error){
        console.log(error.message)
    }
}
