import { INFORMATIONS, PAGES } from "@/constants/footer";
import Item from "./components/item";
import Image from "next/image";


const FooterComponent=()=>{
  return (
    <>
      <div className="relative">
      <div className={`w-full relative flex flex-col p-4 md:p-0 text-[white] container bg-patrick-blue md:h-[485.34px] md:bg-inherit`}>
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full md:w-[492px] mt-4">
            <div className="flex items-center">
              <div>
              <Image src="/images/footer-logo.svg" width={79} height={63} alt="" sizes="(max-width: 768px) 100vw, 50vw"/>
              </div>
              <p className="w-[161px] md:h-[34px] text-xl md:text-2xl font-bold leading-9 tracking-[3.2px] text-left text-white ml-[18px] mr-0 my-0">
                Beautice
              </p>
            </div>
            <div className="mt-[33px] ml-[30px]">
              <p className="w-full md:w-[461px] md:h-[21px] text-base font-bold leading-6 tracking-[1.7px] text-left mt-0 mb-[26px] mx-0">
                Beautice{" "}
                <span className="font-normal">
                  is a Beauty Clinic WordPress Theme.
                </span>
              </p>
              <address className="w-[297px] h-6 text-sm italic font-medium leading-[21px] tracking-[1.7px] text-left">
                Baker Steet 101, NY, United States.
              </address>
              <div className="flex mt-[1px] pl-[2px]">
                <p className="  @apply text-sm italic font-medium leading-[21px] tracking-widest text-left m-0">
                  +521 569 8966.
                </p>
                <p className="  @apply text-sm italic font-medium leading-[21px] tracking-widest text-left ml-[49px] underline">
                  mail@company.com.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between mt-5 md:mt-0">
          <div className="md:ml-[129px] text-left">
            <Item name="Pages" input={PAGES} width="w-[131px]" />
          </div>
          <div className="md:ml-[173px] text-left">
            <Item name="Informations" input={INFORMATIONS} width="md:w-60" />
          </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between mt-5 md:mt-[132px] mb-20 md:mb-0">
          <div className="w-full md:w-[305px] h-7 flex justify-between">
            <Image src="/images/facebook-f.svg" width={25} height={28} alt="" />
            <Image src="/images/twitter.svg" width={25} height={28} alt="" />
            <Image src="/images/linkedin-in.svg" width={25} height={28} alt="" />
            <Image src="/images/youtube.svg" width={25} height={28} alt="" />
            <Image src="/images/instagram.svg" width={25} height={28} alt="" />
          </div>
          <div className="w-full md:w-[497px] h-[31.18px] text-xs md:text-base font-normal tracking-[1.65px] text-left md:text-right mt-10 md:mt-0">
            © AltDesain Studio 2021 - All right reserved.
          </div>
        </div>
        <a href="#top" className="transition-all duration-300 hidden md:block">
          <Image
            src="/images/to-top-button.svg"
            className="absolute right-[-85px] bottom-[173px] "
            width={36}
            height={36}
            alt=""
          />
        </a>
      </div>
      <div className={`w-full h-[705.34px] absolute hidden md:block bottom-0 bg-footer-background bg-no-repeat bg-center z-[-1]`}></div>
      </div>

    </>
  );
}

export default FooterComponent;
