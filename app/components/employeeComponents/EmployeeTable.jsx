/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { getEmployees } from "../../../lib/helperE";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
// import { useSelector } from "react-redux";
import { useQuery } from "react-query";

export default async function Table() {
  // let { employees } = await getEmployees();
  const { isLoading, isError, data, error } = useQuery(
    "employees",
    getEmployees
  );

  if (isLoading) return <div>Employee is Loading...</div>;
  if (isError) return <div>Got Error {error}</div>;
  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800">
          <th className="px-16 py-2">
            <span className="text-gray-200">Name</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Email</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Salary</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Birthday</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Status</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        {data.map((employee, i) => (
          <Tr {...employee} key={i} />
        ))}
      </tbody>
    </table>
  );
}

function Tr({ _id, name, avatar, email, salary, date, status }) {
  return (
    <tr className="items-center bg-gray-50 text-center">
      <td className="flex flex-row items-center px-16 py-2 ">
        <img
          src={avatar || "https://randomuser.me/api/portraits/men/5.jpg"}
          alt=""
          width={32}
          height={32}
          className="rounded-full object-cover"
        />
        <span className="ml-2  text-center font-semibold">
          {name || "unknown"}
        </span>
      </td>
      <td className="px-16 py-2">
        <span>{email || "unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <span>{salary || "unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <span>{date || "unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <button className="cursor">
          <span
            className={`${
              status == "Active" ? "bg-green-500" : "bg-rose-500"
            } rounded-full px-5 py-1 text-white`}
          >
            {status || "unknown"}
          </span>
        </button>
      </td>
      <td className="px-16   ">
        <button className="cursor">
          <BiEdit size={25} color={"rgb(34,197,94)"}></BiEdit>
        </button>
        <button className="cursor">
          <BiTrashAlt size={25} color={"rgb(244,63,94)"}></BiTrashAlt>
        </button>
      </td>
    </tr>
  );
}
