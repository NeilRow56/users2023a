import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchInput from "../../components/movieComponents/SearchInput/SearchInput";
import rmdblogo from "../../../public/rmdb-logo.svg";

const Header = ({ setQuery }) => (
  <div className="sticky top-0  flex h-12 w-full bg-zinc-900">
    <div className="m-auto flex h-full w-full max-w-7xl justify-center px-4 ">
      {setQuery ? (
        <div className="relative flex items-center">
          <SearchInput setQuery={setQuery} />
        </div>
      ) : null}
    </div>
  </div>
);

export default Header;
