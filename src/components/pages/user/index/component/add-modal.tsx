"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useAtom } from "jotai";
import { addModal } from "@/stage-manage/user";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {  useState } from "react";
import { ResisterFormInput } from "../../register";
import { useAddUser } from "@/api-hook/user";

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

export default function AddModal() {
  const [open, setOpen] = useAtom(addModal);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ResisterFormInput>({ resolver: yupResolver(schema) });

  const addMutation =useAddUser();

  const onSubmit: SubmitHandler<ResisterFormInput> = async (data) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    await addMutation.mutateAsync({data});
    setIsSubmitting(false);
    reset({
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: ""
    });
    setOpen(false);
  };
  return (
<Dialog open={open} onClose={setOpen} className="relative z-10">
  <DialogBackdrop
    transition
    className="fixed inset-0 bg-gray-500/75 transition-opacity opacity-50 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
  />
  <div className="fixed inset-0 z-10 w-screen flex items-center justify-center p-4">
    <DialogPanel
      transition
      className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full sm:w-4/5 md:w-3/5 lg:w-2/5"
    >
      <div className="p-6 border rounded shadow bg-white">
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
          </div>
          <button
            type="submit"
            className="w-full bg-custom-pink text-white py-2 px-4 rounded hover:bg-yellow-600"
            disabled={isSubmitting}
          >
            Submit
            {addMutation.isPending && <p>Creating post...</p>}
          </button>
        </form>
      </div>
    </DialogPanel>
  </div>
</Dialog>

  );
}
