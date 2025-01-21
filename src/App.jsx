import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './components/Home';

const App = () => {
  return (
    <>
   
    <BrowserRouter>
    <Routes>
      <Route path='/Login' element={<Login/>} />
      <Route path='/SignUp' element={<SignUp/>} />
      <Route path='/' element={<Home/>} />




    
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;