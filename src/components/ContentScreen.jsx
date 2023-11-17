import React from "react";
import NavBar from "./NavBar";

const ContentScreen = ({ Component }) => {
  return (
    <div className="h-screen basis-full flex flex-col ">
      <NavBar />
      <div className="bg-[#E5E5E5] p-10 py-2 basis-full overflow-auto">{<Component />}</div>
    </div>
  );
};

export default ContentScreen;
