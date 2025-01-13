export interface ITittleText{
    tittleClass :string;
    tittleText :string;
} 
export default function TittleText(props:ITittleText){
    return (
        <p className={`w-full text-xs md:text-base !leading-5 font-semibold text-center tracking-[0.48px] text-custom-pink ${props.tittleClass}`}>{props.tittleText}</p>
    )
}