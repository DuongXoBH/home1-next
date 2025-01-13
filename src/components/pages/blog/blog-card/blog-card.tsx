import Image from "next/image";
import Card from "./component/card";
import { CATEGORIES, TAGS } from "@/constants/pages/blog";

export default function BlogCardComponent() {
  return (
    <div className="w-full md:w-[350px] md:flex md:flex-col mt-10">
      {/* search */}
      <div className="w-full h-[65px] flex shadow-custom-professional-team rounded-[50px] overflow-hidden">
        <input className="w-[80%] md:w-[275px] h-full p-[27px] text-base font-normal tracking-widest border-none rounded-l-[50px] rounded-bl-[50px];" type="text" name="blog-seach" placeholder="Search here ..."/>
        <button className="bg-oxford-blue w-[20%] md:w-[75px] flex justify-center items-center">
        <Image src="/blog-images/search-icon.svg" alt="" width={25} height={25}/>
        </button>
      </div>
      {/* post */}
      <div className="w-full md:h-[471px] flex flex-col shadow-custom-professional-team gap-7 mt-10 md:mt-[68px] pl-[49px] ">
        <p className="text-base leading-5 font-semibold tracking-[0.37px] mt-[66px] text-oxford-blue">
          Recent Posts
        </p>
        <div className="flex flex-col gap-[27px]">
          <div className="w-full md:w-[273px] flex flex-row justify-center gap-5 md:justify-between">
            <Image
              src="/blog-images/recent-1.svg"
              alt=""
              width={82}
              height={82}
            />
            <div className="text-left h-full flex flex-col justify-between">
              <p className="w-full text-sm leading-[21px] font-semibold tracking-[1.4px] text-custom-pink">
                01 jan 2021
              </p>
              <p className="w-[165px] text-xs leading-[18px] font-normal tracking-[1.2px] text-custom-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[273px] flex flex-row justify-center gap-5 md:justify-between">
            <Image
              src="/blog-images/recent-2.svg"
              alt=""
              width={82}
              height={82}
            />
            <div className="text-left h-full flex flex-col justify-between">
              <p className="w-full text-sm leading-[21px] font-semibold tracking-[1.4px] text-custom-pink">
                01 jan 2021
              </p>
              <p className="w-[165px] text-xs leading-[18px] font-normal tracking-[1.2px] text-custom-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[273px] flex flex-row justify-center gap-5 md:justify-between">
            <Image
              src="/blog-images/recent-3.svg"
              alt=""
              width={82}
              height={82}
            />
            <div className="text-left h-full flex flex-col justify-between">
              <p className="w-full text-sm leading-[21px] font-semibold tracking-[1.4px] text-custom-pink">
                01 jan 2021
              </p>
              <p className="w-[165px] text-xs leading-[18px] font-normal tracking-[1.2px] text-custom-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* categories */}
      <Card tittleText="Categories" contentClass="flex w-full flex-col pl-[49px] md:items-start md:mb-[36px]" childrent={
        <>
          {CATEGORIES.map((element,index)=>(
              <p key={`categories-${index}`} className={`text-sm w-full text-center md:text-left h-[23px] mb-1 leading-[21px] font-normal tracking-[1.4px] text-custom-gray`}>{element.text}</p>
          ))}
        </>
      }/>
      {/* tags */}
      <Card tittleText="Cloud Tags" contentClass="flex flex-wrap w-[260px] gap-[6px] md:mb-[32px]" childrent={
        <>
          {TAGS.map((element,index)=>(
              <p key={`tag-${index}`} className={`text-sm text-center w-[82px] h-[26px] mb-[14px] rounded-[50px] leading-[21px] font-normal tracking-[1.4px] text-custom-gray`}>{element.text}</p>
          ))}
        </>
      }/>
      {/* social connect */}
      <div className="hidden md:block">
      <Card tittleText="Social Connect" contentClass="w-[260px] md:flex flex-row gap-[21px] mt-[14px] mb-10 rounded-[50px] bg-black-300" childrent={
        <>
        <div className="w-[43px] h-[43px] ml-[7px] rounded-full">
          <Image src="/blog-images/facebook.svg" alt="" width={25} height={25}/>
        </div>
        <div className="w-[43px] h-[43px] rounded-full">
          <Image src="/blog-images/twitter.svg" alt="" width={25} height={25}/>
        </div>
        <div className="w-[43px] h-[43px] rounded-full">
          <Image src="/blog-images/instagram.svg" alt="" width={25} height={25}/>
        </div>
        <div className="w-[43px] h-[43px] rounded-full">
          <Image src="/blog-images/linkedin.svg" alt="" width={25} height={25}/>
        </div>
        </>
      }/>
      </div>
    </div>
  );
}
