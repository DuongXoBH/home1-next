import { CARDS } from "@/constants/service";

function Card() {
  return (
    <>
      {CARDS.map((element) => (
        <div
          className="h-[458px] flex flex-col items-center bg-[white] opacity-100 shadow-[0px_25px_50px_25px_rgba(246,247,255,1)] z-[1] pt-[50px] pb-0 px-0 rounded-[50px]"
          key={element.name}
        >
          <img src={element.img} className="w-[166px] h-[166px]" alt="" />
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
