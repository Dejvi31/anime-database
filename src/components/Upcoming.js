import React from 'react'
import { useGlobalContext } from '../context/global'
import { Link } from 'react-router-dom'

const Upcoming = ({rendered}) => {

  const {upcomingAnime,isSearch,searchResults} = useGlobalContext()
  const conditionalRender = () => {
    if(!isSearch && rendered === 'upcoming') {
      return upcomingAnime?.map((anime) => {
        return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
          <img src={anime.images.jpg.large_image_url} alt="" />
        </Link>
      })
    } else {
      return searchResults?.map((anime) => {
        return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
        <img src={anime.images.jpg.large_image_url} alt="" />
      </Link>
      })
    }
  }
  return (
    <div className='popular'>
      <div className='popular-anime'>
        {conditionalRender()}
      </div>
    </div>
  )
}

export default Upcoming