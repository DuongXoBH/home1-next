import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full md:h-[529px] mt-10 md:mt-[103px] bg-team-background bg-center bg-no-repeat">
      <div className="w-full h-full bg-custom-service-slogan">
        <div className="container px-4 md:p-0 md:w-full md:h-full pb-3 flex flex-col md:flex-row md:justify-between md:items-center text-white">
          <div className="flex flex-col w-full md:w-full text-center items-center">
            <p className="w-full md:max-w-[500px] md:h-[97x] text-3xl md:text-4xl !leading-[45px] font-semibold tracking-[0.46px]">
            Customer satisfaction is our main goal </p>
            <p className="w-full md:max-w-[680px] md:h- text-xs md:text-base md:font-normal text-custom-gray md:tracking-widest">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
