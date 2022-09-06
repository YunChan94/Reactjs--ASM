import "./Banner.css";
import React, { useState, useEffect } from "react";
import useHttp from "../../hooks/use-http";
const Banner = (props) => {
  const [bannerMovie, setBannerMovie] = useState("");

  // Lấy data Trending
  const { isLoading, error, sendRequest: sendfetch } = useHttp();
  useEffect(() => {
    const receiveData = (data) => {
      const loadedMovie =
        data.results[Math.floor(Math.random() * data.results.length - 1)];
      setBannerMovie(loadedMovie);
    };
    sendfetch({ url: props.url }, receiveData);
  }, [sendfetch, props.url]);
  const backgroundUrl = `http://image.tmdb.org/t/p/w500/${bannerMovie.backdrop_path}`;

  let content = <p>Can't found any movies</p>;
  if (bannerMovie) {
    content = (
      <div
        className="banner"
        style={{
          backgroundImage: `url(${backgroundUrl})`,
        }}
      >
        <div className="banner-title">
          <h1>{bannerMovie.name}</h1>
          <div className="banner-btn">
            <button>Play</button>
            <button>My List</button>
          </div>
          <p>{bannerMovie.overview}</p>
        </div>
      </div>
    );
  }

  if (error) {
    content = <p>Something went wrong!</p>;
  }

  if (isLoading) {
    content = <p>Loading tasks...</p>;
  }

  return <section>{content}</section>;
};
export default Banner;
