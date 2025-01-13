import Image from "next/image";
import TittleText from "@/components/common/tittle-text";
import NameText from "@/components/common/name-text";
import DescriptionText from "@/components/common/description-text";
import ContactFormComponent from "../../../common/contact-form";

function ContactUsComponent() {
  return (
    <>
      <div className="w-full mt-8 md:mt-[147px] p-4 md:p-0 mb-20 flex flex-col md:flex-row md:justify-between container">
        <div className="md:w-[520px] md:pt-[165px] flex justify-center md:items-start md:text-left px-[auto]">
          <Image src="/images/contact-animations.png" width={520} height={610} alt="" className="" />
        </div>
        <div className="w-full md:w-[520px] flex flex-col items-center md:items-start">
          <div className=" flex flex-col justify-start">
            <TittleText tittleClass="w-full md:text-left md:h-5 mt-[10px]" tittleText="Contact Us"/>
            <NameText nameClass="w-full md:text-left md:h-[97px] md:w-[404px] mt-3" nameText="Send your inquiry to our expert team"/>
            <DescriptionText descriptionClass="w-full md:text-left md:w-[497px] md:h-7 mt-3" descriptionText="Lorem ipsum dolor sit amet nulla turapis tellus"/>
          </div>
          <ContactFormComponent/>
        </div>
      </div>
    </>
  );
}

export default ContactUsComponent;
