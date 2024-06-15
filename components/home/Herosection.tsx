"use client"
import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";
import { GoArrowUpRight } from "react-icons/go";
import Cube from "../objects/Cube";
import BigCube from "../objects/BigCube";
import MedCube from "../objects/MedCube";

export default function Hero() {

  const linkButtonClass =
    "flex h-full w-full items-center justify-around border-[1px] border-black py-2 bg-white opacity-70 hover:opacity-90 active:scale-[0.9] duration-200 ";
  return (
    <section className="flex min-h-screen flex-col items-center overflow-hidden bg-black text-white">
      <Navbar />
      <p className="text-5xl font-medium">Snippet2Sketch</p>
      <div className="relative h-[77.5vh] w-full overflow-hidden ">
      
      <Cube
          height={"h-[500px]"}
          barwidth={"w-[70px]"}
          topbarwidth={"w-[80px]"}
          topbarheight={"h-[70px]"}
          wtop=""
          bottom="bottom-[24rem]"
          left="left-[2%]"
          right=""
        />
        <MedCube
          height={"h-[500px]"}
          barwidth={"w-[90px]"}
          topbarwidth={"w-[104px]"}
          topbarheight={"h-[90px]"}
          wtop=""
          bottom="bottom-[19rem]"
          left="left-[-4%]"
          right=""
        />
        <BigCube
          height={"h-[500px]"}
          barwidth={"w-[120px]"}
          topbarwidth={"w-[138px]"}
          topbarheight={"h-[120px]"}
          wtop=""
          bottom="bottom-[24.5rem]"
          left="left-[13%]"
          right=""
        />
        <MedCube
          height={"h-[500px]"}
          barwidth={"w-[90px]"}
          topbarwidth={"w-[104px]"}
          topbarheight={"h-[90px]"}
          wtop=""
          bottom="bottom-[21rem]"
          left="left-[30%]"
          right=""
        />
        <Cube
          height={"h-[300px]"}
          barwidth={"w-[70px]"}
          topbarwidth={"w-[80px]"}
          topbarheight={"h-[70px]"}
          wtop=""
          bottom="bottom-[17rem]"
          left="left-[9%]"
          right=""
        />
        <MedCube
          height={"h-[300px]"}
          barwidth={"w-[90px]"}
          topbarwidth={"w-[104px]"}
          topbarheight={"h-[90px]"}
          wtop=""
          bottom="bottom-[11rem]"
          left="left-[1%]"
          right=""
        />
        <Cube
          height={"h-[300px]"}
          barwidth={"w-[70px]"}
          topbarwidth={"w-[80px]"}
          topbarheight={"h-[70px]"}
          wtop=""
          bottom="bottom-[15rem]"
          left="left-[19.5%]"
          right=""
        />
        <Cube
          height={"h-[300px]"}
          barwidth={"w-[70px]"}
          topbarwidth={"w-[80px]"}
          topbarheight={"h-[70px]"}
          wtop=""
          bottom="bottom-[9rem]"
          left="left-[10%]"
          right=""
        />
        <Cube
          height={"h-[200px]"}
          barwidth={"w-[70px]"}
          topbarwidth={"w-[80px]"}
          topbarheight={"h-[70px]"}
          wtop=""
          bottom="bottom-[13rem]"
          left="left-[29%]"
          right=""
        />
        <MedCube
          height={"h-[500px]"}
          barwidth={"w-[90px]"}
          topbarwidth={"w-[104px]"}
          topbarheight={"h-[90px]"}
          wtop=""
          bottom="bottom-[26rem]"
          left=""
          right="right-[32%]"
        />
        <MedCube
          height={"h-[500px]"}
          barwidth={"w-[90px]"}
          topbarwidth={"w-[104px]"}
          topbarheight={"h-[90px]"}
          wtop=""
          bottom="bottom-[22rem]"
          left="left-[53%]"
          right=""
        />
        <MedCube
          height={"h-[300px]"}
          barwidth={"w-[90px]"}
          topbarwidth={"w-[104px]"}
          topbarheight={"h-[90px]"}
          wtop=""
          bottom="bottom-[19rem]"
          left="left-[41.5%]"
          right=""
        />

        <BigCube
          height={"h-[300px]"}
          barwidth={"w-[120px]"}
          topbarwidth={"w-[138px]"}
          topbarheight={"h-[120px]"}
          wtop=""
          bottom="bottom-[9rem]"
          left="left-[44.2%]"
          right=""
        />

        <Cube
          height={"h-[400px]"}
          barwidth={"w-[70px]"}
          topbarwidth={"w-[80px]"}
          topbarheight={"h-[70px]"}
          wtop=""
          bottom="bottom-[20rem]"
          left=""
          right="right-[30.5rem]"
        />
        <Cube
          height={"h-[300px]"}
          barwidth={"w-[70px]"}
          topbarwidth={"w-[80px]"}
          topbarheight={"h-[70px]"}
          wtop=""
          bottom="bottom-[12rem]"
          left=""
          right="right-[33rem]"
        />
        <BigCube
          height={"h-[300px]"}
          barwidth={"w-[120px]"}
          topbarwidth={"w-[138px]"}
          topbarheight={"h-[120px]"}
          wtop=""
          bottom="bottom-[25rem]"
          left=""
          right="right-[4rem]"
        />
        <BigCube
          height={"h-[300px]"}
          barwidth={"w-[120px]"}
          topbarwidth={"w-[138px]"}
          topbarheight={"h-[120px]"}
          wtop=""
          bottom="bottom-[21.5rem]"
          left=""
          right="right-[17rem]"
        />

        <Cube
          height={"h-[300px]"}
          barwidth={"w-[70px]"}
          topbarwidth={"w-[80px]"}
          topbarheight={"h-[70px]"}
          wtop=""
          bottom="bottom-[15rem]"
          left=""
          right="right-[24.5rem]"
        />
        
        <BigCube
          height={"h-[300px]"}
          barwidth={"w-[120px]"}
          topbarwidth={"w-[138px]"}
          topbarheight={"h-[120px]"}
          wtop=""
          bottom="bottom-[14.5rem]"
          left=""
          right="right-[8rem]"
        />
        
        <Cube
          height={"h-[200px]"}
          barwidth={"w-[70px]"}
          topbarwidth={"w-[80px]"}
          topbarheight={"h-[70px]"}
          wtop=""
          bottom="bottom-[9rem]"
          left=""
          right="right-[18rem]"
        />
        
      <div className="absolute bottom-0 flex w-full text-3xl font-thin text-black">
        <Link href="/arrays" className={linkButtonClass}>
          <p>Array</p> <GoArrowUpRight size={"3rem"} className="ml-24" />
        </Link>
        <Link href="/stacks" className={linkButtonClass}>
          <p>Stack</p> <GoArrowUpRight size={"3rem"} className="ml-24" />
        </Link>
        <Link href="#" className={linkButtonClass}>
          <p>Queue</p> <GoArrowUpRight size={"3rem"} className="ml-24" />
        </Link>
        <Link href="/linkedList" className={linkButtonClass}>
          <p>Linked List</p> <GoArrowUpRight size={"3rem"} className="ml-24" />
        </Link>
      </div>
      </div>
    </section>
  );
}
