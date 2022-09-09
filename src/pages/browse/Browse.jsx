import React, { useState } from "react";
import "./Browse.css";
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import MoviesList from "../../components/MoviesList/MoviesList";

function Browse() {
  const API_KEY = "8d889bf8e18531838dd6a6f6a0ba836c";
  const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
  };

  // const [isShown, setIsShown] = useState(false);

  // const toggleMovieDetail = (click) => {
  //   setIsShown(!click);
  // };
  return (
    <div className="app">
      <NavBar />
      <Banner url={requests.fetchNetflixOriginals} />
      <MoviesList url={requests.fetchNetflixOriginals} type="original" />
      <MoviesList url={requests.fetchTrending} title="Xu hướng" />
      <MoviesList url={requests.fetchTopRated} title="Xếp hạng cao" />
      <MoviesList url={requests.fetchActionMovies} title="Hành động" />
      <MoviesList url={requests.fetchComedyMovies} title="Hài" />
      <MoviesList url={requests.fetchHorrorMovies} title="Kinh dị" />
      <MoviesList url={requests.fetchRomanceMovies} title="Lãng mạn" />
      <MoviesList url={requests.fetchDocumentaries} title="Tài liệu" />
    </div>
  );
}

export default Browse;
