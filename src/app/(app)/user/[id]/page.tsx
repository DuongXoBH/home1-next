"use client"

import { use } from "react";

export default function IdUser( { params }: { params: Promise<{ id: string }>} ) {
    const { id } = use(params);
    return(
        <div className="container">
            {id}
        </div>
    )
}