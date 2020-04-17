import React from './node_modules/react'
import Rating from './star-rating'
import StarRating from './star-rating'

const MovieCard = (props) => {

    const {movie} = props


    return( 
        <div className="card">
          <StarRating  rate={movie.rate} />
          <img src={movie.imageUrl} className="card-img-top" alt={movie.title} />
          <div className="card-body">
            <h5 className="card-title">{movie.title}-{ movie.year}</h5>
            <p className="card-text">{ movie.description }</p>
          </div>
        </div>)
}
export default MovieCard