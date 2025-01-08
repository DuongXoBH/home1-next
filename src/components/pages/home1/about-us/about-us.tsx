import Image from "next/image";

function AboutUs() {
  return (
    <>
      <div className="w-full h-[950px] absolute bg-no-repeat bg-right-top z-[-1] top-[1448px] bg-about-us-background"></div>
      <div className="w-full flex flex-col md:flex-row mt-[129px] p-4 md:p-0 container">
        <div className="w-full text-center md:w-[664px] md:h-[292px]">
          <p className="w-full md:w-[73px] md:h-5 text-xs md:text-base font-semibold md:leading-5 text-center md:text-left text-custom-pink m-0">
            About Us
          </p>
          <p className="w-full md:w-[664px] md:h-[52px] text-3xl md:text-4xl font-semibold md:leading-[45px] text-center md:text-left text-[rgba(9,17,86,1)] tracking-[0.3px] mt-3 mb-0 mx-0">
            We are the best beauty clinic
          </p>
          <p className="w-full md:w-[483px] text-xs md:text-base  md: font-normal md:leading-6 md:tracking-widest text-center md:text-left text-custom-gray mt-3 mb-6 mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
            suscipit purus donec amet. Egestas volutpat facilisi eu libero.
            Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
            suspendisse placerat.
          </p>
          <p className="w-full md:w-[483px] text-xs md:text-base md: font-normal md:leading-6 md:tracking-widest text-center md:text-left text-custom-gray mt-3 mb-6 mx-0">
            Id dui erat sed quam tellus in purus. Pellentesque congue fringilla
            cras tellus enim.
          </p>
          <div className="flex md:w-[460px] h-[60px] mt-[52px] justify-between">
            <button className="w-[40%] md:w-[200px] h-[58px] text-[antiquewhite] bg-custom-pink text-xs md:text-base font-semibold md:leading-6 md:tracking-widest text-center mr-1.5 rounded-[50px] border-0">
              Learn More
            </button>
            <button className="w-[40%] md:w-[250px] flex items-center justify-center rounded-[50px] border-0">
              <Image
                src="/images/play-button.svg"
                width={49}
                height={50}
                alt=""
              />
              <p className="text-xs md:text-base font-semibold md:leading-6 md:tracking-[1.6px] m-0 pl-[13px] pr-0 py-0;">
                Watch Video
              </p>
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center md:justify-start md:w-[476px] rounded-[50px_0px_0px_0px] text-center">
          <Image
            src="/images/about-us-img.png"
            className="mt-[45px]"
            width={475}
            height={350}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
