import { NAVS } from "@/constants/header";
import Link from "next/link";

function Nav() {
  return (
    <>
      {NAVS.map((element, index) => {
        return (
          <li key={index}>
            <Link
              className="text-custom-gray text-base font-semibold leading-[20px] text-left tracking-widest hover:text-oxford-blue active:text-oxford-blue"
              href={element.href}
            >
              {element.text}
            </Link>
          </li>
        );
      })}
    </>
  );
}
export default Nav;
