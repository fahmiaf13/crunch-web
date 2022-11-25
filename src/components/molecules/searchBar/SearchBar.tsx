import React from "react";
import { RiSearch2Line } from "react-icons/ri";
const SearchBar = () => {
  return (
    <div className="justify-center items-center flex">
      <div className="group focus-within:border-pome duration-300 relative flex items-center w-full h-12 rounded-xl border-2 border-darker-100 focus-within:shadow-lg bg-transparent overflow-hidden">
        <div className="grid place-items-center h-full w-12 text-gray-300">
          <RiSearch2Line className="text-whiter-100 group-focus-within:text-pome group-focus-within:duration-300 duration-300" />
        </div>
        <input className="peer h-full w-full outline-none bg-transparent text-sm text-slate-500 pr-2 font-light" type="text" id="search" placeholder="Search..." />
      </div>
    </div>
  );
};

export default SearchBar;
