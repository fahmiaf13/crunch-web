import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

interface Props {
  movie: movies;
}

type movies = {
  poster_path: string;
  title: string;
  id: number;
};

const MovieCard = (props: Props) => {
  const { movie } = props;

  return (
    <Link to={`/movie/${movie.id}`} className="group">
      <div key={movie.id} className="w-44 rounded-xl relative">
        <div className="absolute bg-darker-100/70 h-full w-full rounded-xl p-3 group-hover:bg-transparent group-hover:duration-300 duration-300">
          <div className="font-bold justify-center flex text-xl text-center group-hover:hidden group-hover:duration-300 duration-300">{movie.title}</div>
        </div>
        <LazyLoadImage src={`https://image.tmdb.org/t/p/w300` + `${movie.poster_path}`} alt={movie.title} effect="blur" visibleByDefault={true} className="rounded-xl" />
      </div>
    </Link>
  );
};

export default MovieCard;
