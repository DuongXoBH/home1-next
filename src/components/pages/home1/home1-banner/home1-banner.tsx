import Image from "next/image";

function Home1BannerComponent() {
  return (
    <>
      <div className="w-full h-[1000px] absolute top-0 bg-no-repeat -z-10 bg-header-backround"></div>
      <div className="w-full mt-10 md:mt-[123px] mb-0 container p-4 md:p-0">
        <div className="w-full flex flex-col md:pl-10 md:flex-row">
          <div className="w-full md:w-[520px] flex flex-col items-center md:items-start md:text-left pt-[56px] px-0">
            <p className="w-full md:w-[430px] md:h-[128px] text-3xl md:text-5xl font-semibold m-0 text-center md:text-left md:leading-[60px] tracking-[1px] text-oxford-blue">
              Clinic & beauty consultant
            </p>
            <p className="w-full md:w-[474px] md:h-[54px] text-xs md:text-base font-medium md:leading-6 tracking-widest text-custom-gray text-center md:text-left m-0">
              It is a long established fact that a reader will be by the
              readable content of a page.
            </p>
            <button className="w-1/2 md:w-[200px] h-11 md:h-[60px] mt-6 text-base text-center tracking-widest bg-custom-pink text-[white] border-0 rounded-md md:rounded-[50px]">
              More Details
            </button>
          </div>
          <div className="w-full mt-10 md:w-[610px] md:mt-0">
            <Image src="/images/banner.png" width={602} height={401} alt="" />
          </div>
        </div>
        <div className="w-full mt-10 md:mt-[132px] px-[auto] py-0 flex justify-center">
          <Image src="/images/slide-button.svg" width={71} height={9} alt="" />
        </div>
      </div>
    </>
  );
}

export default Home1BannerComponent;
