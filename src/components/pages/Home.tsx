import React, { useEffect } from "react";
import { NowPlaying, Popular, TopRated } from "../organisms/home";
import Template from "../templates/Template";
import { useSelector, useDispatch } from "react-redux";
import { fetchPopularMovie } from "../../store/actions/fetchMovieAction";

const Home = () => {
  const { data } = useSelector((state: any) => state.movie);
  console.log(data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularMovie());
  }, []);

  return (
    <Template>
      <NowPlaying />
      <div className="my-5"></div>
      <Popular />
      <div className="my-5"></div>
      <TopRated />
    </Template>
  );
};

export default Home;
