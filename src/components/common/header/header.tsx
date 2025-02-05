"use client";
import Image from "next/image";
import Nav from "./components/nav";
import { useCallback, useState } from "react";
import Link from "next/link";
import LoginButton from "./components/login-button";
import { useOutsideClick } from "@/hooks/use-outside-click";

function HeaderComponent() {
  const [isActive, setIsActive] = useState(false);
  const changeButton = () => {
    setIsActive(!isActive);
  };
  const handleClickOutSide = useCallback(() => {
    if (isActive) {
      setIsActive(false);
    }
  }, [isActive]);

  const ref = useOutsideClick(handleClickOutSide);
  return (
    <>
      <div
        className="w-full container flex z-10 px-4 md:px-0 md:z-0 justify-between"
        ref={ref}
        id="top"
      >
        <div className="w-full h-[63px] mt-[41px] flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className=" flex justify-center md:justify-between items-center md:gap-[18px]">
            <Image
              className="w-16 h-10 md:w-[79px] md:h-[63px]"
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
                <Link
                  className="text-custom-gray text-base font-semibold leading-[20px] text-left tracking-widest hover:text-oxford-blue"
                  href={`/`}
                >
                  Home
                </Link>
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
                <Link href="/contact">
                  <button className="w-[158px] h-[52px] flex justify-center items-center text-white bg-custom-pink text-base font-semibold tracking-widest text-left rounded-[50px]">
                    Contact
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-5 md:mt-[41px] flex items-center md:hidden">
          <button className="" onClick={changeButton}>
            <Image
              className="block md:hidden w-14 h-14 md:w-[79px] md:h-[63px]"
              src="/images/hamburger-menu.svg"
              width={63}
              height={63}
              alt="Toggle"
            />
          </button>
        </div>
        {/* Login Button */}
        <LoginButton/>
      </div>
      <a href="#top" className="hidden md:block sticky top-[95%] left-[95%] w-[36]">
        <Image
          src="/images/to-top-button.svg"
          className=""
          width={36}
          height={36}
          alt=""
        />
      </a>
    </>
  );
}
export default HeaderComponent;
