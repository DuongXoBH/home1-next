import { TEAMCARDS } from "@/constants/professional-team";
import Image from "next/image";

function TeamCard() {
  return (
    <>
      {TEAMCARDS.map((element) => (
        <div
          key={element.name}
          className="w-[270px] h-[439px] flex flex-col items-center bg-[white] z-[1] mt-[177px] mb-0 mx-0 rounded-[50px] hover:w-[424px] hover:h-[626px] hover:shadow-custom-professional-team hover:duration-[0.5s] hover:mt-[77px] hover:mb-0 hover:mx-0 hover:pt-[100px] hover:rounded-[50px]"
        >
          <Image src={element.img} width={146} height={146} alt="" />
          <p className="w-[150px] h-5 text-base font-semibold leading-5 text-center text-custom-pink mt-[53px] mb-0 mx-0">
            {element.tittle}
          </p>
          <p className="w-[263px] h-[37px] text-lg font-semibold leading-[22.5px] text-center text-oxford-blue mt-[15px] mb-0 mx-0">
            {element.name}
          </p>
          <p className="w-[260px] h-[63px] text-sm font-normal leading-[21px] tracking-widest text-center mt-5 text-custom-gray mb-0 mx-0 group-hover:mt-3">
            {element.desctiption}
          </p>
          <div className="flex justify-between mt-10">
            <Image src="/images/twitter-professional.svg" width={79} height={79} alt="" />
            <Image src="/images/facebook-professional.svg" width={79} height={79} alt="" />
            <Image src="/images/instagram-professional.svg" width={79} height={79} alt="" />
          </div>
        </div>
      ))}
    </>
  );
}

export default TeamCard;
