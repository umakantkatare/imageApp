/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from "../image/ImageCard";

function UseImage() {
  const [imageList, setImageList] = useState([]);

  async function downloadImage() {
    const response = await axios.get(
      "https://api.slingacademy.com/v1/sample-data/photos?limit=20"
    );
    // const response = await axios.get("https://pokeapi.co/api/v2/pokemon")
    const imageResults = response.data.photos;
    console.log(imageResults)
    setImageList(imageResults)

    
  }
  useEffect(() => {
    downloadImage();
  }, []);


  return (
    <div>
      UseImage hello
      {imageList.map((e,i)=> (
        <ImageCard id={e.id} imageUrl={e.url} key ={i.id} />
      ))}
    
    </div>
  );
}

export default UseImage;
