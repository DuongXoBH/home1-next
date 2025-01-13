
export interface ICardProps{
    childrent :React.ReactNode;
    tittleText : string;
    contentClass :string;
}
export default function Card({childrent,tittleText,contentClass} :ICardProps ){
    return(
        <div className="flex flex-col items-center gap-[22px] mt-10 md:mt-[92px] shadow-custom-professional-team rounded-[25px] pt-[58px]" >
            <p className=" w-full pl-[49px] text-base leading-5 font-semibold text-oxford-blue ">{tittleText}</p>
            <div className={`${contentClass}`}>
                {childrent}
            </div>
        </div>
    )
}