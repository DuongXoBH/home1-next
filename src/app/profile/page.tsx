"use client";

import HeaderComponent from "@/components/common/header/header";
import { UserInit } from "@/state-manage/user-storage";
import { useAtomValue } from "jotai";
import Image from "next/image";
import Link from "next/link";
export default function Profile() {
  const user = useAtomValue(UserInit);
  return (
    <>
      <HeaderComponent />
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="w-[60%] bg-white flex flex-row">
          <div className="overflow-hidden flex justify-center">
            <Image src="/profile.jpeg" alt="" width={1200} height={1200} />
          </div>
          <div className="w-full p-6 border rounded shadow flex flex-col justify-center">
            <h1 className="text-2xl font-bold mb-4 text-center text-oxford-blue">
              PROFILE
            </h1>
            <div className="overflow-x-auto">
              <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-2 text-left bg-gray-100">ID</th>
                    <td className="px-4 py-2 text-center">{user?._id}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-2 text-left bg-gray-100">Name</th>
                    <td className="px-4 py-2 text-center">{`${user?.firstName} ${user?.lastName}`}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-2 text-left bg-gray-100">Email</th>
                    <td className="px-4 py-2 text-center">{user?.email}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-2 text-left bg-gray-100">Phone</th>
                    <td className="px-4 py-2 text-center"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-2 text-left bg-gray-100">Address</th>
                    <td className="px-4 py-2 text-center"></td>
                  </tr>
                </tbody>
              </table>
              <Link href={`/user/${user?._id}/update`}>
              <button
              type="submit"
              className="w-full bg-lime-700 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Edit
            </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
