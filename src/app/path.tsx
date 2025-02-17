"use client"

import { CurrentPathName } from "@/state-manage/global";
import { useSetAtom } from "jotai";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Path(){
    const pathName = usePathname();
    const setPath = useSetAtom(CurrentPathName);
    useEffect(()=>{
        console.log("🚀 ~ Current URL:", pathName);
        setPath(pathName);
    },[pathName,setPath]);
    return null;
}