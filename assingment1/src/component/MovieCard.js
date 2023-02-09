import React from 'react'
import './MovieCard.css' 

const MovieCard = (props) => {
    const API_IMG = "https://image.tmdb.org/t/p/w500/" 
  return (
    <div className='card'>
        <div className='poster'>
            <img src = { 'https://images.unsplash.com/photo-1608170825938-a8ea0305d46c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60'}  />
        </div>

        <div className='info'>
            <p className='title'>{props.title}</p>
            <p className='vote'>{props.vote_average}</p>
        </div>

        <div className='overview'>
            <h2 className='title_overview'>Overview</h2>
            <h3 className='overview_info'>{props.overview}</h3>
        </div>
    </div>


  )
}

export default MovieCard