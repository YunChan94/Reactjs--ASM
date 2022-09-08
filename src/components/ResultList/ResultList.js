import "./ResultList.css";
import React, { useState, useEffect } from "react";
import useHttp from "../../hooks/use-http";
const ResultList = (props) => {
  const [movies, setMovies] = useState([]);
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

  let content = "";
  if (props.query !== "") {
    if (movies) {
      content = (
        <div className="searchItem">
          {movies.map((movie) => (
            <div>
              <img
                className="search-img"
                src={`http://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                id={movie.id}
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
      {content}
    </section>
  );
};
export default ResultList;
