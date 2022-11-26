import { useEffect, useState } from "react";
import { GlobalGet } from "../../../utilities/Fetcher";
import { BASE_URL } from "../../../constant/BASE_URL";
import "react-lazy-load-image-component/src/effects/blur.css";
import { MovieCard } from "../../molecules/card";

interface movieData {
  id: number;
  poster_path: string;
  title: string;
}

const Popular = () => {
  const [moviesData, setMoviesData] = useState([]);
  const fetchMovieData = async () => {
    try {
      let response = await GlobalGet({ url: `${BASE_URL}/movie/popular?api_key=${import.meta.env.VITE_MOVIE_KEY}` });
      console.log(response.results);
      setMoviesData(response.results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchMovieData();
  }, []);
  const showData = moviesData.map((movie: movieData) => {
    return <MovieCard key={movie.id} movie={movie} />;
  });
  return (
    <div className=" p-7 rounded-xl h-full">
      <div className="font-extrabold text-3xl text-whiter-100 mb-5">Popular Movie</div>
      <div className="flex flex-wrap gap-4 h-full">{showData}</div>
    </div>
  );
};

export default Popular;
