/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import data from "../../../database/data.json";

export default function Table() {
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
        {data.map((object, index) => (
          <Tr {...object} key={index} />
        ))}
      </tbody>
    </table>
  );
}

function Tr({ id, name, avatar, email, salary, date, status }) {
  return (
    <tr className="items-center bg-gray-50 text-center">
      <td className="flex flex-row items-center px-16 py-2 ">
        <img src={avatar || "#"} alt="" width={24} height={24} />
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
          <span className="rounded-full bg-green-500 px-5 py-1 text-white">
            {status || "unknown"}
          </span>
        </button>
      </td>
      <td className="px-16   ">
        <div className="flex justify-around gap-5">
          <button className="cursor">
            <BiEdit size={25} color={"rgb(34,197,94)"}></BiEdit>
          </button>
          <button className="cursor">
            <BiTrashAlt size={25} color={"rgb(244,63,94)"}></BiTrashAlt>
          </button>
        </div>
      </td>
    </tr>
  );
}
