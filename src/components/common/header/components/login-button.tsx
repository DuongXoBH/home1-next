import { useOutsideClick } from "@/hooks/use-outside-click";
import { UserInit } from "@/stage-manage/user-storage";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";

export default function LoginButton() {
  const [user, setUser] = useAtom(UserInit);
  const [open, setOpen] = useState<boolean>(false);
  const pathName = usePathname();
  const handleClickOutSide = useCallback(() => {
    if (open) {
      setOpen(false);
    }
  }, [open]);

  const ref = useOutsideClick(handleClickOutSide);
  const route = useRouter();
  const logOut = () => {
    toast.success("Logout");
    setUser(null);
    route.push(`/`);
  };
  const openUser = () => {
    setOpen(!open);
  };
  if (user) {
    return (
      <div
        className="flex flex-col mt-9 md:mt-[41px] md:ml-4 absolute top-0 right-16 md:right-20"
        ref={ref}
      >
        <button
          onClick={() => {
            openUser();
          }}
          className="w-12 h-12 md:w-[63px] md:h-[63px]"
        >
          <Image src="/user-icon.svg" alt="" width={45} height={45} />
        </button>
        <ul
          className={`bg-sky-100 w-[300px] flex flex-col items-center md:bg-white absolute mt-12 md:top-[40px] border gap-1 right-0  ${
            open ? "block" : "hidden"
          }`}
        >
          <li className="text-base font-semibold leading-[20px] text-left tracking-widest border-b-2 hover:text-oxford-blue active:text-oxford-blue mt-2">
            Hello, {user.firstName} {user.lastName}
          </li>
          <li className="text-custom-gray text-base font-semibold leading-[20px] text-left tracking-widest hover:text-oxford-blue active:text-oxford-blue mt-2">
            <Link href={`/profile`}>My Profile</Link>
          </li>
          <li className="text-custom-gray text-base font-semibold leading-[20px] text-left tracking-widest hover:text-oxford-blue active:text-oxford-blue mt-2">
            <button
              onClick={() => {
                logOut();
              }}
              className="flex flex-row gap-2"
            >
              Logout
              <Image src="/logout-icon.svg" alt="" width={20} height={20} />
            </button>
          </li>
        </ul>
      </div>
    );
  }
  return (
    <div
      className="flex flex-col mt-9 md:mt-[41px] md:ml-4 absolute top-0 right-16 md:right-20"
      ref={ref}
    >
      <button
        onClick={() => {
          openUser();
        }}
        className="w-12 h-12 md:w-[63px] md:h-[63px]"
      >
        <Image src="/user-icon.svg" alt="" width={45} height={45} />
      </button>
      <ul
        className={`bg-inherit w-[200px] flex flex-row justify-center items-center md:bg-white absolute mt-12 md:top-[40px] border gap-1 right-0 bg-sky-100 ${
          open ? "block" : "hidden"
        }`}
      >
        <li className="md:mt-2 text-custom-gray text-base font-semibold leading-[20px] text-left tracking-widest hover:text-oxford-blue active:text-oxford-blue">
          <Link href={`/login?next=${pathName}`}>Login / </Link>
        </li>
        <li className="md:mt-2 text-custom-gray text-base font-semibold leading-[20px] text-left tracking-widest hover:text-oxford-blue active:text-oxford-blue">
          <Link href="/register">Register </Link>
        </li>
      </ul>
    </div>
  );
}
