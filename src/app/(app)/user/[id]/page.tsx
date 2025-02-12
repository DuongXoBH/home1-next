"use client"

import Profile from "@/components/pages/user/profile/profile";
import { use } from "react";

export default function IdUser( { params }: { params: Promise<{ id: string }>} ) {
    const { id } = use(params);
    return(
        <>
            <Profile id={id}/>
        </>
    )
}