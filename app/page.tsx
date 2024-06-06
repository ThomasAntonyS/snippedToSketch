import Link from "next/link";
import img1 from "../public/C-Arrays.jpg";
import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-500">
      <section className="flex h-80 items-center justify-center bg-slate-200">
        <h1 className="text-4xl font-bold text-blue-600">
          This is Babith&apos;s website
        </h1>
      </section>
      <section className="px-5">
        <div className="hovershadow-lg h-[18rem] w-[18rem] -translate-y-20 rounded-md border-2 border-red-400 bg-slate-200 drop-shadow-xl">
          <Link href={"/arrays"}>
            <div className="">
              <Image
                src={img1}
                alt="arrays"
                className="w-50 h-60 object-cover"
              />
            </div>
            <p className="text-center text-xl font-bold">Arrays</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
