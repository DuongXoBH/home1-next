"use client"
import LoginPage from "@/components/pages/user/login";
import { Suspense } from "react";


export default function Login(){
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <LoginPage/>
    </Suspense >
  )
}