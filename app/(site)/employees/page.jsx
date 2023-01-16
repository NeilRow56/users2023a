"use client";

import { BiUserPlus, BiX, BiCheck } from "react-icons/bi";
import Table from "../../components/employeeComponents/Table";
import Form from "../../components/employeeComponents/Form";
import { useState } from "react";

const EmployeesPage = () => {
  const [visible, setVisible] = useState(false);

  const handler = () => {
    setVisible(!visible);
  };
  return (
    <section className="container mx-auto py-10 text-center">
      <h1 className="text-xl font-bold text-blue-700 md:text-5xl">
        Employee Management
      </h1>
      <div className="container mx-auto flex justify-between border-b py-5">
        <div className="left flex gap-3">
          <button
            onClick={handler}
            className="flex rounded-md border bg-indigo-500 px-4 py-2 text-white hover:border-indigo-500 hover:bg-gray-50 hover:text-gray-800"
          >
            Add Employee{" "}
            <span className="px-1">
              <BiUserPlus size={23}></BiUserPlus>
            </span>
          </button>
        </div>
      </div>
      {/* Collapsible Form */}
      {visible ? <Form /> : <></>}
      {/* Table */}
      <div className="container mx-auto">
        <Table />
      </div>
    </section>
  );
};

export default EmployeesPage;
