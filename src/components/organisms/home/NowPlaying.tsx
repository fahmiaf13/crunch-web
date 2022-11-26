import { useState, useEffect } from "react";
import { Carousel } from "../../molecules/carousel";
import { GlobalGet } from "../../../utilities/Fetcher";
import { BASE_URL } from "../../../constant/BASE_URL";

const NowPlaying = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovieData = async () => {
    try {
      let response = await GlobalGet({ url: `${BASE_URL}/movie/now_playing?api_key=${import.meta.env.VITE_MOVIE_KEY}` });
      setMovies(response.results);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      throw new Error("error");
    }
  };
  useEffect(() => {
    fetchMovieData();
  }, []);

  return <Carousel isLoading={isLoading} movies={movies} />;
};
export default NowPlaying;
