import "./MoviesList.css";
import React, { useState, useEffect } from "react";
import useHttp from "../../hooks/use-http";
import MovieDetail from "../MovieDetail/MovieDetail";

const MoviesList = (props) => {
  const [movies, setMovies] = useState([]);
  const [movieDetailIsShown, setMovieDetailIsShown] = useState(false);
  const [movieDetailId, setMovieDetailId] = useState("");
  //Shown detail của movie
  const showMovieDetailHandler = (e) => {
    setMovieDetailIsShown(true);
    setMovieDetailId(e.target.id);
    console.log(e.target.id);
  };

  //Hide detail của movie
  const hideMovieDetailHandler = () => {
    setMovieDetailIsShown(false);
  };

  //Lấy dữ liệu của movie mở detail
  const movieDeTail = movies.find((movie) => movie.id == movieDetailId);
  // Lấy data Trending
  const { isLoading, error, sendRequest: sendfetch } = useHttp();
  useEffect(() => {
    const receiveData = (data) => {
      const loadedMovie = data.results;
      setMovies(loadedMovie);
    };
    sendfetch({ url: props.url }, receiveData);
  }, [sendfetch]);

  let content = <p>Can't found any movies</p>;
  if (movies) {
    content = (
      <div className="moviesItem">
        {movies.map((movie) => (
          <div>
            <img
              className="movie-img"
              src={`http://image.tmdb.org/t/p/w200/${
                props.type === "original"
                  ? movie.poster_path
                  : movie.backdrop_path
              }`}
              id={movie.id}
              onClick={showMovieDetailHandler}
            />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    content = <p>Something went wrong!</p>;
  }

  if (isLoading) {
    content = <p>Loading tasks...</p>;
  }

  return (
    <section className="moviesList">
      <h3>{props.title}</h3>
      {content}
      {movieDetailIsShown && (
        <MovieDetail
          onClose={hideMovieDetailHandler}
          id={movieDeTail.id}
          title={movieDeTail.name}
          releaseDate={movieDeTail.first_air_date}
          vote={movieDeTail.vote_average}
          overview={movieDeTail.overview}
        />
      )}
    </section>
  );
};

export default MoviesList;
