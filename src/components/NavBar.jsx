import { Avatar } from "@nextui-org/react";
import React, { useEffect } from "react";
import { FaCrown, FaBell } from "react-icons/fa";
import { BsGiftFill, BsFillCaretDownFill, BsTranslate } from "react-icons/bs";

const NavBar = () => {


  return (
    <>
      <div className=" text-right items-center  flex justify-end space-x-5  w-full bg-white p-4 px-10 shadow-md">
        <div className="text-right">Free trial ends in 2 days</div>
        <div className="p-3 buy flex space-x-2 items-center bg-[#7089891a] rounded-md">
          <FaCrown color="#FF8C00" />
          <span className="text-[#FF8C00]">Buy Plan</span>
        </div>
        <BsGiftFill color="#1B3F67" />
        <FaBell color="#1B3F67" />
        <Avatar size="md" src="https://i.pravatar.cc/150?u=a04258114e29026702d" zoomed />
        <span>Mukund Cake Shop</span>
        <BsFillCaretDownFill color="#1B3F67" />
        <BsTranslate color="#1B3F67" />
      </div>
    </>
  );
};

export default NavBar;
