import {  deleteModal } from "@/store/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { toast } from "react-toastify";

export function useFetchUsersApi() {
  const { data, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch(`https://home1-backend.onrender.com/`);
      const result = await response.json();
      return result;
    },
  });
  return { data, refetch };
}

export function useFetchUserbyIdApi(id: string) {
  const { data } = useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      const response = await fetch(`https://home1-backend.onrender.com/${id}`);
      const result = await response.json();
      return result;
    },
  });
  return data;
}

async function updateUser(
  id: string,
  data: {
    email: string;
    firstName: string;
    lastName: string;
  }
) {
  const response = await fetch(`https://home1-backend.onrender.com/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Fail updated");
  }
}

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: {
        email: string;
        firstName: string;
        lastName: string;
      };
    }) => updateUser(id, data),
    onSuccess: () => {
      toast.success("User's information is changed!");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return mutation;
}

async function addUser(data: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) {
  const response = await fetch(`https://home1-backend.onrender.com/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    toast.error("Fail");
  }
}

export function useAddUser() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({
      data,
    }: {
      data: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
      };
    }) => addUser(data),
    onSuccess: () => {
      toast.success("Success.Redirect to User Page");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return mutation;
}

async function deleteUser(id: string) {
  const response = await fetch(`https://home1-backend.onrender.com/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    toast.error("Fail");
  }
}

export function useDeleteUser(){
  const [, setOpen] = useAtom(deleteModal);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({id}:{id:string}) => deleteUser(id),
    onSuccess: () => {
      toast.success("User deleted successfully");
      queryClient.invalidateQueries({queryKey : ["users"]});
      setOpen(false);
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });
  return mutation;
}
