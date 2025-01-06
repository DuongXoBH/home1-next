// import { type } from "os";
export interface IInput {
  type: string;
  name: string;
  width: string;
  padding: string;
  placehoder: string;
}

function InputElement(props: IInput) {
  return (
    <input
      type={props.type}
      name={props.name}
      className={`md:h-[61.58px] text-xs md:text-base font-normal md:leading-6 md:tracking-widest text-left rounded-2xl border-2 border-solid border-[gray] ${props.width} ${props.padding}`}
      placeholder={props.placehoder}
    />
  );
}

export default InputElement;
