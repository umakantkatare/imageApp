/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {useNavigate} from "react-router-dom"


function ImageCard({imgUrl, title, id}) {
  const navigate=useNavigate()
    
  const redirectToPage = () => {
      navigate(`/${id}`)
  }
  return (
    <div className=' rounded-lg cursor-pointer h-full w-full object-cover text-center  '>
      <img src={imgUrl} onClick={redirectToPage} className='rounded-lg' />
      <p onClick={redirectToPage}> {title}</p>
    </div>
  )
}

export default ImageCard
