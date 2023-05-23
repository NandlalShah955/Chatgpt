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

try {
    const res=await axios.post("https://charge-now-back-end.onrender.com/chargebee/user/login",creds);
    const data=await res.data;
   if(!data.error){
    localStorage.setItem('token',data.token);
    return dispatch({
        type:LOGIN_SUCCESS,
        payload:data.user,
    })
   }else{
    return dispatch({
        type:LOGIN_ERROR,
        payload:error.message,
    })
   }
} catch (error) {
    dispatch({type:LOGIN_ERROR,payload:error.message});
    }
}

export const logoutUser=()=>{
    localStorage.removeItem("token");
    return{
        type:LOGOUT
    }
}