"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAddUser } from "@/api-hook/user";
import { useState } from "react";

export interface ResisterFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

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
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be at least 8 characters long and include one uppercase, one lowercase, one number, and one special character"
    ),
  confirmPassword: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be at least 8 characters long and include one uppercase, one lowercase, one number, and one special character"
    )
    .oneOf([yup.ref("password")], "Mismatched passwords"),
});
export default function AddUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResisterFormInput>({ resolver: yupResolver(schema) });

  const [isSubmitting,setIsSubmitting] = useState(false);
  const route = useRouter();
  const addMutation = useAddUser();

  const onSubmit: SubmitHandler<ResisterFormInput> = async (data) => {
    if(isSubmitting) return;
    console.log("🚀 ~ constonSubmit:SubmitHandler<ResisterFormInput>= ~ isSubmitting:", isSubmitting)
    setIsSubmitting(true);
    await addMutation.mutate({data},{
      onSuccess: (data)=>{
        console.log("🚀 ~ constonSubmit:SubmitHandler<ResisterFormInput>= ~ data:", data);
        route.push("/login")
      }
    });
    setIsSubmitting(false);
  };

  return (
    <div className="w-full min-h-screen bg-pink-600 flex items-center">
      <div className="w-[60%] mx-auto flex flex-col md:flex-row bg-white">
        <div className="hidden md:flex justify-center overflow-hidden">
          <Image src="/desktop.jpg" alt="" width={1200} height={1200} />
        </div>
        <div className="w-full p-6 border rounded shadow">
          <h1 className="text-2xl font-bold text-oxford-blue text-center">
            REGISTER FORM
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <div>
              <label htmlFor="email" className="block font-medium">
                Email
              </label>
              <input
                type="text"
                id="email"
                {...register("email", { required: "Email is required" })}
                className="w-full p-2 border rounded"
                required
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
                required
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
                required
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="block font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password")}
                className="w-full p-2 border rounded"
                required
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                {...register("confirmPassword")}
                className="w-full p-2 border rounded"
                required
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-custom-pink text-white py-2 px-4 rounded hover:bg-yellow-600"
              disabled = {isSubmitting}
            >
              Submit
              {addMutation.isPending && <p>Creating user...</p>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
