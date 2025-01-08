import { CARDS } from "@/constants/pages/home1/service";
import Image from "next/image";

function Card() {
  return (
    <>
      {CARDS.map((element) => (
        <div
          className="h-[458px] w-[343px] flex flex-col items-center bg-[white] shadow-[0px_25px_50px_25px_rgba(246,247,255,1)] mt-5 md:mt-0 z-[1] pt-[50px] pb-0 px-0 rounded-[50px]"
          key={element.name}
        >
          <Image src={element.img} width={166} height={166} alt="" />
          <p className="mt-[58px] text-lg leadding-[22.5px] font-semibold text-center text-oxford-blue">
            {element.name}
          </p>
          <p className="w-[274px] h-20 mt-[18px] text-sm font-normal tracking-widest text-center text-custom-gray">
            {element.description}
          </p>
        </div>
      ))}
    </>
  );
}
export default Card;
