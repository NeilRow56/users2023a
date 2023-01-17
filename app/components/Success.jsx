import React from "react";
import { BiCheck } from "react-icons/bi";

export default function Success({ message }) {
  return (
    <div className="success container mx-auto">
      <div className="text-md mx-auto my-4 flex w-3/6 justify-center border border-yellow-200 bg-yellow-400 bg-opacity-5 py-2 text-center text-gray-900">
        {message} <BiCheck size={25} color={"rgb(34,197,94)"} />
      </div>
    </div>
  );
}
