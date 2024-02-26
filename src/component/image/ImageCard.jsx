/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from "react-router-dom";

function ImageCard(imageUrl, id) {
    const navigate = useNavigate()

    const imageDetails = () =>{
      navigate(`/${id}`)
    }

  return (
    <div>
      hello
       
        <img src={imageUrl} onClick={imageDetails} />
       
    
    </div>
  )
}

export default ImageCard