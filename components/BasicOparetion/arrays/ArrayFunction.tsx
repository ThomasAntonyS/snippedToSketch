"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function ArrayFunction() {
  const [createNumber, setCreateNumber] = useState(5)
  const [defaultText, setDefaultText] = useState(true);
  const container = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: container });
  const [noOfArrays, setNoOfArrays] = useState<Number[]>([]);

  const createInputhander= (event:any)=>{
    event.preventDefault();
    setCreateNumber(event.currentTarget.value);
  }

  const generateDefaultArray = () => {
    const newNumbers = [];
    while (newNumbers.length < createNumber) {
      let randomNum = Math.round(Math.random() * 10);
      if (!noOfArrays.includes(randomNum)) {
        newNumbers.push(randomNum);
      }
    }
    setNoOfArrays(newNumbers);
    setDefaultText(false);
  };

  const appendOneElement = () => {
    let randomNum = Math.round(Math.random() * 10);
    setNoOfArrays((prev) => [...prev, randomNum]);
    setDefaultText(false);
    gsap.from(".box", { y: -50, stagger: 0.1, scale: 0, visibility: 0 });
  };

  const onClickGood = contextSafe(() => {
    generateDefaultArray();
    setTimeout(() => {
      gsap.from(".box", { y: -50, stagger: 0.1, scale: 0, visibility: 0 });
    }, 10);
  });
  return (
    <>
      <section
        ref={container}
        className="mx-10 flex grid-rows-2 flex-col items-center justify-center bg-white"
      >
        {defaultText && (
          <span className="text-2xl font-medium">
            Please Click Operation to view the Arrays
          </span>
        )}
        <div className="flex border-y-2 border-black">
          {noOfArrays.map((ele, i) => (
            <div className="border-x-2 border-black p-1" key={i}>
              <div className="box flex h-14 w-14 items-center justify-center rounded-lg bg-rose-500 text-xl font-medium drop-shadow-lg">
                {ele.toString()}
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-14">
          {noOfArrays.map((ele, i) => (
            <div key={i} className="text-lg font-medium">
              {i}
            </div>
          ))}
        </div>
      </section>
      <section className="bg-orange-300 p-2">
        <div className="flex justify-evenly">
          <div className="flex flex-col items-center gap-3">
            <Button className="w-[5rem] hover:scale-100" onClick={onClickGood}>
              Create
            </Button>
            <span className="w-[60%] text-md font-medium">To Create An Array Of Length <input className="w-5 p-1" onChange={createInputhander} value={createNumber}/> Numbers</span>
          </div>
          <Button className="w-[5rem]" onClick={appendOneElement}>
            Append
          </Button>
          <Button className="w-[5rem]">Insert</Button>
          <Button className="w-[5rem]">Remove</Button>
        </div>
      </section>
    </>
  );
}
