import { useEffect, useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalGet } from "../../utilities/Fetcher";
import { BASE_URL } from "../../constant/BASE_URL";
import { MovieContent, MovieHeader } from "../organisms/movie";
import Template from "../templates/Template";
const Movie = () => {
  const { id } = useParams();

  return (
    <Template>
      <MovieHeader id={id} />
    </Template>
  );
};

export default Movie;
