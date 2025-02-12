import DescriptionText from "@/components/common/description-text";
import NameText from "@/components/common/name-text";
import TittleText from "@/components/common/tittle-text";
import { BLOGLIST } from "@/constants/pages/blog";
import Image from "next/image";

export default function TheBlog() {
    let i = 0;
  return (
    <div className="w-full container mt-10 md:mt-[110.5px]">
      <div className="w-full flex flex-col items-center">
        <TittleText tittleClass="" tittleText="The Blog" />
        <NameText nameClass="mt-3" nameText="Our latest news" />
        <DescriptionText
          descriptionClass="mt-5"
          descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.."
        />
      </div>
      <div className="w-full md:mt-[76px] flex flex-col items-center md:flex-row md:justify-between">
        {BLOGLIST.map((element, index) => {
            if(i>2) return;
                i++;
          return (
            <div
              key={`blog ${index}`}
              className="w-[347px] h-[543px] border rounded-[25px] mt-3 md:mt-0 hover:border-[2px] hover:border-slate-800"
            >
              <Image
                src={element.img}
                alt=""
                width={347}
                height={249}
                className="h-[249px]"
              ></Image>
              <p className="w-full pl-[38px] mt-5 text-lg leadding-[22.5px] font-semibold text-center md:text-left text-oxford-blue">
                {element.nameText}
              </p>
              <p className="w-full pl-[38px] mt-3 text-sm font-normal tracking-widest text-center md:text-left text-custom-gray">
                {element.desctiptionText}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
