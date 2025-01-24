"use client";
import Image from "next/image";
import { use, useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { atom, useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { UserInit } from "@/store";
import { FetchUserbyIdApi } from "@/api";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9.-_]+@gmail\.com$/,
      'Email must be finish by "@gmail.com" .Enable include uppercase, lowercase, number and special character '
    ),
});
// interface IUser {
//   _id: string;
//   firstName: string;
//   lastName: string;
//   email: string;
// }
export interface UpdateFormInput {
  firstName: string;
  lastName: string;
  email: string;
}
const messageAtom = atom("");

export default function UserUpdate({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  // get information of user
  const userInfor = FetchUserbyIdApi(id);

  // define UpdateForm
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UpdateFormInput>({
    resolver: yupResolver(schema),
  });

  // Update defaultValue when call Api
  useEffect(() => {
    reset(userInfor);
  }, [userInfor,reset]);

  //define message variable for store toast notification
  const [message, setMessage] = useAtom(messageAtom);
  //define user variable in localStorage
  const [user, setUser] = useAtom(UserInit);
  const route = useRouter();
  //
  const [isSubmitting, setIsSubmitting] = useState(false);
  // update information of user
  const onSubmit: SubmitHandler<UpdateFormInput> = async (data) => {
    if(isSubmitting) return;
    setIsSubmitting(true);
    const response = await fetch(`https://home1-backend.onrender.com/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (response.ok) {
      toast.success("Success.Redirect to Profile Page");
      if (id === user?._id) {
        setUser(result.data);
        route.push("/profile");
      } else {
        route.push(`/user`);
      }
    } else {
      const errorMessage = await response.json();
      setMessage(errorMessage.message || "An error occurred.");
      toast.error(message);
    }
    setIsSubmitting(false);

  };

  return (
    <div className="w-full min-h-screen flex items-center">
      <div className="w-[60%] mx-auto flex flex-row bg-white">
        <div className="flex justify-center overflow-hidden">
          <Image src="/desktop.jpg" alt="" width={1200} height={1200} />
        </div>
        <div className="w-full p-6 border rounded shadow flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-oxford-blue text-center">
            UPDATE FORM
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <div>
              <label htmlFor="email" className="block font-medium">
                Email
              </label>
              <input
                type="text"
                id="email"
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
              <label htmlFor="firstName" className="block font-medium">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                {...register("firstName")}
                className="w-full p-2 border rounded"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className="block font-medium">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                {...register("lastName")}
                className="w-full p-2 border rounded"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-custom-pink text-white py-2 px-4 rounded hover:bg-yellow-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
