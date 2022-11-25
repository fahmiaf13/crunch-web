import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const SideBar = (props: Props) => {
  const { children } = props;
  const menus = [
    { name: "Dashboard", link: "/dashboard", icon: MdOutlineDashboard },
    { name: "User", link: "/users", icon: AiOutlineUser },
    { name: "Messages", link: "/", icon: FiMessageSquare },
    { name: "Analytics", link: "/", icon: TbReportAnalytics, margin: true },
    { name: "File Manager", link: "/", icon: FiFolder },
    { name: "Cart", link: "/", icon: FiShoppingCart },
    { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    { name: "Setting", link: "/", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);
  return (
    <>
      <aside className="flex w-full gap-6">
        <div className={`bg-darker-100 h-screen rounded-r-2xl ${open ? "w-full md:w-72" : "w-16"} duration-500  text-whiter-100 px-4 fixed z-[999] border-r-[2px] border-darker-100`}>
          <div className="py-3 flex w-full justify-between items-center relative h-[50px]">
            <Link to="/" className={`${!open && "hidden"} text-slate-800 font-bold text-3xl duration-500`}>
              CRUNCH
            </Link>
            <HiMenuAlt3 size={26} className={`cursor-pointer duration-500 ${!open && "absolute right-0"}`} onClick={() => setOpen(!open)} />
          </div>
          <div className="mt-4 flex flex-col gap-4 relative text-black">
            {menus?.map((menu, i) => (
              <Link to={`${menu.link}`} key={i} className={` ${menu?.margin && "mt-5"} group flex text-whiter-100 items-center text-sm gap-3.5 font-medium p-2 duration-300 hover:border-red hover:bg-pome hover:rounded-md`}>
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2 style={{ transitionDelay: `${i + 3}00ms` }} className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-whiter font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit group-hover:z-[9999]`}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </aside>
      <div className={`my-5 ${!open ? `ml-[5rem]` : `ml-[19rem]`} duration-500 mr-5 relative z-[1]`}>{children}</div>
    </>
  );
};

export default SideBar;
