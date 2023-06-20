import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'


import Error from './pages/Error'
import Header from './units/Header'
import Form from './pages/Form'



export default function App() {
  return (
    <div>
      <Header/>
      <Routes>
      
      <Route path="/" element={<Home/>} />
      
      <Route path="/form" element={<Form/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
    </div>
  )
}
