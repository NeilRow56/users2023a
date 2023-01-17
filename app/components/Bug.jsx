import { BiCheck } from "react-icons/bi";

export default function Bug({ message }) {
  return (
    <div className="success container mx-auto">
      <div className="text-md mx-auto my-4 flex w-3/6 justify-center border border-red-200 bg-red-400 bg-opacity-5 py-2 text-center text-gray-900">
        {message} <BiCheck size={25} color={"rgb(248 113 113)"}></BiCheck>
      </div>
    </div>
  );
}
