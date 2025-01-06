import classNames from "classnames";
import Image from "next/image";
import { useMemo } from "react";

export interface IArray {
  reverse: boolean;
  img: string;
  tittle: string;
  name: string;
  firstDescription: string;
  secondDescription :string;
}
export interface IInformation {
  information: Array<IArray>;
}
function ContentBoxComponent(props: IInformation) {

  return (
    <>
      {props.information.map((element) => (

        <div className={classNames(
          "flex flex-col items-center md:flex-row md:justify-between",
          {
            "": !element.reverse,
            "md:flex-row-reverse md:mt-[82px]": element.reverse,
          }
        )} key={element.name}>
            <div className={classNames(
              "w-full md:w-[475px]"
            )}>
                <Image src={element.img} width={475} height={314} alt=""></Image>
                <br />
            </div>
            <div className={classNames(
              "w-full md:w-[475px] pt-[13px]",
              { 
                "w-full md:w-[475px]": !element.reverse,
                "w-full md:w-[540px]": element.reverse
              }
            )}>
                <p className="w-full md:w-24 h-5 font-semibold text-xs md:text-base md:leading-5 text-custom-pink">{element.tittle}</p>
                <p className={`w-full md:w-[510px] font-semibold text-4xl md:leading-[45px] mt-3 tracking-[0.36px] text-oxford-blue`}>{element.name}</p>
                <p className={`w-full md:w-[475px] font-normal text-xs md:text-base mt-[15px] md:tracking-widest mb-[22px] text-custom-gray`}>{element.firstDescription}</p>
                <p className={`w-full md:w-[475px] font-normal text-xs md:text-base mt-[15px] md:tracking-widest mb-[22px] text-custom-gray`}>{element.secondDescription}</p>
            </div>
        </div>
      ))}
    </>
  );
}

export default ContentBoxComponent;
