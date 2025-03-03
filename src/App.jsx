// // App.js
import { Route, Routes } from 'react-router-dom'
 import React from 'react'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyBooksPage from "./pages/MyBooksPage";

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/mybooks' element={<MyBooksPage />}/>
    </Routes>
    </>
  )
}

export default App