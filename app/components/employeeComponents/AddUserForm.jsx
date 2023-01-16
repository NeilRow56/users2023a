"use client";

import React, { useReducer } from "react";
import { BiPlus } from "react-icons/bi";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function AddUserForm() {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length == 0)
      return console.log("No form data supplied");
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="grid w-4/6 gap-4 lg:grid-cols-2">
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="firstname"
          className="w-full rounded-md border px-5 py-3 focus:outline-none"
          placeholder="FirstName"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="lastname"
          className="w-full rounded-md border px-5 py-3 focus:outline-none"
          placeholder="LastName"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="email"
          className="w-full rounded-md border px-5 py-3 focus:outline-none"
          placeholder="Email"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="salary"
          className="w-full rounded-md border px-5 py-3 focus:outline-none"
          placeholder="Salary"
        />
      </div>
      <div className="input-type">
        <input
          type="date"
          onChange={setFormData}
          name="date"
          className="rounded-md border px-5 py-3 focus:outline-none"
          placeholder="Salary"
        />
      </div>

      <div className="flex items-center gap-10">
        <div className="form-check">
          <input
            type="radio"
            onChange={setFormData}
            value="Active"
            id="radioDefault1"
            name="status"
            className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer  appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-green-500 checked:bg-green-500 focus:outline-none"
          />
          <label htmlFor="radioDefault1" className="tet-gray-800 inline-block">
            Active
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            onChange={setFormData}
            value="Inactive"
            id="radioDefault2"
            name="status"
            className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer  appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-green-500 checked:bg-green-500 focus:outline-none"
          />
          <label htmlFor="radioDefault2" className="tet-gray-800 inline-block">
            Inactive
          </label>
        </div>
      </div>

      <button className="text-md mb-2 flex w-2/6 justify-center rounded-md border bg-green-500 px-4 py-2 text-white hover:border-green-500 hover:bg-gray-50 hover:text-green-500">
        Add
        <span className="px-1">
          <BiPlus size={24} />
        </span>
      </button>
    </form>
  );
}
