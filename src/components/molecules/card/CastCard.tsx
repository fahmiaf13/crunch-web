import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import UserPlaceholder from "../../../assets/user-placeholder.png";

interface Props {
  cast: Cast;
}

type Cast = {
  id: number;
  name: string;
  profile_path: string;
  character: string;
};

const CastCard = (props: Props) => {
  const { cast } = props;

  return (
    <Link to={`/`} className="group">
      <div className="w-32 rounded-xl relative">
        <div className="absolute bg-darker-200/70 flex flex-col justify-between h-full w-full rounded-xl p-3 group-hover:bg-transparent group-hover:duration-300 duration-300">
          <div className="font-bold justify-center flex text-sm text-center group-hover:hidden group-hover:duration-300 duration-300">{cast.character}</div>
          <div className="font-light justify-center flex text-sm text-center group-hover:hidden group-hover:duration-300 duration-300">{cast.name}</div>
        </div>
        <img src={cast.profile_path ? `https://image.tmdb.org/t/p/w300` + `${cast.profile_path}` : UserPlaceholder} alt={cast.name} className="rounded-xl" />
      </div>
    </Link>
  );
};

export default CastCard;
