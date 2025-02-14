export interface IDescriptionText{
    descriptionClass :string;
    descriptionText :string;
} 
export default function DescriptionText(props:IDescriptionText){
    return (
        <p className={`text-xs md:text-base font-normal text-center md:tracking-widest text-custom-gray ${props.descriptionClass}`}>{props.descriptionText}</p>
    )
}