/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";

function SingleImage() {
    const [api, setApi] = useState()
    const [apiError, setApiError] = useState("")
    const {id} = useParams()

    const singleImageData = async () => {
        try {
            const res = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
            setApi(res.data.photos)
        } catch (error) {
            setApiError(error.message)
        }
    }
    useEffect(() => {
        singleImageData()
    },[])

  return (
    <div>
        hello
        {/* <div>
            {api.map((details) =>{
                const {
                    url,
               title,
               description,
               id

                } = details
                return(
                    <div key={id}>
                    <img src={url} alt="" />
                    <div>
                        <h1>{title}</h1>
                        <p>
                                {description}
                        </p>
                    </div>
                    </div>
                )
            }) }
        </div> */}
         <img src={api?.url} alt="" />
                <div>
                    <h1>{api?.title}</h1>
                    <p>
                            {api?.description}
                    </p>
                </div>

<div>
      {Error !== "" && <h2>{apiError}</h2>}
     </div>
    </div>
  )
}

export default SingleImage