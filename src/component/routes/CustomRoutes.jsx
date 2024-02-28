/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UseImage from '../hooks/UseImage'
import SingleImage from '../image/SingleImage'




function CustomRoutes() {
  return (
   <Routes>
    <Route path='/' element={<UseImage/>} />
    <Route path="/:id" element={<SingleImage/>} />
    

   </Routes>
  )
}



export default CustomRoutes