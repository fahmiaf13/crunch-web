import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import Loading from "../../templates/Loading";

const settings: any = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  lazyLoad: true,
  dots: false,
};

interface Props {
  isLoading: boolean;
  movies: any;
}

type movieData = {
  id: number;
  title: string;
  release_date: number;
  backdrop_path: string;
};

const Carousel = (props: Props) => {
  const { isLoading, movies } = props;
  const showData = movies.map((movie: movieData) => {
    return (
      <div className="w-full h-[450px] mx-auto relative rounded-[30px] z-[1]" key={movie.id}>
        <div className="absolute top-0 left-0 z-[99] w-full h-full rounded-[30px] bg-slate-800/50">
          <div className="flex flex-col p-5 h-full justify-between">
            <div className="badge badge-lg bg-slate-800 text-white border-slate-800 font-bold">NOW PLAYING</div>
            <div className="flex justify-between">
              <div className="basis-6/12">
                <p className="font-bold text-white text-3xl">{movie.title}</p>
                <p className="font-light text-white text-sm">{movie.release_date}</p>
                <button className="hover:bg-transparent hover:border-pome hover:border-2 mt-3 btn w-1/2 bg-pome border-pome hover:text-pome hover:bg-darker-100 font-bold text-white tracking-wider capitalize">Watch</button>
              </div>
              <div className="basis-6/12 font-bold text-3xl"></div>
            </div>
          </div>
        </div>
        <img src={`https://image.tmdb.org/t/p/original` + `${movie.backdrop_path}`} alt="backdropimg" className=" h-full w-full rounded-[30px] object-cover" />
      </div>
    );
  });

  return <Slider {...settings}>{isLoading ? <Loading height={450} /> : showData}</Slider>;
};

export default Carousel;
