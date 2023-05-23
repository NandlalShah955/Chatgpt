import axios from "axios"
import {
    SIGNUP_LOADING,
SIGNUP_SUCCESS,
SIGNUP_ERROR,
}
from "./signup.types"

export const signupUser=(creds)=>async(dispatch)=>{
dispatch({type:SIGNUP_LOADING});
console.log(creds);

try {
    const res=await axios.post("http://localhost:8080/user/signup",creds);
    const data=await res.data;
    dispatch({type:SIGNUP_SUCCESS,payload:data});
} catch (error) {
    dispatch({type:SIGNUP_ERROR,payload:error.message});
    }
}
