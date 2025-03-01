// // redux/reducers/authReducer.js
// const initialState = { user: null, error: null };

// export const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "LOGIN_SUCCESS":
//     case "REGISTER_SUCCESS":
//       return { ...state, user: action.payload, error: null };
//     case "LOGIN_ERROR":
//     case "REGISTER_ERROR":
//       return { ...state, user: null, error: action.payload };
//     default:
//       return state;
//   }
// };
const initialState = { user: null, error: null };

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
    case "REGISTER_SUCCESS":
      return { ...state, user: action.payload, error: null };
    case "LOGIN_ERROR":
    case "REGISTER_ERROR":
      return { ...state, user: null, error: action.payload };
    case "LOGOUT": // ✅ Added logout case
      return { ...state, user: null };
    default:
      return state;
  }
};
