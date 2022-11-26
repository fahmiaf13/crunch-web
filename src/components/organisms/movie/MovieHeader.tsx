import { useEffect, useState } from "react";
import { GlobalGet } from "../../../utilities/Fetcher";
import { BASE_URL, IMG_URL } from "../../../constant/BASE_URL";
import { filterLimit } from "../../../utilities/FilterLimit";
import { countAverage } from "../../../utilities/CountAverage";
import { CastCard } from "../../molecules/card";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ReactPlayer from "react-player/youtube";

interface Props {
  id: string | undefined;
}

type Movies = {
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
};

const MovieHeader = (props: Props) => {
  const { id } = props;

  const [movies, setMovies] = useState<any>([]);
  const [casts, setCasts] = useState<any>([]);
  const [videos, setVideos] = useState<any>([]);
  const fetchMovies = async () => {
    try {
      const response = await GlobalGet({ url: `${BASE_URL}/movie/${id}?api_key=${import.meta.env.VITE_MOVIE_KEY}` });
      setMovies(response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCredits = async () => {
    try {
      const response = await GlobalGet({ url: `${BASE_URL}/movie/${id}/credits?api_key=${import.meta.env.VITE_MOVIE_KEY}` });
      setCasts(filterLimit(response?.cast));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVideos = async () => {
    try {
      const response = await GlobalGet({ url: `${BASE_URL}/movie/${id}/videos?api_key=${import.meta.env.VITE_MOVIE_KEY}` });
      setVideos(response?.results[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
    fetchCredits();
    fetchVideos();
  }, []);

  console.log("movie", movies);
  console.log("video", videos);
  console.log("cast", casts);

  const showCard = casts.map((cast: any) => {
    return <CastCard key={cast?.id} cast={cast} />;
  });

  const showGenre = movies?.genres?.map((genre: any) => {
    return (
      <div key={genre.id} className="bg-darker-200 p-2 rounded-lg text-sm">
        {genre.name}
      </div>
    );
  });

  return (
    <div className="h-screen relative w-screen">
      <div className="absolute h-full flex p-8 z-20 w-full">
        <div className="flex flex-col h-full justify-between w-full">
          <div className="flex flex-row justify-between w-full h-full">
            <div className="w-4/12 flex flex-col h-full justify-center">
              <div className="bg-pome w-fit p-2 rounded-md font-extrabold my-3">{movies.release_date}</div>
              <div className="text-5xl font-extrabold">{movies.title}</div>
              <div className="text-md font-light my-3">{movies.overview}</div>
              <div className="flex gap-3">{showGenre}</div>
              <div className="bg-green-700 text-xl">{countAverage(movies?.vote_average)}</div>
            </div>
            <div className="w-1/2 flex flex-col h-full justify-end items-end">
              <div>
                <div className="text-3xl font-extrabold mb-3">Trailer</div>
                <ReactPlayer url={`https://www.youtube.com/watch?v=${videos.key}`} width={400} height={225} />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="text-3xl font-extrabold my-3">Cast</div>
            <div className="w-full flex gap-3 overflow-x-scroll">{showCard}</div>
          </div>
        </div>
      </div>
      <div className="absolute bg-darker-200/60 h-full w-full z-10"></div>
      <LazyLoadImage src={`${IMG_URL}/original` + `${movies?.backdrop_path}`} alt="" className="object-cover w-full h-full" visibleByDefault={true} />
    </div>
  );
};

export default MovieHeader;
