import { INFORMATIONS, PAGES } from "@/constants/footer";
import Item from "./components/item";
import Image from "next/image";

const FooterComponent=()=>{
  return (
    <>
      <div className="w-full h-[705.34px] absolute top-[4283.66px] bg-footer-background bg-no-repeat bg-center z-[-1]"></div>
      <div className="w-full !mt-[295px] relative flex flex-col text-[white] container">
        <div className="w-full flex">
          <div className="w-[492px] mt-4">
            <div className="flex items-center">
              <Image src="/images/footer-logo.svg" width={79} height={63} alt="" />
              <p className="w-[161px] h-[34px] text-2xl font-bold leading-9 tracking-[3.2px] text-left text-white ml-[18px] mr-0 my-0">
                Beautice
              </p>
            </div>
            <div className="mt-[33px] ml-[30px]">
              <p className="w-[461px] h-[21px] text-base font-bold leading-6 tracking-[1.7px] text-left mt-0 mb-[26px] mx-0">
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
          <div className="ml-[129px] text-left">
            <Item name="Pages" input={PAGES} width="w-[131px]" />
          </div>
          <div className="ml-[173px] text-left">
            <Item name="Informations" input={INFORMATIONS} width="w-[300px]" />
          </div>
        </div>
        <div className="w-full flex justify-between mt-[132px]">
          <div className="w-[305px] h-[27.84px] flex justify-between">
            <Image src="/images/facebook-f.svg" width={25} height={28} alt="" />
            <Image src="/images/twitter.svg" width={25} height={28} alt="" />
            <Image src="/images/linkedin-in.svg" width={25} height={28} alt="" />
            <Image src="/images/youtube.svg" width={25} height={28} alt="" />
            <Image src="/images/instagram.svg" width={25} height={28} alt="" />
          </div>
          <div className="w-[497px] h-[31.18px] text-base font-normal !tracking-[1.65px] text-right">
            © AltDesain Studio 2021 - All right reserved.
          </div>
        </div>
        <a href="#top" className="transition-all duration-300">
          <Image
            src="/images/to-top-button.svg"
            className="absolute right-[-85px] bottom-[83px] "
            width={36}
            height={36}
            alt=""
          />
        </a>
      </div>
    </>
  );
}

export default FooterComponent;
