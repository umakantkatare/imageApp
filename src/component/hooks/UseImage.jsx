/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from "../image/ImageCard";

function UseImage() {
  const [imageList, setImageList] = useState([]);
  const [error, setError] = useState("");
  const [imageUrl, setImageUrl] = useState(
    "https://api.slingacademy.com/v1/sample-data/photos?limit=20"
  );
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");

  const imageData = async () => {
    try {
      const res = await axios.get(imageUrl);
      setImageList(res.data.photos);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    imageData();
  }, [imageUrl]);

  return (
    <div>
      <div className=" grid grid-cols-3 gap-4 items-center ">
        {imageList?.map((img) => {
          const { id, url, title } = img;

          return (
           
            <ImageCard key={id} imgUrl={url} title={title} id={id} />
            
           
          );
        })}
      </div>

      {/* {imageList?.map((e, i) => {
        return <ImageCard id={e.id} imgUrl={e.url} key={i} />;
      })} */}

      <div>{Error !== "" && <h2>{error}</h2>}</div>

      <div className="flex items-center justify-center ">
        <button className=" text-center bg-slate-500 m-2 p-1 px-2 rounded-sm">
          Prev
        </button>
        <button className=" text-center bg-slate-500 m-2 p-1 px-2 rounded-sm">
          Next
        </button>
      </div>
    </div>
  );
}

export default UseImage;
