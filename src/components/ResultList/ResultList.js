import "./ResultList.css";
import React, { useState, useEffect } from "react";
import useHttp from "../../hooks/use-http";
import MovieDetail from "../MovieDetail/MovieDetail";
const ResultList = (props) => {
  const [movies, setMovies] = useState([]);
  const [movieDetailIsShown, setMovieDetailIsShown] = useState(false);
  const [movieDetailId, setMovieDetailId] = useState(null);

  //Shown detail của movie
  const showMovieDetailHandler = (e) => {
    setMovieDetailIsShown(true);
    if (Number(e.target.id) === movieDetailId) {
      setMovieDetailIsShown(!movieDetailIsShown);
    }
    setMovieDetailId(Number(e.target.id));
  };

  //Hide detail của movie
  const hideMovieDetailHandler = () => {
    setMovieDetailIsShown(false);
  };

  //Lấy dữ liệu của movie mở detail
  const movieDeTail = movies.find((movie) => movie.id === movieDetailId);

  // Lấy data Trending
  const { isLoading, error, sendRequest: sendfetch } = useHttp();
  useEffect(() => {
    const receiveData = (data) => {
      const loadedMovie = data.results;
      setMovies(loadedMovie);
    };
    sendfetch(
      {
        url: `/search/movie?api_key=8d889bf8e18531838dd6a6f6a0ba836c&language=en-US&query=${props.query}&page=1`,
      },
      receiveData
    );
  }, [sendfetch, props.query]);

  // Khi chưa nhập search key
  let content = <p>Let's search!</p>;

  // Khi nhập search key
  if (props.query !== "") {
    // Khi tìm có kết quả
    if (movies) {
      content = (
        <div className="searchItem">
          {movies.map((movie) => (
            <div>
              <img
                className="search-img"
                src={`http://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                id={movie.id}
                onClick={showMovieDetailHandler}
                alt=""
              />
            </div>
          ))}
        </div>
      );
    } else {
      content = <p>Can't found any movies</p>;
    }

    //   Khi xảy ra lỗi
    if (error) {
      content = <p>Something went wrong!</p>;
    }

    if (isLoading) {
      content = <p>Loading ...</p>;
    }
  }

  return (
    <section className="search-result">
      <h3>Search Result</h3>
      {movieDetailIsShown && (
        <MovieDetail
          onClose={hideMovieDetailHandler}
          id={movieDeTail.id}
          title={movieDeTail.name ? movieDeTail.name : movieDeTail.title}
          releaseDate={movieDeTail.first_air_date}
          vote={movieDeTail.vote_average}
          overview={movieDeTail.overview}
          picture={movieDeTail.backdrop_path}
        />
      )}
      {content}
    </section>
  );
};
export default ResultList;
