import { FolderIcon, ArrowDownTrayIcon, BookOpenIcon, UserIcon } from "@heroicons/react/24/solid";
import React from "react";
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            About <UserIcon className="w-4 h-4 ml-1" />
          </Link>
          <Link href= {"/Projects"} className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Projects <FolderIcon className="w-4 h-4 ml-1" />
          </Link>
          {/* <Link href={"/Blog"} className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Blog <BookOpenIcon className="w-4 h-4 ml-1" />
          </Link> */}
        </nav>
        <Link
          href="/Brian_Dang_Resume.pdf"
          className="inline-flex items-center bg-sky-500/75  border-0 py-1 px-3 focus:outline-none hover:bg-sky-500/50  rounded text-base mt-4 md:mt-0">
            Resume
          <ArrowDownTrayIcon className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </header>
  );
}