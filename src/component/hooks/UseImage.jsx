/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from "../image/ImageCard";

function UseImage() {
  const [imageList, setImageList] = useState([]);
  const [error, setError] = useState("")

 



  useEffect(() => {
   
    axios.get("https://api.slingacademy.com/v1/sample-data/photos?limit=20")
    .then((res) =>
    setImageList(res.data.photos)
   )
   .catch((error) => 
   console.log(setError(error.message)))
  }, []);


  return (
    <div>
  
     <div  className=" grid grid-cols-3 gap-4 items-center">
     {imageList.map((img) => {
      const {
        id,url,title
      } = img

      return (
      <div key={id} >
        <img src={url} alt="" />
<p>{title} </p>
     </div>
      )
     })}
    
     </div>

     <div>
      {Error !== "" && <h2>{error}</h2>}
     </div>
    
    </div>
  );
}

export default UseImage;
