"use client";
import { useState } from "react";
import React from "react";

import Form from "./Form";
import { BiUserPlus } from "react-icons/bi";

export default function FormHome() {
  const [visible, setVisible] = useState(false);

  const handler = () => {
    setVisible(!visible);
  };

  return (
    <section>
      <main className="py-5">
        <h1 className="py-10 text-center text-xl font-bold md:text-5xl">
          Employee Management
        </h1>

        <div className="container mx-auto flex justify-between border-b py-5">
          <div className="left flex gap-3">
            <button
              onClick={handler}
              className="hover:bg-grary-50 flex rounded-md border bg-indigo-500 px-4 py-2 text-white hover:border-indigo-500 hover:text-gray-800"
            >
              Add Employee{" "}
              <span className="px-1">
                <BiUserPlus size={23}></BiUserPlus>
              </span>
            </button>
          </div>
        </div>

        {/* collapsable form */}
        {visible ? <Form /> : <></>}

        {/* table */}
      </main>
    </section>
  );
}
