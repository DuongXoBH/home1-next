export interface INameText{
    nameClass :string;
    nameText :string;
} 
export default function NameText(props:INameText){
    return (
        <p className={`w-full font-semibold text-3xl md:text-4xl md:leading-[45px] text-center md:tracking-[0.36px] text-oxford-blue ${props.nameClass}`}>{props.nameText}</p>
    )
}