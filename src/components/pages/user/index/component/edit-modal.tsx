"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from "@headlessui/react";
import { useAtom } from "jotai";
import { editModal } from "@/store/user";
import { updateSchema } from "@/constants/pages/user/form-validate";
import { SubmitHandler, useForm } from "react-hook-form";
import { UpdateFormInput } from "@/app/(app)/user/[id]/update/page";
import { yupResolver } from "@hookform/resolvers/yup";
import { FetchUserbyIdApi } from "@/api";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function EditModal(props: { userId: string }) {
  const [open, setOpen] = useAtom(editModal);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UpdateFormInput>({
    resolver: yupResolver(updateSchema),
  });
  const userInfor = FetchUserbyIdApi(props.userId);
  useEffect(() => {
    reset(userInfor);
  }, [userInfor,reset]);
  const onSubmit: SubmitHandler<UpdateFormInput> = async (data) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    
    const response = await fetch(`https://home1-backend.onrender.com/${props.userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // const result = await response.json();
    if (response.ok) {
      toast.success("Success. User's information is changed ");

    } else {
      const errorMessage = await response.json();
      toast.error(errorMessage.message);
    }
    setIsSubmitting(false);
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity opacity-50 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <div className="w-full p-6 border rounded shadow flex flex-col justify-center">
                    <h1 className="text-2xl font-bold text-oxford-blue text-center">
                      UPDATE FORM
                    </h1>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-4 mt-4"
                    >
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
                        <label
                          htmlFor="firstName"
                          className="block font-medium"
                        >
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
                      <div className="flex justify-end gap-5">
                        <button
                          type="button"
                          data-autofocus
                          onClick={() => setOpen(false)}
                          className="w-1/4 py-2 px-4 rounded border"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="w-1/4 bg-custom-pink text-white py-2 px-4 rounded hover:bg-yellow-600"
                          //   disabled={isSubmitting}
                        >
                          {"Submit"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
