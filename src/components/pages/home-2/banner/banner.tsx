import Image from "next/image";

export default function Banner() {
  return (
    <div className="container flex flex-col mt-10 md:mt-[169px] items-center md:items-start">
      <div className="flex flex-col md:flex-row w-full md:text-white md:items-end">
        <div className="w-full flex flex-col">
          <p className="w-full md:max-w-[502px] md:h-[133px] font-semibold text-center md:text-left text-4xl md:text-5xl md:tracking-[0.56px] md:leading-[60px]">
            Your beauty center place
          </p>
          <p className="w-full md:max-w-[501px] md:min-h-[78px] font-medium text-center md:text-left text-base tracking-[1.72px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo,
            massa pellentesque arcu fusce et magna consequat neque vitae
            lobortis.
          </p>
        </div>
        <div className="md:flex md:flex-row md:w-1/2 h-[127px] gap-[30px] md:pl-[90px] hidden">
          <Image
            src="/home-2/group-4.svg"
            alt="Play Button"
            width={127}
            height={127}
          />
          <p className="text-xs md:text-base font-semibold tracking-widest">
            Tour Video
          </p>
        </div>
      </div>
      <button className="w-[179px] h-[52px] text-center  md:text-white font-semibold text-base tracking-widest border rounded-2xl md:mt-[34px]">
        More Details
      </button>
    </div>
  );
}
