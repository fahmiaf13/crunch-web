import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineFilterList } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "../molecules/searchBar";
// import { useSelector } from "react-redux";
// import Profile from "../../components/Profile";

const Navbar = () => {
  //   const { data } = useSelector((state) => state.user);
  // const token = data?.idToken;
  const [greet, setGreet] = useState("");

  const token = true;
  const navigate = useNavigate();
  //   const dispatch = useDispatch();
  const myDate = new Date();
  const hours = myDate.getHours();

  useEffect(() => {
    if (hours < 12) {
      setGreet("Good Morning");
    } else if (hours >= 12 && hours <= 17) {
      setGreet("Good Afternoon");
    } else if (hours >= 17 && hours <= 24) {
      setGreet("Good Evening");
    }
  }, [hours]);

  const logOutHandler = () => {
    // dispatch(logout());
    navigate("/", { replace: true });
  };

  return (
    <>
      <div className="pb-5 flex justify-between w-full">
        <div className="flex-col w-full">
          <div className="text-3xl font-extrabold text-pome">{greet}!</div>
          <div className="font-light text-lg">User 123</div>
        </div>
        <div className="flex h-full items-center w-full justify-end gap-3">
          <SearchBar />
          <button className="btn bg-pome border-none hover:bg-darker-100">
            <MdOutlineFilterList size={24} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
