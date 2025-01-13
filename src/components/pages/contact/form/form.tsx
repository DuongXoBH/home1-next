import ContactFormComponent from "@/components/common/contact-form";
import DescriptionText from "@/components/common/description-text";
import NameText from "@/components/common/name-text";
import TittleText from "@/components/common/tittle-text";
import Image from "next/image";

export default function FormComponent() {
  return (
    <div className="w-full mt-8 md:mt-[117px] p-4 md:p-0 mb-20 flex flex-col md:justify-between container">
      <div className="w-full flex flex-col md:flex-row justify-between items-center pr-5">
        <div className="w-full md:w-[680px] flex flex-col items-center md:items-start">
          <div className=" flex flex-col justify-start">
            <TittleText
              tittleClass="w-full md:text-left md:h-5 mt-[10px]"
              tittleText="Contact Us"
            />
            <NameText
              nameClass="w-full md:text-left md:h-[97px] md:w-[444px] mt-3"
              nameText="Contact service for our customers"
            />
          </div>
        </div>
        <DescriptionText
          descriptionClass="w-full md:text-left md:w-[407px] md:[70px] mt-3"
          descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
        />
      </div>
      <div className="md:w-full flex flex-col md:flex-row justify-between md:items-start md:mt-2 md:text-left">
        <Image
          src="/images/contact-animations.png"
          width={545}
          height={643}
          alt=""
          className="mt-5"
        />
        <ContactFormComponent />
      </div>
    </div>
  );
}
