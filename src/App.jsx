import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './frontend/pages/Layout'
import Home from './frontend/pages/Home'
import Register from './frontend/pages/Register'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>   
          </Route>
          <Route path="/register" element={<Register />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
