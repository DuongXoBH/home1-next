import Image from "next/image";

function AboutComponent() {
  return (
    <>
      <div className="w-full container flex flex-col p-4 md:p-0  mt-[125px]">
        <div className="flex flex-col items-center md:items-start">
          <p className="w-full md:w-[50px] md:h-5 text-xs md:text-base font-semibold md:leading-5 text-center md:text-left text-custom-pink">
            About
          </p>
          <p className="w-full md:w-[732px] md:h-[97px] text-3xl md:text-4xl font-semibold md:leading-[45px] text-center md:text-left tracking-[0.3px] text-oxford-blue mt-3">
            We are a leading beauty clinic that has been around since 2002
          </p>
          <p className="w-full md:w-[680px] md:h-14 text-xs md:text-base font-normal md:leading-6 md:tracking-widest text-center md:text-left text-custom-gray mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </p>
        </div>
        <button className="rounded-[50px] md:h-[540px] bg-about-background bg-cover mt-[58px] flex justify-center items-center">
          <Image

          // className="px-20 py-20"
            src="/about-us-images/play-button.svg"
            width={174}
            height={174}
            alt="Play Button"
            layout="intrinsic"
          />
        </button>
      </div>
    </>
  );
}

export default AboutComponent;
