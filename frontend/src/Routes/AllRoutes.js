import React from 'react'
import {Route,Routes} from "react-router-dom"
import Chatgpt from "../Pages/Chatgpt";
import Login from "../Pages/Login";
import Payment from "../Pages/Payment";
import Signup from "../Pages/Signup";
import NotFound from '../Pages/NotFound';

function AllRoutes() {
  return (
    <Routes>
<Route path='/chatgpt' element={<Chatgpt/>}/>
<Route path='/' element={<Login/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/payment' element={<Payment/>}/>
<Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default AllRoutes