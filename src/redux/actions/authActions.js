// redux/actions/authActions.js
// import { auth } from "../../firebase/firebaseConfig";
// import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// export const login = (email, password) => async (dispatch) => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     dispatch({ type: "LOGIN_SUCCESS", payload: userCredential.user });
//   } catch (error) {
//     dispatch({ type: "LOGIN_ERROR", payload: error.message });
//   }
// };

// export const register = (email, password) => async (dispatch) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     dispatch({ type: "REGISTER_SUCCESS", payload: userCredential.user });
//   } catch (error) {
//     dispatch({ type: "REGISTER_ERROR", payload: error.message });
//   }
// };
// export const logout = () => (dispatch) => {
//     localStorage.removeItem("user"); // Clear user from storage (if used)
//     dispatch({ type: "LOGOUT" });
//   };
import app from "@/firebase/firebaseConfig"
import axios from "axios"
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"

export const REGISTER_USER="REGISTER_USER"
export const LOGIN_USER="LOGIN_USER";
export const LOGOUT_USER="LOGOUT_USER";


//signup functio
const auth=getAuth();
export const register=(email,password)=>async(dispatch)=>{
    try{
const userCredentials= await createUserWithEmailAndPassword(auth,email,password);
const user=userCredentials.user;
console.log(user, "userDeatails")
dispatch({type:REGISTER_USER, payload:user});
    }catch(error){
        console.log(error)
    }

}
//login function
export const login=(email,password)=>async(dispatch)=>{
    try{
        const userCredentials= await signInWithEmailAndPassword(auth,email,password);
        const user=userCredentials.user;
        console.log(userCredentials)
        dispatch({type:LOGIN_USER, payload:user});
            }catch(error){
                console.log(error)
            }
}

//logout 

export const logout=()=>async(dispatch)=>{
    try{
await signOut(auth);
dispatch({type:LOGOUT_USER})
    }catch(error){
        console.log(error);
    }
}
