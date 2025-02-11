import { NAVS } from "@/constants/header";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Nav() {
  const pathName = usePathname();
  return (
    <>
      {NAVS.map((element, index) => {
        return (
          <li key={index}>
            <Link
              className={classNames(
                "text-custom-gray text-base font-semibold leading-[20px] text-left tracking-widest hover:text-oxford-blue active:text-oxford-blue",
                {'text-oxford-blue': pathName===element.href}
              )}
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
