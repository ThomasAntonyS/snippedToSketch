import Link from "next/link";
import array from "../public/C-Arrays.jpg";
import stack from "../public/Stack.png";
import linkedList from "../public/Linked-List.png";
import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-500">
      <section className="flex h-80 items-center justify-center bg-slate-200">
        <h1 className="text-4xl font-bold text-blue-600">
          This is Babith&apos;s website
        </h1>
      </section>
      <section className="px-5 flex gap-5">
        <div className=" h-[18rem] w-[18rem] -translate-y-20 rounded-md border-2 border-red-400 bg-slate-200 drop-shadow-xl">
          <Link href={"/arrays"}>
            <div className="">
              <Image
                src={array}
                alt="arrays"
                className="w-50 h-60 object-cover"
              />
            </div>
            <p className="text-center text-xl font-bold">Arrays</p>
          </Link>
        </div>
        <div className=" h-[18rem] w-[18rem] -translate-y-20 rounded-md border-2 border-red-400 bg-slate-200 drop-shadow-xl">
          <Link href={"/stacks"}>
            <div className="">
              <Image
                src={stack}
                alt="arrays"
                className="w-50 h-60 object-cover"
              />
            </div>
            <p className="text-center text-xl font-bold">Stacks</p>
          </Link>
        </div>
        <div className=" h-[18rem] w-[18rem] -translate-y-20 rounded-md border-2 border-red-400 bg-slate-200 drop-shadow-xl">
          <Link href={"/linkedList"}>
            <div className="">
              <Image
                src={linkedList}
                alt="arrays"
                className="w-50 h-60 object-cover"
              />
            </div>
            <p className="text-center text-xl font-bold">linkedList</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
