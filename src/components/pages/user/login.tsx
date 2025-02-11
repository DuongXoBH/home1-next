"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import * as yup from "yup";
import Image from "next/image";
import { useAtom } from "jotai";
import { UserInit } from "@/stage-manage/user-storage";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLogin } from "@/api-hook/user";
export interface LoginFormInputs {
  email: string;
  password: string;
}
const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9.-_]+@gmail\.com$/,
      'Email must be finish by "@gmail.com" .Enable include uppercase, lowercase, number and special character '
    ),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be at least 8 characters long and include one uppercase, one lowercase, one number, and one special character"
    ),
});

export default function LoginPage() {
  const [user,setUser] = useAtom(UserInit);
  const [nextPath,setNextPath] = useState("/");
  const route = useRouter();
  const searchParams = useSearchParams();
useEffect(()=>{
  const nextPathURL = searchParams.get("next") ?? "/";
  setNextPath(nextPathURL);
},[searchParams])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({ resolver: yupResolver(schema) });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const loginMutation = useLogin();
  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    await loginMutation.mutate(
      { data },
      {
        onSuccess(data) {
          route.push(nextPath)
          setUser(data.data);
        return null;
        },
      }
    );
    setIsSubmitting(false);
  };
  useEffect(()=>{
    if (user) {
      toast("You have logged in");
      setIsSubmitting(true)
    }
  },[user])
  return (
    <div className="w-full min-h-screen bg-indigo-400 flex justify-center items-center">
      <div className="w-[60%] bg-white flex flex-col md:flex-row">
        <div className="overflow-hidden hidden md:flex justify-center">
          <Image src="/login-images.jpg" alt="" width={1200} height={1200} />
        </div>
        <div className="w-full p-6 border rounded shadow flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-4 text-oxford-blue">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-3">
            <div>
              <label htmlFor="email" className="block font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className="w-full p-2 border rounded"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="block font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                {...register("password")}
                className="w-full p-2 border rounded"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-lime-700 text-white py-2 px-4 rounded hover:bg-red-600 disabled:bg-slate-700"
              disabled={isSubmitting}
            >
              
              {loginMutation.isPending ? <p>Submiting....</p> : <p>Login</p>}
              
            </button>
            <button
              type="button"
              className="w-full bg-slate-700 py-2 px-4 rounded text-white hover:bg-rose-500"
              onClick={()=>{
                route.back()
              }}
            >
              Back
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
