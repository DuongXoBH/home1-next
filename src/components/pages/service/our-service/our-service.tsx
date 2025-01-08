import Image from "next/image";

export default function OurServiceComponent() {
  return (
    <div className="w-full md:h-[862px] bg-[url(/service-images/service-background.svg)] bg-no-repeat bg-center">
      <div className="container px-4 md:p-0 md:mt-[125px] flex flex-col items-center">
        <div className="w-full md:w-[680px] flex flex-col items-center font-semibold text-center">
          <p className="w-40 h-5 text-xs md:text-base md:leading-5 text-custom-pink">
            Our Services
          </p>
          <p className="w-full md:w-[732px] md:h-[53px] text-3xl md:text-4xl md:leading-[45px] tracking-[0.3px] text-oxford-blue mt-3 mb-0 mx-0">
            We focus on your beauty
          </p>
          <p className="w-full md:w-[848px] md:h-[51px] text-xs md:text-base font-normal md:leading-6 tracking-widest text-custom-gray mt-4 mb-0 mx-0">
            Lorem ipsum dolor sit amet
          </p>
        </div>
        <div className="w-full md:w-[1100px] mt-[49px] flex flex-wrap justify-center md:justify-between">
          <Image
            className="order-1 md:order-1 mb-[68px]"
            src="/service-images/service-image-1.svg"
            alt=""
            width={291}
            height={254}
          />
          <Image
            className="order-3 md:order-2 mb-[68px]"
            src="/service-images/service-image-2.svg"
            alt=""
            width={725}
            height={254}
          />
          <Image
            className="order-4 md:order-3 mb-[68px] "
            src="/service-images/service-image-3.svg"
            alt=""
            width={725}
            height={275}
          />
          <Image
            className="order-2 md:order-4 mb-[68px]"
            src="/service-images/service-image-4.svg"
            alt=""
            width={291}
            height={255}
          />
        </div>
      </div>
    </div>
  );
}
