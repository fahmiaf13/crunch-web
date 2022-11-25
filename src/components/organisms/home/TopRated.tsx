import React, { useEffect, useState } from "react";
import { GlobalGet } from "../../../utilities/Fetcher";
import { BASE_URL } from "../../../constant/BASE_URL";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Card } from "../../molecules/card";

interface movieData {
  id: number;
  poster_path: string;
  title: string;
}

const TopRated = () => {
  const [movies, setMovies] = useState([]);
  const fetchMovieData = async () => {
    try {
      let response = await GlobalGet({ url: `${BASE_URL}/movie/top_rated?api_key=${import.meta.env.VITE_MOVIE_KEY}` });
      setMovies(response.results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchMovieData();
  }, []);
  const showData = movies.map((movie: movieData) => {
    return <Card movie={movie} key={movie.id} />;
  });
  return (
    <div className="bg-darker-100 p-7 rounded-xl h-full">
      <div className="font-extrabold text-3xl text-whiter-100 mb-5">Top Rated Movie</div>
      <div className="flex flex-wrap gap-4 h-full">{showData}</div>
    </div>
  );
};

export default TopRated;
