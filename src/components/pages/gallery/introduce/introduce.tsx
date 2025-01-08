import TextBoxComponent from "@/components/common/text-box";
import { INTRODUCEIMAGES } from "@/constants/pages/gallery/introduce";
import Image from "next/image";

export default function IntroduceComponent() {
  return (
    <div className="w-full md:mt-[125px] flex flex-col px-4 md:p-0 container">
      {/* content */}
      <TextBoxComponent
        divClass="w-full md:w-[1120px] md:h-[136px] mr-5 flex-col md:flex-row md:justify-between md:items-center"
        tittleClass="md:text-left"
        tittleText="Our Gallery"
        nameClass="md:w-[615px] md:mb-[16px] md:text-left"
        nameText="Check out the collection pictures from our clinic"
        descriptionClass="w-full md:w-[407px] h-full mt-3 md:mt-0 md:text-left"
        descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
      />
      {/* image */}
      <div className="w-full md:mt-[38px] flex flex-wrap justify-center md:justify-between">
        {INTRODUCEIMAGES.map((element, index) => (
          <Image
            className="mt-[38px]"
            key={`introduce_image_${index}`}
            src={element.href}
            alt=""
            width={356}
            height={210}
          />
        ))}
      </div>
      {/* note */}
      <div className="w-full mt-[66px] text-left">
        <p className="w-full md:w-[660px] text-xs md:text-base tracking-widest font-normal text-custom-gray">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim,{" "}
          <span className="font-semibold text-oxford-blue">our teams</span>.
        </p>
      </div>
    </div>
  );
}
