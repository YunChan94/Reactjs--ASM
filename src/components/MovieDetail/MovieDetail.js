import "./MovieDetail.css";
import React, { useState, useEffect } from "react";
import Modal from "../UI/Modal";
import useHttp from "../../hooks/use-http";
const MovieDetail = (props) => {
  const { isLoading, error, sendRequest: sendfetch } = useHttp();
  const [movieTrailer, setMovieTrailer] = useState(null);

  //Lấy data
  useEffect(() => {
    const receiveData = (data) => {
      const loadedTrailer = data.results;
      setMovieTrailer(loadedTrailer);
    };
    sendfetch(
      {
        url: `https://api.themoviedb.org/3//movie/${props.id}/videos?api_key=8d889bf8e18531838dd6a6f6a0ba836c`,
      },
      receiveData
    );
  }, [sendfetch]);
  let content = <p>Can't found information of the movie!</p>;

  if (error) {
    content = <p>Something went wrong!</p>;
  }

  if (isLoading) {
    content = <p>Loading tasks...</p>;
  }
  return (
    <Modal onClose={props.onClose}>
      <div className="container">
        <h1>{props.title}</h1>
        <h3>Release Date: {props.releaseDate}</h3>
        <h3>Vote: {props.vote}/10</h3>
        <p>{props.overview}</p>
      </div>
      <div>{content}</div>
    </Modal>
  );
};
export default MovieDetail;
