import React from "react";
import { FormLogin } from "../molecules/form";
import { Link } from "react-router-dom";
import LoginImg from "../../assets/img/login-img.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Login = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-1/2 bg-red h-screen flex justify-center items-center relative">
        <div className="text-light-100 text-6xl font-extrabold z-20 h-full w-full bg-darker-100/60">
          <Link to="/" className="h-full flex items-center justify-center">
            CRUNCH
          </Link>
        </div>
        <div className="h-full w-full absolute z-10">
          <LazyLoadImage effect="blur" visibleByDefault={true} src={LoginImg} alt="" className="object-cover w-full h-full" />
        </div>
      </div>
      <div className="w-1/2 flex flex-col h-screen items-center justify-center">
        <FormLogin />
      </div>
    </div>
  );
};

export default Login;
