"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from "@headlessui/react";
import { useAtom } from "jotai";
import { editModal } from "@/stage-manage/user";
import { updateSchema } from "@/constants/pages/user/form-validate";
import { SubmitHandler, useForm } from "react-hook-form";
import { UpdateFormInput } from "@/app/(app)/user/[id]/update/page";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFetchUserbyIdApi, useUpdateUser } from "@/api-hook/user";
import { useEffect, useState } from "react";

export default function EditModal(props: { userId: string }) {
  const [open, setOpen] = useAtom(editModal);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const users = useAtomValue(usersAtom);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UpdateFormInput>({
    resolver: yupResolver(updateSchema),
  });
  const userInfor = useFetchUserbyIdApi(props.userId);

  useEffect(() => {
    reset(userInfor);
  }, [userInfor,reset]);

  const updateMutation = useUpdateUser();

  const onSubmit: SubmitHandler<UpdateFormInput> = async (data) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    
    const id = props.userId;

    await updateMutation.mutateAsync({id,data});
    setOpen(false);
    setIsSubmitting(false);
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
      <div className="bg-white px-6 py-5">
        <h1 className="text-2xl font-bold text-oxford-blue text-center">
          UPDATE FORM
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div>
            <label htmlFor="email" className="block font-medium">Email</label>
            <input
              type="text"
              id="email"
              {...register("email")}
              className="w-full p-2 border rounded"
              readOnly
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="firstName" className="block font-medium">First Name</label>
            <input
              type="text"
              id="firstName"
              {...register("firstName")}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block font-medium">Last Name</label>
            <input
              type="text"
              id="lastName"
              {...register("lastName")}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="flex flex-wrap justify-end gap-3">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="w-full sm:w-1/4 py-2 px-4 rounded border"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full sm:w-1/4 bg-custom-pink text-white py-2 px-4 rounded hover:bg-yellow-600"
              disabled={isSubmitting}
            >
              Submit
              {updateMutation.isPending && <p>Updating user...</p>}
            </button>
          </div>
        </form>
      </div>
    </DialogPanel>
  </div>
</Dialog>

  );
}
