import classNames from "classnames";
import Image from "next/image";

export interface IArray {
  reverse: boolean;
  img: string;
  tittle: string;
  name: string;
  firstDescription: string;
  secondDescription :string;
  href :string;
}
export interface IInformation {
  information: Array<IArray>;
  contentPadding : string;
  divClass : string;
  textClass : string;
}
function ContentBoxComponent(props: IInformation) {

  return (
    <>
      {props.information.map((element) => (

        <div className ={`flex flex-col items-center md:items-start md:flex-row md:justify-between ${element.reverse ? `md:flex-row-reverse ${props.divClass}` : ""} `} key={element.name}>
            <div className={classNames(
              `w-full md:w-[475px]`
            )}>
                <Image src={element.img} width={475} height={314} alt=""></Image>
                <br />
            </div>
            <div className={classNames(
              `w-full md:w-[475px] pt-2 ${props.contentPadding}`,
              { 
                "w-full md:w-[475px]": !element.reverse,
                "w-full md:w-[540px]": element.reverse
              }
            )}>
                <p className="w-full md:w-full h-5 font-semibold text-center md:text-left text-xs md:text-base md:leading-5 text-custom-pink">{element.tittle}</p>
                <p className={`w-full ${props.textClass} font-semibold text-3xl md:text-4xl md:leading-[45px] mt-3 text-center md:text-left md:tracking-[0.36px] text-oxford-blue`}>{element.name}</p>
                <p className={`w-full md:w-[475px] font-normal text-xs md:text-base mt-[15px] text-center md:text-left md:tracking-widest mb-[22px] text-custom-gray`}>{element.firstDescription}</p>
                {element.secondDescription && 
                <p className={`w-full md:w-[475px] font-normal text-xs md:text-base mt-[15px] text-center md:text-left md:tracking-widest mb-[22px] text-custom-gray`}>{element.secondDescription}</p>}
                {
                  element.href &&
                  <div className="flex gap-[13px] justify-center md:justify-start">
                    <p className="text-base tracking-[1.8px] text-oxford-blue font-semibold ">Make an Appointment</p>
                    <Image src="/service-images/angle-double-right.svg" alt="" width={25} height={25}/>
                  </div>
                }
            </div>
        </div>
      ))}
    </>
  );
}

export default ContentBoxComponent;
