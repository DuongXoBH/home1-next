"use client";

import { useFetchUsersApi } from "@/api-hook/user";
import { UserInit } from "@/state-manage/user-storage";
import { useAtom, useAtomValue } from "jotai";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import EditModal from "../component/edit-modal";
import DeleteModal from "../component/delete-modal";
import AddModal from "../component/add-modal";
import {
  addModal,
  deleteModal,
  editModal,
  usersAtom,
} from "@/state-manage/users";

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export default function UsersList() {
  const user = useAtomValue(UserInit);
  const route = useRouter();
  const pathName = usePathname();
  const [users, setUsers] = useAtom(usersAtom);
  const [isDeleteModal, setIsDeleteModal] = useAtom(deleteModal);
  const [isEditModal, setIsEditModal] = useAtom(editModal);
  const [isAddModal, setIsAddModal] = useAtom(addModal);
  const [selectedUserId, setSelectedUserId] = useState<string>("");

  // Fetch users
  const userList = useFetchUsersApi().data;
  useEffect(()=>{
    setUsers(userList);
  },[userList,setUsers])

  // Handle first render when user is null
  useEffect(() => {
    const checkTimeout = setTimeout(() => {
      if (user === null) {
        toast.error("You need login to see this.");
        const timeout = setTimeout(() => {
          if (pathName) route.push(`login?next=${pathName}`);
        }, 5000);

        return () => clearTimeout(timeout);
      }
    }, 1000);
    return () => clearTimeout(checkTimeout);
  }, [user,route,pathName]);

  // funtion to open delete modal
  const onDelete = (id: string) => {
    setIsDeleteModal(!isDeleteModal);
    setSelectedUserId(id);
  };

  // funtion to open edit modal
  const onEdit = (id?: string) => {
    if (id) {
      setIsEditModal(!isEditModal);
      setSelectedUserId(id);
      return;
    }
    // open add user modal
    setIsAddModal(!isAddModal);
  };

  // Avoid rendering UI if user is null
  if (user === null) {
    return null;
  }

  return (
    <div className="p-6 container w-full md:min-h-screen">
      <div className="flex justify-between items-center min-h-14 px-5 bg-sky-600">
        <h1 className="text-2xl font-bold text-white">User Management</h1>
        <div>
          <button
            onClick={() => onEdit()}
            className="w-40 h-10 border-2 bg-white font-semibold"
          >
            Add User
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-300 w-full min-w-max text-sm text-left">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300">
              <th className="px-4 py-2">Id</th>
              <th className="px-4 py-2 text-center">Email</th>
              <th className="px-4 py-2 text-center">Name</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user: IUser) => (
              <tr key={user._id} className="border-b border-gray-200">
                <td className="px-4 py-2">{user._id}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{`${user.firstName} ${user.lastName}`}</td>
                <td className="px-4 py-2 flex flex-wrap justify-evenly sm:gap-5">

                  <Link href={`/user/${user._id}`}>
                    <button className="w-20 h-10 border-2 rounded-xl">
                      Profile
                    </button>
                  </Link>
                  <button
                    onClick={() => onEdit(user._id)}
                    className="w-20 h-10 border-2 rounded-xl"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => onDelete(user._id)}
                    className="w-20 h-10 border-2 rounded-xl"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <AddModal />
      <EditModal userId={selectedUserId} />
      <DeleteModal userId={selectedUserId} />
      {/* <img src="https://i.imgur.com/LDOO4Qs.jpg" alt="" width={200} height={100}></img> */}
    </div>
  );
}
