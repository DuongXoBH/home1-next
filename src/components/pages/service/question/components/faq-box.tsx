"use client";
import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { QUESTIONLIST } from "@/constants/pages/service/question";

export default function FaqBoxComponent() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleActive = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full md:w-[972px] mx-auto mt-[90px] flex flex-col justify-center">
      {QUESTIONLIST.map((element, index) => (
        <div
          className={`w-full flex flex-col items-center mb-[15px]`}
          key={`question_${index}`}
        >
          <div onClick={() => toggleActive(index)} className="w-full md:h-[24px] flex justify-between mb-[11px] md:pl-8 md:pr-5 md:items-start">
            <p className="text-oxford-blue text-base !tracking-[1.82px] font-semibold">
              {element.tittle}
            </p>
            <Image
                src={
                  activeIndex === index
                    ? "/service-images/angle-up.svg"
                    : "/service-images/angle-down.svg"
                }
                alt="Toggle"
                width={25}
                height={25}
              />
          </div>
          <div
           
            className = {
              classNames({
                'w-full md:mb-4 overflow-hidden justify-center items-center text-sm italic !tracking-[1.5px] bg-custom-faq text-custom-gray duration-300 transition-all': true,
                'flex flex-col md:h-[216px] border-t-2': index === activeIndex,
                'h-0':index !== activeIndex,
              })
            }
          >
            <p className="md:w-[800px]">{element.firstDescription}</p>
            <p className="md:w-[800px] mt-4">{element.secondDescription}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
