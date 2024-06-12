import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ------------------------------- Hero Section  ------------------------------- */}
      <div className="Hero_Section bg-black text-white">
        <div className="Navbar flex h-max border-2 border-green-400">
          <Link href='#' id="navigation_links" className=" my-3 mx-7 font-bold px-2 py-1">Home</Link>
          <Link href='#' id="navigation_links" className=" my-3 mx-7 font-bold px-2 py-1">Sketch</Link>
          <Link href='#' id="navigation_links" className=" my-3 mx-7 font-bold px-8 border-2 border-green-400 rounded py-1 bg-green-400">About Us</Link>
        </div>

        <p className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-6xl">Snippet2Sketch</p>

        <div className="DataStructure_Navigator absolute bottom-0 flex justify-evenly items-center text-black">
          <Link href='#' id="DataStructure_links" >ARRAY</Link>
          <Link href='#' id="DataStructure_links">STACK</Link>
          <Link href='#' id="DataStructure_links">QUEUE</Link>
          <Link href='#' id="DataStructure_links">LINKED LIST</Link>
        </div>
      </div>


      {/* ------------------------------- AboutUs Section  ------------------------------- */}
      <div className="AboutUs_Section">

      </div>

      {/* ------------------------------- Visualize Section  ------------------------------- */}
      <div className="Visualize_Section">

      </div>
    </>
  );
}
