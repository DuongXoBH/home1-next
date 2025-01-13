export interface IDesctiptionText{
    descriptionClass :string;
    descriptionText :string;
} 
export default function DescriptionText(props:IDesctiptionText){
    return (
        <p className={`text-xs md:text-base font-normal text-center md:tracking-widest text-custom-gray ${props.descriptionClass}`}>{props.descriptionText}</p>
    )
}