import { CONTACTINFOR } from "@/constants/pages/contact";
import Image from "next/image";

export default function GetInTouchComponent() {
  return (
    <div className={`w-full md:w-[1038px] flex flex-col items-center mt-10 md:mt-28 p-4 md:p-0 container`}>
      <div
        className={`w-full md:w-[848px] flex flex-col items-center font-semibold `}
      >
        <p className="w-40 h-5 text-xs md:text-base md:leading-5 text-center text-custom-pink">
          Get in Touch
        </p>
        <p
          className={`w-full md:w-[732px] text-3xl md:text-4xl font-semibold md:leading-[45px] tracking-[0.3px] text-center text-oxford-blue mt-3 mb-0 mx-0`}
        >
          Get direct handling by us
        </p>
        <p
          className={`w-full md:w-[848px] text-xs md:text-base font-normal md:leading-6 tracking-widest text-center text-custom-gray mt-[23px] mb-0 mx-0`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </p>
      </div>
      <div className="w-full md:h-[634px] flex flex-col items-center md:flex-row md:items-start justify-between py-0">
        {/* <TeamCard /> */}
        {CONTACTINFOR.map((element, index) => (
          <div
            key={`contact-${index}`}
            className="w-[270px] md:h-[253px] p-5 md:p-0 flex flex-col items-center bg-[white] z-[1] mt-12 md:mt-[177px] mb-0 mx-0 rounded-[50px] md:hover:w-[424px] md:hover:h-[402px] hover:shadow-custom-professional-team hover:duration-[0.5s] md:hover:mt-[77px] hover:mb-0 hover:mx-0 md:hover:pt-[100px] hover:rounded-[50px]"
          >
            <Image src={element.img} width={65} height={65} alt="" />
            <div className="w-[263px] h-[120px] flex flex-col items-center mt-[45px]">
              <p className="w-[150px] h-5 text-base font-semibold leading-5 text-center text-custom-pink mb-0 mx-0">
                {element.tittle}
              </p>
              <p className="w-[263px] h-[37px] text-2xl font-semibold tracking-[0.44px] leading-[30px] text-center text-oxford-blue mt-[15px] mb-0 mx-0">
                {element.name}
              </p>
              <p className="w-[260px] h-[63px] text-sm font-normal leading-[21px] tracking-widest text-center mt-[15px] text-custom-gray mb-0 mx-0 group-hover:mt-3">
                {element.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
