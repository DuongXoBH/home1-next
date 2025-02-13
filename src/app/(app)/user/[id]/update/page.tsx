"use client";
import Image from "next/image";
import { use, useEffect } from "react";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useFetchUserbyIdApi, useUpdateUser, } from "@/api-hook/user";
import { updateSchema } from "@/hook-form-schema/user";

const schema = updateSchema;

export interface UpdateFormInput {
  firstName: string;
  lastName: string;
  email: string;
}
export default function UserUpdate({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  // get information of user
  const userInfor = useFetchUserbyIdApi(id);

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

  //define user variable in localStorage
  const route = useRouter();
  //
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateMutation = useUpdateUser();


  // update information of user
  const onSubmit: SubmitHandler<UpdateFormInput> = async (data) => {
    if(isSubmitting) return;
    setIsSubmitting(true);
    await updateMutation.mutate({id,data});
    setIsSubmitting(false);
    route.push('/profile');
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
