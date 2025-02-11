"use client"
import LoginPage from "@/components/pages/user/login";
import { Suspense } from "react";


export default function Login(){
  return (
    <Suspense >
      <LoginPage/>
    </Suspense >
  )
}