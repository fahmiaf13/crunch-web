import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

interface Props {
  children: React.ReactNode;
}

const Template = (props: Props) => {
  const { children } = props;
  return (
    <SideBar>
      <Navbar />
      {children}
    </SideBar>
  );
};

export default Template;
