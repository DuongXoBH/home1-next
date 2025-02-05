"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as yup from "yup";
import Image from "next/image";
import { useSetAtom } from "jotai";
import { UserInit } from "@/store";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
export interface LoginFormInputs {
  email: string;
  password: string;
}
const schema  = yup.object().shape({
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({ resolver: yupResolver(schema) });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const route = useRouter();
  const setUser = useSetAtom(UserInit);
  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch(`https://home1-backend.onrender.com/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) {
        toast.error(result.message);
        setIsSubmitting(false);
        return;
      }
      setUser(result.data);
        toast.success("Login successful!");
        route.push("/");
    } catch (error) {
      console.log("🚀 ~ constonSubmit:SubmitHandler<LoginFormInputs>= ~ error:", error)
      toast.error("Failed. Try again");
    }
    setIsSubmitting(false);
  };
  return (
    <div className="w-full min-h-screen bg-indigo-400 flex justify-center items-center">
      <div className="w-[60%] bg-white flex flex-col md:flex-row">
        <div className="overflow-hidden flex justify-center">
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
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
    
  );
}
