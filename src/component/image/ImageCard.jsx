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
    <div>
      <img src={imgUrl} alt="" onClick={redirectToPage} />
      <p> {title}</p>
    </div>
  )
}

export default ImageCard
