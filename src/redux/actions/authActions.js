// redux/actions/authActions.js
import { auth } from "../../firebase/firebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export const login = (email, password) => async (dispatch) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    dispatch({ type: "LOGIN_SUCCESS", payload: userCredential.user });
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", payload: error.message });
  }
};

export const register = (email, password) => async (dispatch) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    dispatch({ type: "REGISTER_SUCCESS", payload: userCredential.user });
  } catch (error) {
    dispatch({ type: "REGISTER_ERROR", payload: error.message });
  }
};
export const logout = () => (dispatch) => {
    localStorage.removeItem("user"); // Clear user from storage (if used)
    dispatch({ type: "LOGOUT" });
  };
  