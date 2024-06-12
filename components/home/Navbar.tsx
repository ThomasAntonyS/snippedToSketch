"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const activeClass = "rounded border-2 border-green-400 bg-green-400";
  const basicButtonClass = " mx-5 my-2 px-5 py-1 rounded-full text-base";

  
  return (
    <nav className="flex w-full justify-center py-5">
      <div className="flex h-max w-fit rounded-full border-2 border-green-400">
        <Link
          href="/"
          className={
            `${pathname === "/" ? activeClass : ""} ` + basicButtonClass
          }
        >
          Home
        </Link>
        <Link
          href="/sketch"
          className={
            `${pathname === "/sketch" ? activeClass : ""} ` + basicButtonClass
          }
        >
          Sketch
        </Link>
        <Link
          href="/aboutus"
          className={
            `${pathname === "/aboutus" ? activeClass : ""} ` + basicButtonClass
          }
        >
          About Us
        </Link>
      </div>
    </nav>
  );
}
