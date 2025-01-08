export interface ITextbox{
    divClass : string;
    tittleClass :string;
    tittleText :string;
    nameClass : string;
    nameText :string;
    descriptionClass :string;
    descriptionText :string;
}
export default function TextBoxComponent(props : ITextbox){
    return(
        <div className={`flex ${props.divClass}`}>
            <div className="flex flex-col text-center">
                <p className={`w-full text-xs md:text-base !leading-5 font-semibold tracking-[0.48px] text-custom-pink ${props.tittleClass}`}>{props.tittleText}</p>
                <p className={`w-full font-semibold text-3xl md:text-4xl md:leading-[45px] mt-3 text-center md:tracking-[0.36px] text-oxford-blue ${props.nameClass}`}>{props.nameText}</p>
            </div>
            <div className={`text-center flex items-center ${props.descriptionClass}`}>
                <p className="text-xs md:text-base font-semibold md:tracking-widest text-custom-gray">{props.descriptionText}</p>
            </div>
        </div>
    )
}