import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context/global'
import { Link } from 'react-router-dom'

const Gallery = () => {
    const {getAnimePictures,pictures} = useGlobalContext()
    const {id} = useParams()

    const [index,setIndex] = useState(0)

    const handleImageClick = (i) => {
      setIndex(i)
    }

    useEffect(()=>{
        getAnimePictures(id)
    },[id])
  return (
    <div className='gallery'>
        <div className='back'>
          <Link to="/">
            <i className='fas fa-arrow-left'></i>
            {" "}Back to home
            </Link>
        </div>
        <div className='big-image'>
          <img src={pictures[index]?.jpg?.image_url} alt="" />
        </div>
        <div className='small-image'>
          {pictures?.map((picture,i)=> {
            return (
              <div className='image-con' onClick={() => {handleImageClick(i)}} key={i}>
                 <img src={picture?.jpg?.image_url} style={{
                   border: i === index ? "3px solid #27ae60" : "3px solid #e5e7eb",
                   filter: i === index ? 'grayscale(0)' : 'grayscale(60%)',
                   transform: i === index ? 'scale(1.1)' : 'scale(1)',
                   transition: 'all .3s ease-in-out'                
                  }} alt="" />
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Gallery