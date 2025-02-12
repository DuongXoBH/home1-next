import DescriptionText from "@/components/common/description-text";
import NameText from "@/components/common/name-text";
import TittleText from "@/components/common/tittle-text";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="container md:mt-[470px] flex flex-col md:flex-row items-center md:justify-between md:items-start">
      <Image
        src={"/home-2/about-us.png"}
        alt=""
        width={490}
        height={302}
      ></Image>

      <div className="flex flex-col items-center">
        <TittleText tittleClass="md:max-w-[75px]" tittleText="About Us" />
        <NameText
          nameClass="md:max-w-[460px] md:text-left mt-3"
          nameText="We are the best beauty clinic"
        />
        <DescriptionText
          descriptionClass="md:max-w-[483px] md:text-left mt-[10px]"
          descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat."
        />
        <button className="w-[40%] md:w-[200px] h-[58px] mt-[50px] text-[antiquewhite] bg-custom-pink text-xs md:text-base font-semibold md:leading-6 md:tracking-widest text-center mr-1.5 rounded-[50px] border-0">
          Learn More
        </button>
      </div>
    </div>
  );
}
