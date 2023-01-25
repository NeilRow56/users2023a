"use client";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import { useSession } from "next-auth/react";
import Image from "next/image";
import rmdblogo from "../../public/rmdb-logo.svg";
import rmdblogosmall from "../../public/rmdb-logo-small.svg";

const Header = () => {
  const { data: session } = useSession();
  return (
    <header className=" sticky top-0 z-40 flex bg-zinc-900 py-4 px-32">
      <div className="w-[350px] px-6">
        <h4 className="text-2xl font-bold text-blue-700">Express Software</h4>
      </div>
      <nav className="flex w-full justify-between">
        {session?.user ? (
          <ul className="flex  items-center gap-8">
            <li>
              <Link href="/">
                <div className="flex cursor-pointer items-center">
                  <div className="invisible md:visible">
                    <Image src={rmdblogo} alt="rmdb logo" />
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
                className="text-sm font-medium uppercase text-stone-50 hover:text-red-900"
                href="/signin"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-medium uppercase text-stone-50 hover:text-red-900"
                href="/users"
              >
                Users
              </Link>
            </li>

            <li>
              <Link
                className="text-sm font-medium uppercase text-stone-50 hover:text-red-900"
                href="/employees"
              >
                Employees
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-medium uppercase text-stone-50 hover:text-red-900"
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
        <div className="h-10 w-24 bg-blue-100">
          <DropdownMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
