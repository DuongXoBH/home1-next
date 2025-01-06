export interface IInputItem {
  href: string;
  text: string;
}
export interface IInput {
  input: Array<IInputItem>;
  name: string;
  width: string;
}
function Item(props: IInput) {
  return (
    <>
      <p
        className={`${props.width} h-[31px] text-lg font-semibold tracking-widest text-left`}
      >
        {props.name}
      </p>
      <ul className="mt-4 md:mt-[26px]">
        {props.input.map((element) => (
          <li
            key={element.text}
            className="list-image-footer-list-icon list-inside mb-[11px] ml-1"
          >
            <a
              className="text-sm md:text-base font-normal md:tracking-widest text-left pl-[7px]"
              href={element.href}
            >
              {element.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Item;
