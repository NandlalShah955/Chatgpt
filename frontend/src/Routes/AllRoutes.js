import React from 'react'
import {Route,Routes} from "react-router-dom"
import Chatgpt from "../Pages/Chatgpt";
import Login from "../Pages/Login";
import Payment from "../Pages/Payment";
import Signup from "../Pages/Signup";

function AllRoutes() {
  return (
    <Routes>
<Route path='/chatgpt' element={<Chatgpt/>}/>
<Route path='/' element={<Login/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/payment' element={<Payment/>}/>
    </Routes>
  )
}

export default AllRoutes