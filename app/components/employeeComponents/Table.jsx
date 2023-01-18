import Image from "next/image";
import React from "react";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
// import data from "../../../database/data.json";
import { getEmployees } from "../../../lib/helperE";
import { useQuery } from "react-query";
import Employees from "./Employees";

export default async function Table() {
  // const { isLoading, isError, data, error } = useQuery(
  //   "employees",
  //   getEmployees
  // );

  // if (isLoading) return <div>Employee is Loading...</div>;
  // if (isError) return <div>Got Error {error}</div>;

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
        <Employees />
      </tbody>
    </table>
  );
}
