/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function SingleImage() {
  const [imgDetail, setImgDetail] = useState([]);

  const { id } = useParams();
  console.log(id);

  const imageDetails = async () => {
    try {
      const res = await axios.get(
        `https://api.slingacademy.com/v1/sample-data/photos/${id}`
      );
      console.log(res.data.photo);
      setImgDetail(res.data.photo);
    } catch (error) {
      setImgDetail(error.message);
    }
  };

  useEffect(() => {
    imageDetails();
  }, []);
  return (
    <>
    
      <div className=" flex bg-[rgb(4,46,94)] flex-row text-[white] w-[800px] justify-self-center shadow-[3px_3px_5px_6px_#ccc] self-center content-center mt-[140px] m-auto p-5 rounded-lg "  >
        <img src={imgDetail?.url} alt="" className=" w-[300px] object-cover shadow-[1.5px_1.5px_3.5px_3px_rgb(66,107,154)] h-[250px] rounded-md" />
        <div className="p-5 w-full">
          <h1 className=" text-3xl p-3 font-semibold "> Title: { imgDetail?.title}</h1>
          <p  className=" m-auto  p-3 text-xl ">Description: {imgDetail?.description}</p>
        </div>
      </div>
    </>
  );
}

export default SingleImage;
