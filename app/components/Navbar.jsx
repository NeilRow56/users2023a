"use client";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";

import { useSession } from "next-auth/react";
import Image from "next/image";
import rmdblogo from "../../public/rmdb-logo.svg";
import rmdblogosmall from "../../public/rmdb-logo-small.svg";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <header className=" sticky top-0 z-40 flex bg-zinc-900 py-2 px-32">
      <nav className="flex w-full justify-between">
        {session?.user ? (
          <ul className="mt-2  flex items-center gap-8">
            <li>
              <Link href="/">
                <div className="flex cursor-pointer items-center">
                  <div className="invisible md:visible">
                    <Image src={rmdblogo} alt="rmdb logo" priority />
                  </div>
                  <div className="absolute  pt-2 md:invisible">
                    <Image
                      src={rmdblogosmall}
                      width={25}
                      height={25}
                      alt="rmdb logo small"
                    />
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-medium uppercase text-stone-50 hover:text-red-600"
                href="/signin"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-medium uppercase text-stone-50 hover:text-red-600"
                href="/users"
              >
                Users
              </Link>
            </li>

            <li>
              <Link
                className="text-sm font-medium uppercase text-stone-50 hover:text-red-600"
                href="/employees"
              >
                Employees
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-medium uppercase text-stone-50 hover:text-red-600"
                href="/movies"
              >
                Movies
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="flex  items-center gap-8">
            <li>
              <Link
                className="text-sm font-medium uppercase text-stone-50 hover:text-red-900"
                href="/signin"
              >
                Login
              </Link>
            </li>
          </ul>
        )}
        <div className="h-8 w-24 items-center">
          <DropdownMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
