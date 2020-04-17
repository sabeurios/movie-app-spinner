import React from "./node_modules/react";
import MovieCard from "./movie-card";

class MoviesContainer extends React.Component {
  render() {
    const { movies,openModal } = this.props;
    return (
    <div className="container">
        <div className="movies-container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
    </div>
    );
  }
}
export default MoviesContainer;
