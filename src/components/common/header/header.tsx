"use client";
import Image from "next/image";
import Nav from "./components/nav";
import { useCallback, useEffect, useRef, useState } from "react";
import { useOutsideClick } from "@/app/hooks/use-outside-click";

function HeaderComponent() {
  const [isActive, setIsActive] = useState(false);
  const changeButton = () => {
    setIsActive(!isActive);
  };
  const handleClickOutSide =  useCallback(() => {
    if(isActive){
      setIsActive(false)
    }
  }, [isActive])
 
  const ref = useOutsideClick(handleClickOutSide);

  return (
    <>
      <div className="w-full container flex items-center z-10 p-4 md:p-0 md:z-0 justify-between" ref={ref}>
        <div
          className="w-full h-[63px] mt-[41px] flex flex-col md:flex-row justify-between items-start md:items-center"
          id="top"
        >
          <div className=" flex justify-start md:justify-between items-center md:gap-[18px]">
            <Image
              src="/images/group-1.svg"
              width={79}
              height={63}
              alt="Group 1"
            />
            <p className="hidden md:block w-[161px] h-[34px] text-2xl font-bold leading-[36px] tracking-[3.2px] text-left text-[#091156]">
              Beautice
            </p>
          </div>
          <div
            className={`${
              isActive ? "flex flex-col" : "hidden"
            } fixed justify-center left-0 top-0 items-center w-[60%] h-full bg-white z-10 md:flex md:relative md:w-[70%] md:justify-end md:bg-inherit md:h-[63px] xl:w-[680px]`}
          >
            <ul className="flex flex-col md:flex-row items-center md:items-center gap-[47px]">
              <li className="flex">
                <a
                  className="text-custom-gray text-base font-semibold leading-[20px] text-left tracking-widest hover:text-oxford-blue"
                  href="/"
                >
                  Home
                </a>
                <Image
                  className="ml-[5px]"
                  src="/images/plus-icon.svg"
                  width={7}
                  height={7}
                  alt=""
                />
              </li>
              <Nav />
              <li>
                <a href="#">
                  <button className="w-[158px] h-[52px] flex justify-center items-center text-white bg-custom-pink text-base font-semibold tracking-widest text-left rounded-[50px]">
                    Contact
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-[41px] flex items-center md:hidden">
          <button className="" onClick={changeButton}>
            <Image
              className="block md:hidden"
              src="/images/hamburger-menu.svg"
              width={79}
              height={63}
              alt="Toggle"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default HeaderComponent;
