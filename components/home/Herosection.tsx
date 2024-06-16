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
    <section className="flex min-h-screen flex-col items-center overflow-hidden bg-black text-white relative">
      <Navbar />
      <p className="text-7xl font-medium absolute left-[50%] top-[25%] translate-x-[-50%]">Snippet2Sketch</p>
      <div className="relative h-[87vh] w-full overflow-hidden ">
      
      <Cube
          height={"h-[500px]"}
          barwidth={"w-[70px]"}
          topbarwidth={"w-[80px]"}
          topbarheight={"h-[70px]"}
          wtop=""
          bottom="bottom-[24rem]"
          left="left-[5vw]"
          right=""
        />
        <MedCube
          height={"h-[500px]"}
          barwidth={"w-[90px]"}
          topbarwidth={"w-[104px]"}
          topbarheight={"h-[90px]"}
          wtop=""
          bottom="bottom-[19rem]"
          left="left-[-2vw]"
          right=""
        />
        <BigCube
          height={"h-[500px]"}
          barwidth={"w-[120px]"}
          topbarwidth={"w-[138px]"}
          topbarheight={"h-[120px]"}
          wtop=""
          bottom="bottom-[24.5rem]"
          left="left-[16vw]"
          right=""
        />
        <MedCube
          height={"h-[500px]"}
          barwidth={"w-[90px]"}
          topbarwidth={"w-[104px]"}
          topbarheight={"h-[90px]"}
          wtop=""
          bottom="bottom-[21rem]"
          left="left-[31vw]"
          right=""
        />
        <Cube
          height={"h-[300px]"}
          barwidth={"w-[70px]"}
          topbarwidth={"w-[80px]"}
          topbarheight={"h-[70px]"}
          wtop=""
          bottom="bottom-[17rem]"
          left="left-[10vw]"
          right=""
        />
        <MedCube
          height={"h-[300px]"}
          barwidth={"w-[90px]"}
          topbarwidth={"w-[104px]"}
          topbarheight={"h-[90px]"}
          wtop=""
          bottom="bottom-[11rem]"
          left="left-[2vw]"
          right=""
        />
        <Cube
          height={"h-[300px]"}
          barwidth={"w-[70px]"}
          topbarwidth={"w-[80px]"}
          topbarheight={"h-[70px]"}
          wtop=""
          bottom="bottom-[15rem]"
          left="left-[20.5vw]"
          right=""
        />
        <Cube
          height={"h-[300px]"}
          barwidth={"w-[70px]"}
          topbarwidth={"w-[80px]"}
          topbarheight={"h-[70px]"}
          wtop=""
          bottom="bottom-[9rem]"
          left="left-[11vw]"
          right=""
        />
        <Cube
          height={"h-[200px]"}
          barwidth={"w-[70px]"}
          topbarwidth={"w-[80px]"}
          topbarheight={"h-[70px]"}
          wtop=""
          bottom="bottom-[13rem]"
          left="left-[30vw]"
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
          right="right-[32vw]"
        />
        <MedCube
          height={"h-[500px]"}
          barwidth={"w-[90px]"}
          topbarwidth={"w-[104px]"}
          topbarheight={"h-[90px]"}
          wtop=""
          bottom="bottom-[22rem]"
          left="left-[52vw]"
          right=""
        />
        <MedCube
          height={"h-[300px]"}
          barwidth={"w-[90px]"}
          topbarwidth={"w-[104px]"}
          topbarheight={"h-[90px]"}
          wtop=""
          bottom="bottom-[19rem]"
          left="left-[41.5vw]"
          right=""
        />

        <BigCube
          height={"h-[300px]"}
          barwidth={"w-[120px]"}
          topbarwidth={"w-[138px]"}
          topbarheight={"h-[120px]"}
          wtop=""
          bottom="bottom-[9rem]"
          left="left-[44.2vw]"
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
          right="right-[40vw]"
        />
        <Cube
          height={"h-[300px]"}
          barwidth={"w-[70px]"}
          topbarwidth={"w-[80px]"}
          topbarheight={"h-[70px]"}
          wtop=""
          bottom="bottom-[12rem]"
          left=""
          right="right-[41vw]"
        />
        <BigCube
          height={"h-[300px]"}
          barwidth={"w-[120px]"}
          topbarwidth={"w-[138px]"}
          topbarheight={"h-[120px]"}
          wtop=""
          bottom="bottom-[25rem]"
          left=""
          right="right-[7vw]"
        />
        <BigCube
          height={"h-[300px]"}
          barwidth={"w-[120px]"}
          topbarwidth={"w-[138px]"}
          topbarheight={"h-[120px]"}
          wtop=""
          bottom="bottom-[21.5rem]"
          left=""
          right="right-[22vw]"
        />

        <Cube
          height={"h-[300px]"}
          barwidth={"w-[70px]"}
          topbarwidth={"w-[80px]"}
          topbarheight={"h-[70px]"}
          wtop=""
          bottom="bottom-[15rem]"
          left=""
          right="right-[30vw]"
        />
        
        <BigCube
          height={"h-[300px]"}
          barwidth={"w-[120px]"}
          topbarwidth={"w-[138px]"}
          topbarheight={"h-[120px]"}
          wtop=""
          bottom="bottom-[14.5rem]"
          left=""
          right="right-[10vw]"
        />
        
        <Cube
          height={"h-[200px]"}
          barwidth={"w-[70px]"}
          topbarwidth={"w-[80px]"}
          topbarheight={"h-[70px]"}
          wtop=""
          bottom="bottom-[9rem]"
          left=""
          right="right-[23vw]"
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
