"use client"
import DescriptionText from "@/components/common/description-text";
import NameText from "@/components/common/name-text";
import TittleText from "@/components/common/tittle-text";
import { BLOGLIST } from "@/constants/pages/blog";
import Image from "next/image";
import { useState } from "react";


export function BlogContentComponent() {
  const maxGroup = Math.ceil(BLOGLIST.length/3);
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const plusIndex = () => {
    setCurrentIndex(currentIndex+1);
  };
  const minusIndex = () => {
    setCurrentIndex(currentIndex-1);
  };
  return (
    <div className="w-full md:max-w-[730px]">
      {BLOGLIST.map((element, index) => (
        <div
          key={`blog-${index}`}
          className={`${Math.ceil((index+1)/3)===currentIndex?"flex flex-col":"hidden"} w-full items-center mt-10 md:mb-[133px] rounded-[50px] md:h-[953px] shadow-custom-professional-team`}
        >
          {/* images */}
          <div>
            <Image src={element.img} alt="" width={730} height={453} />
          </div>
          {/* text */}
          <div className="flex md:max-w-[580px] md:mt-[30px] flex-col items-center md:items-start">
            <div className="flex w-full md:h-[273px] flex-col ">
              <div className="w-full flex items-center justify-center mt-[28px] gap-[15px]">
                <Image src="/blog-images/folder.svg" alt="" width={25} height={25}/>
                <TittleText tittleClass="!w-auto md:w-full md:text-left" tittleText={element.tittleText}/>
              </div>
            <NameText nameClass="w-full md:text-left mt-[18px]" nameText={element.nameText}/>
            <DescriptionText descriptionClass="w-full md:text-left mt-[23px]" descriptionText={element.desctiptionText}/>
            </div>
            {/* button */}
            <div className="w-full flex justify-center md:justify-start mt-10 mb-10 md:mb-0">
              <button className="w-[226px] h-[38px] md:h-[58px] font-semibold text-xs md:text-base md:tracking-widest bg-custom-pink text-white rounded-md md:rounded-[50px]">
                Read More
              </button>
            </div>
          </div>
        </div>
      ))}
      {/* pagination */}
      <div className="w-full flex flex-row justify-between relative">
        <button onClick={() => minusIndex()} className={`w-[50px] absolute left-0 ${ currentIndex===1 ? "hidden" : ""}`}>
          Back
        </button>
        <span className="absolute left-[50%]">{currentIndex}</span>
        <button onClick={() => plusIndex()} className={`w-[50px] absolute right-0 ${ currentIndex===maxGroup ? "hidden" : ""}`}>
          Next
        </button>
      </div>
    </div>
  );
}
