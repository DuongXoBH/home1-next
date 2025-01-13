"use client";

import TextBoxComponent from "@/components/common/text-box";
import { SLIDES } from "@/constants/pages/team/slider-list";
import SliderComponent from "./component/slide";

export default function TestimonialCopmponent() {

  return (
    <div className="w-full container flex flex-col items-center px-4 md:px-0 mb-[62px] bg-slider-background">
      <TextBoxComponent
        divClass="w-full md:max-w-[680px] mt-[118px] flex flex-col items-center"
        tittleText="Our Testimonials"
        tittleClass=""
        nameText="What our customer says"
        nameClass="md:h-[57px]"
        descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        descriptionClass="md:h-[28px] mt-3"
      />
      {/* <SlideComponent/> */}
      <SliderComponent slides={SLIDES} />
    </div>
  );
}
