import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="Hero_Section bg-black text-white">
      <div className="Navbar flex h-max border-2 border-green-400">
        <Link
          href="#"
          id="navigation_links"
          className="mx-7 my-3 px-2 py-1 font-bold"
        >
          Home
        </Link>
        <Link
          href="#"
          id="navigation_links"
          className="mx-7 my-3 px-2 py-1 font-bold"
        >
          Sketch
        </Link>
        <Link
          href="#"
          id="navigation_links"
          className="mx-7 my-3 rounded border-2 border-green-400 bg-green-400 px-8 py-1 font-bold"
        >
          About Us
        </Link>
      </div>

      <p className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold">
        Snippet2Sketch
      </p>

      <Navbar />
    </section>
  );
}
