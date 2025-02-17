"use client"

import { UserInit } from "@/state-manage/user-storage";
import { useAtomValue } from "jotai";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectRoute({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const router = useRouter();
    const user = useAtomValue(UserInit)
    useEffect(() => {
    setTimeout(()=>{
        if (user) {
            router.replace('/')
        }
    },500)
  }, [router, user]);

  return (
    <>
      {children}
    </>
  );
}
