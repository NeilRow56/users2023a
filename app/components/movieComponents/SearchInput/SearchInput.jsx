import React, { useState, useRef } from "react";
import Image from "next/image";
import rmdblogosmall2 from "../../../../public/tmdb-logo.svg";

const TIME = 300; //ms

const SearchInput = ({ setQuery }) => {
  const [text, setText] = useState("");
  const timer = useRef();

  const handleInput = (e) => {
    const value = e.currentTarget.value;

    clearTimeout(timer.current);

    setText(value);

    timer.current = setTimeout(() => {
      setQuery(value);
    }, TIME);
  };

  return (
    <>
      <input
        className="text-md mb-2 mt-2 h-10 rounded-full bg-zinc-700 p-4 pr-14 text-white focus:border focus:border-solid focus:border-cyan-200 focus:outline-none md:w-96"
        type="text"
        placeholder="Search Movie"
        value={text}
        onChange={handleInput}
      />
      <div className="absolute right-4 top-4">
        <Image src={rmdblogosmall2} alt="tmdb-logo" />
      </div>
    </>
  );
};

export default SearchInput;
