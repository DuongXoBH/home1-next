"use client";

import { UserInit } from "@/store";
import { useAtomValue } from "jotai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<IUser[]>([]);
  const user = useAtomValue(UserInit);
  const route = useRouter();

  // Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:5000");
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  // Handle first render when user is null
  useEffect(() => {
    const checkTimeout = setTimeout(() =>{
      if (user === null) {
        toast.error("You need login to see this.");
        const timeout = setTimeout(() => {
          route.push("/login");
        }, 5000);
  
        return () => clearTimeout(timeout);
      }
    },1000)
    return () => clearTimeout(checkTimeout);
  }, [user, route]);


  // Avoid rendering UI if user is null
  if (user === null) {
    return null;
  }

  return (
    <div className="space-y-4 p-6 container">
      <h1 className="text-2xl font-bold">User List</h1>
      <table className="table-auto border-collapse border border-gray-300 w-full text-sm text-left">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-300">
            <th className="px-4 py-2">Id</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
          {users.map((user,index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="px-4 py-2">{user._id}</td>
              <td className="px-4 py-2">{`${user.firstName} ${user.lastName}`}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">
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
              </td>
            </tr>
          ))}
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}
