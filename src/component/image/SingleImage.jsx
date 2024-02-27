/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'

function SingleImage() {
  const[imgDetail,setImgDetail] = useState([])
  const[data,setData]=useState();

  const {id} = useParams()
  console.log(id)

const imageDetails = async() =>{
try {
  const res = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
  console.log(res.data.photos.photo)
} catch (error) {
  setImgDetail(error.message)
}
}
// const getData=async()=>{
//   const resp=await fetch(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
//   const {photo}=await resp.json();
//   console.log(photo)
//   setData(photo)
// }
useEffect(() =>{
  imageDetails()
  // getData()
},[])
  return (
    <div>SingleImage</div>
  )
}

export default SingleImage
