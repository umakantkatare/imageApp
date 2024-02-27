/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UseImage from '../hooks/UseImage'
import SingleImage from '../image/SingleImage'
import ImageCard from '../image/ImageCard'



function CustomRoutes() {
  return (
   <Routes>
    <Route path='/' element={<UseImage/>} />
    <Route path="/:i" element={<SingleImage/>} />
    

   </Routes>
  )
}



export default CustomRoutes