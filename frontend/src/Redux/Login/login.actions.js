import axios from "axios"
import {
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT,
}
from "./login.types";

export const signupUser=(creds)=>async(dispatch)=>{
dispatch({type:LOGIN_LOADING});
console.log(creds);

try {
    const res=await axios.post("https://charge-now-back-end.onrender.com/chargebee/user/login",creds);
    const data=await res.data;
    dispatch({type:LOGIN_SUCCESS,payload:data});
} catch (error) {
    dispatch({type:LOGIN_ERROR,payload:error.message});
    }
}
