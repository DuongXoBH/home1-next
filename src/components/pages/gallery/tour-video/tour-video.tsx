import Image from "next/image";

export default function TourVideoComponent() {
  return (
    <div className="w-full h-[628px] mt-10 md:mt-[124px] bg-gallery-banner-background bg-cover bg-center bg-no-repeat">
      <div className="h-full bg-custom-service-slogan">
        <div className="container md:w-full h-full flex flex-col justify-center items-center gap-6 text-white">
          <div className=" mt-[15px] flex flex-col w-full md:w-1/2 text-center ">
            <p className="w-full text-3xl md:text-4xl !leading-[45px] font-semibold tracking-[0.46px]">
              Watch the video tour
            </p>
            <p className="w-full text-base md:font-normal text-custom-gray tracking-widest mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </p>
          </div>
          <div className="flex md:w-full items-center justify-center">
            <Image
              src="/service-images/play-button.svg"
              alt="Play Boutton"
              width={165}
              height={165}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
