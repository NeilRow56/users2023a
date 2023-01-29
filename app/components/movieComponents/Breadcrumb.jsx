import Link from "next/link";

const Breadcrumb = () => (
  <div className="bg-zinc-800">
    <div className="m-auto flex max-w-7xl items-center p-4 text-lg text-white">
      <Link href="/movies">
        <span className="cursor-pointer duration-300 hover:opacity-80">
          Home
        </span>
      </Link>
      <span className="block px-2">|</span>
      <span className="truncate font-bold">Title</span>
    </div>
  </div>
);

export default Breadcrumb;
