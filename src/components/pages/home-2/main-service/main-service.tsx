import DescriptionText from "@/components/common/description-text";
import NameText from "@/components/common/name-text";
import TittleText from "@/components/common/tittle-text";
import { SERVICES } from "@/constants/pages/home-2/main-service";
import Image from "next/image";
import Link from "next/link";

export default function MainService(){
    return (
        <div className="container w-full flex flex-col items-center mt-10 md:mt-[158px]">
            <div className="w-full flex flex-col items-center">
                <TittleText tittleClass="" tittleText="Main Services"/>
                <NameText nameClass="mt-3" nameText="Our focus services"/>
                <DescriptionText descriptionClass="mt-5" descriptionText="Lorem ipsum dolor sit amet."/>
            </div>
            <div className="w-full md:max-w-[915px] md:mt-[76px] flex flex-col items-center md:flex-row md:justify-between">
                {SERVICES.map((element, index)=>{
                    return(
                        <div key={`service ${index}`} className="w-[261px] h-[303px] border rounded-[25px] px-8 mt-3 md:mt-0 hover:border-[2px] hover:border-slate-800">
                            <Image src={element.img} alt="" width={64} height={64} className="mt-8"></Image>
                            <p className="w-full mt-5 h-[27px] text-lg leadding-[22.5px] font-semibold text-center md:text-left text-oxford-blue">
                                {element.name}
                            </p>
                            <p className="w-full mt-3 max-w-[189px] text-sm font-normal tracking-widest text-center md:text-left text-custom-gray">
                                {element.text}
                            </p>
                            {/* <Link href={'#'} className="font-semibold text-sm leading-[17.5] ">
                                Learn more
                            </Link> */}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}