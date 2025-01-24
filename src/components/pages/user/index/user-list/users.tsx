"use client";

import { FetchUsersApi } from "@/api";
import { UserInit } from "@/store";
import { useAtom, useAtomValue } from "jotai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {  useEffect, useState } from "react";
import { toast } from "react-toastify";
import EditModal from "../component/edit-modal";
import { deleteModal, editModal } from "@/store/user";
import DeleteModal from "../component/delete-modal";

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export default function UsersList() {
  const user = useAtomValue(UserInit);
  const route = useRouter();
  const [isDeleteModal, setIsDeleteModal] = useAtom(deleteModal);
  const [isEditModal, setIsEditModal] = useAtom(editModal);
  const [selectedUserId,setSelectedUserId] = useState<string>("")
  // Fetch users
  const users = FetchUsersApi();
  
  // Handle first render when user is null
  useEffect(() => {
    const checkTimeout = setTimeout(() => {
      if (user === null) {
        toast.error("You need login to see this.");
        const timeout = setTimeout(() => {
          route.push("/login");
        }, 5000);

        return () => clearTimeout(timeout);
      }
    }, 1000);
    return () => clearTimeout(checkTimeout);
  }, [user, route]);
  // funtion to open delete modal
  const onDelete = (id: string) => {
    setIsDeleteModal(!isDeleteModal);
    console.log(id)
  };
  // funtion to open edit modal
  const onEdit = (id?: string) => {
    if (id) {
      console.log("Edit " + id);
      setIsEditModal(!isEditModal);
      setSelectedUserId(id);
      return;
    }
    // TODO: validation form for add new
    // Call api create
    // call api reload page
    console.log("Add new user");
  };
  // Avoid rendering UI if user is null
  if (user === null) {
    return null;
  }
  // TOdo: create table component
  // Add modal
  return (
    <div className="space-y-4 p-6 container">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">User List</h1>
        <div>
          <button
            onClick={() => onEdit()}
            className="w-40 h-10 border-2 rounded-xl bg-custom-pink"
          >
            Add User
          </button>
        </div>
      </div>
      <table className="table-auto border-collapse border border-gray-300 w-full text-sm text-left">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-300">
            <th className="px-4 py-2">Id</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
          {users?.map((user: IUser) => (
            <tr key={user._id} className="border-b border-gray-200">
              <td className="px-4 py-2">{user._id}</td>
              <td className="px-4 py-2">{`${user.firstName} ${user.lastName}`}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2 flex gap-5">
                <Link href={`/user/${user._id}/update`}>
                  <button className="w-20 h-10 border-2 rounded-xl">
                    Update
                  </button>
                </Link>
                <Link href={`/user/${user._id}`}>
                  <button className="w-20 h-10 border-2 rounded-xl">
                    Profile
                  </button>
                </Link>
                <div>
                  <button
                    onClick={() => onDelete(user._id)}
                    className="w-20 h-10 border-2 rounded-xl"
                  >
                    Delete
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => onEdit(user._id)}
                    className="w-20 h-10 border-2 rounded-xl"
                  >
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </thead>
        <tbody></tbody>
      </table>

      <nav
        aria-label="Page navigation example"
        className="mt-10 flex justify-center"
      >
        <ul className="flex items-center -space-x-px h-8 text-sm">
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    {/* Modal */}
        <EditModal userId={selectedUserId}/>
        <DeleteModal/>
    </div>
  );
}
