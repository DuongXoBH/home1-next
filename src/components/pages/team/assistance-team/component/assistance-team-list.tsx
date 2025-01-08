import Image from 'next/image';
import React from 'react'
export interface ITeamList{
    img : string;
    name :string;
    office :string;
    description :string;
}
export interface IList{
    information :Array<ITeamList>;
}
const AssistanceTeamListComponent = (props:IList) => {
  return (
    <>
        <div className='mt-[113px]'>
        {
            props.information.map((element)=>(
                <div className='w-full md:w-[1004px] md:h-[253px] flex md:flex-row justify-between md:mb-20 items-center' key={element.name}>
                {/* image */}
                <div>
                    <Image src={element.img} alt='' width={398} height={253}/>
                </div>
                {/* text  */}
                <div className='w-[434px] h-[119px] text-custom-gray flex flex-col text-center md:text-left'>
                    <p className='text-lg font-semibold leading-[22.5px] text-oxford-blue'>{element.name}
                    <span className='italic text-sm font-normal leading-[17.5px] text-custom-gray'>{element.office}</span></p>
                    <p className='md:mt-5 text-base tracking-widest'>{element.description}</p>
                </div>
            </div>
            ))
        }
        </div>
    </>
)
}

export default AssistanceTeamListComponent