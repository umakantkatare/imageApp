/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom";

function ImageCard(imageUrl, id) {
    

  return (
    <div>
        <Link to={`/${id}`}>
        <img src={imageUrl}  />
        </Link>
    
    </div>
  )
}

export default ImageCard