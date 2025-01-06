import { NAVS } from "@/constants/header";

function Nav() {
  return (
    <>
      {NAVS.map((element, index) => {
        return (
          <li key={index}>
            <a
              className="text-custom-gray text-base font-semibold leading-[20px] text-left tracking-widest hover:text-oxford-blue active:text-oxford-blue"
              href={element.href}
            >
              {element.text}
            </a>
          </li>
        );
      })}
    </>
  );
}
export default Nav;
