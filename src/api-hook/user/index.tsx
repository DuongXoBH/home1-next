import { LoginFormInputs } from "@/components/pages/user/login";
import {  deleteModal } from "@/stage-manage/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { toast } from "react-toastify";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export function useFetchUsersApi() {
  const { data, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      console.log(apiUrl);
      const response = await fetch(` ${apiUrl} `);
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
      const response = await fetch(`${apiUrl}${id}`);
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
  const response = await fetch(`${apiUrl}${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await response.json();
    if (!response.ok) {
    throw new Error(result.message || "Fail");
  }
  return result;

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
      toast.success("User's information has changed!");
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
  const response = await fetch(`${apiUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message)
  }
  return result;

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
      toast.success("Success");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return mutation;
}

async function deleteUser(id: string) {
  const response = await fetch(`${apiUrl}${id}`, {
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

async function login(data :LoginFormInputs){
  const response = await fetch(`${apiUrl}login`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data),
  });
  const result = await response.json();
  if(!response.ok){
    throw new Error(result.message);
  }
  return result;
  
}

export function useLogin(){
  const mutation = useMutation({
    mutationFn: ({data}:{data:LoginFormInputs}) => login(data),
    onSuccess: () =>{
    },
    onError: () => {
      toast.error("Error: Invalid email or password. Please try again with the correct credentials.")
    }
  })
  return mutation;
}

