import "./MovieDetail.css";
import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import useHttp from "../../hooks/use-http";
const MovieDetail = (props) => {
  const { isLoading, error, sendRequest: sendfetch } = useHttp();
  const [movieTrailer, setMovieTrailer] = useState([]);
  console.log(props.id);
  //Lấy data
  useEffect(() => {
    const receiveData = (data) => {
      const loadedTrailer = data.results;
      setMovieTrailer(loadedTrailer);
    };
    sendfetch(
      {
        url: `/movie/${props.id}/videos?api_key=8d889bf8e18531838dd6a6f6a0ba836c&language=en-US`,
      },
      receiveData
    );
  }, [sendfetch, props.id]);
  console.log(movieTrailer);

  // Khi không có dữ liệu video
  let content = <img src={`http://image.tmdb.org/t/p/w200/${props.picture}`} />;

  // Khi có dữ liệu video
  if (movieTrailer.length !== 0) {
    const opts = {
      height: "400",
      width: "100%",
      playerVars: {
        autoplay: 0,
      },
    };

    // lọc trailer từ dữ liệu nhận được có site= Youtube, type= Teaser hoặc Trailer
    const trailerFilter = movieTrailer?.filter(
      (movie) => movie.site === "Youtube" && movie.type === "Trailer"
    );
    console.log(trailerFilter);
    // Nếu có 1 giá trị
    // content = <YouTube videoId={trailerFilter[0].key} opts={opts} />;
    // Nếu có nhiều giá trị, lấy video đầu tiên, ưu tiên trailer
    if (trailerFilter.length > 1) {
      const trailer = trailerFilter.find(
        (movie) => movie.type === "Trailer"
      )[0];
      // content = <YouTube videoId={trailer.key} opts={opts} />;
    }
  }

  if (error) {
    content = <p>Something went wrong!</p>;
  }

  if (isLoading) {
    content = <p>Loading ...</p>;
  }

  return (
    <div onClose={props.onClose} className="container">
      <div className="detail">
        <h1>{props.title}</h1>
        <h3>Release Date: {props.releaseDate}</h3>
        <h3>Vote: {props.vote}/10</h3>
        <p>{props.overview}</p>
      </div>
      <div className="trailer">{content}</div>
    </div>
  );
};
export default MovieDetail;
