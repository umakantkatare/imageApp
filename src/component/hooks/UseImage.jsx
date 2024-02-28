/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from "../image/ImageCard";


function UseImage() {
  const [imageList, setImageList] = useState([]);
  const [error, setError] = useState("");
  

  const imageData = async () => {
    try {
      const res = await axios.get("https://api.slingacademy.com/v1/sample-data/photos?limit=20");
      setImageList(res.data.photos);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    imageData();
  }, []);

  return (
    <div >
      <div className=" grid grid-cols-1 gap-4 items-center md:grid-cols-4 p-5 m-auto justify-center w-full " >
        {imageList?.map((img) => {
          const { id, url, title } = img;

          return (
           
            <ImageCard key={id} imgUrl={url} title={title} id={id} />
            
           
          );
        })}
      </div>
      <div>{Error !== "" && <h2>{error}</h2>}</div>

     
   
    </div>
  );
}

export default UseImage;
