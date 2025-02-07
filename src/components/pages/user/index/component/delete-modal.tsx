"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from "@headlessui/react";
import { useAtom } from "jotai";
import { deleteModal } from "@/stage-manage/user";
import { useDeleteUser } from "@/api-hook/user";
import { useState } from "react";

export default function DeleteModal(props: { userId: string }) {
  const [open, setOpen] = useAtom(deleteModal);
  const [isSubmitting,setIsSubmitting] = useState(false);
  const deleteMutation = useDeleteUser();
  const deleteUser = async () => {
    if(isSubmitting) return;
    setIsSubmitting(true);
    const id = props.userId;
    await deleteMutation.mutateAsync({id});
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
      className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all w-full sm:w-3/5 md:w-2/5 lg:w-1/3"
    >
      <div className="bg-white px-6 py-5">
        <h3 className="text-lg font-semibold text-gray-900 text-center sm:text-left">
          Delete account
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          Are you sure you want to delete this account? All of your data will be permanently removed. This action cannot be undone.
        </p>
      </div>
      <div className="bg-gray-50 px-6 py-3 flex flex-col sm:flex-row justify-end gap-3">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="w-full sm:w-auto rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => deleteUser()}
          className="w-full sm:w-auto rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
        >
          {deleteMutation.isPending ? <p className="ml-2">Deleting User...</p> : <p>Delete</p>}
        </button>
      </div>
    </DialogPanel>
  </div>
</Dialog>

  );
}
