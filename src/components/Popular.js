import React from 'react'
import { useGlobalContext } from '../context/global'
import { Link } from 'react-router-dom'

const Popular = () => {

  const {popularAnime,isSearch} = useGlobalContext()
  const conditionalRender = () => {
    if(!isSearch) {
      return popularAnime.map((anime) => {
        return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
          <img src={anime.images.jpg.large_image_url} alt="" />
        </Link>
      })
    }
  }
  return (
<<<<<<< HEAD
    <div className='popular'>
=======
    <div> 
      <h1>hello</h1>
>>>>>>> rei21
      <div className='popular-anime'>
        {conditionalRender()}
      </div>
    </div>
  )
}

export default Popular