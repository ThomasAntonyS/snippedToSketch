import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";
import { GoArrowUpRight } from "react-icons/go";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between overflow-hidden bg-black text-white">
      <Navbar />
      <p className="text-5xl font-medium mb-[20rem]">Snippet2Sketch</p>
      <div className="flex w-full bg-white text-3xl font-thin text-black opacity-[0.3]">
        <Link
          href="/arrays"
          className="flex h-full w-full items-center justify-around border-[1px] border-black py-5"
        >
          <p>ARRAY</p> <GoArrowUpRight size={"3rem"} />
        </Link>
        <Link
          href="/stacks"
          className="flex h-full w-full items-center justify-around border-[1px] border-black py-5"
        >
          <p>STACK</p> <GoArrowUpRight size={"3rem"} />
        </Link>
        <Link
          href="#"
          className="flex h-full w-full items-center justify-around border-[1px] border-black py-5"
        >
          <p>QUEUE</p> <GoArrowUpRight size={"3rem"} />
        </Link>
        <Link
          href="/linkedList"
          className="flex h-full w-full items-center justify-around border-[1px] border-black py-5"
        >
          <p>LINKED LIST</p> <GoArrowUpRight size={"3rem"} />
        </Link>
      </div>
    </section>
  );
}
