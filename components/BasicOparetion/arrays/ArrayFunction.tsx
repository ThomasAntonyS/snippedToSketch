"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const boxClassVariable =
  "flex h-14 w-14 items-center justify-center rounded-lg bg-rose-500 text-xl font-medium drop-shadow-lg ";

export default function ArrayFunction() {
  const [createNumber, setCreateNumber] = useState(5);
  const [appendNumber, setAppendNumber] = useState(6);
  const [defaultText, setDefaultText] = useState(true);
  const container = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: container });
  const [noOfArrays, setNoOfArrays] = useState<Number[]>([]);

  const createInputhander = (event: any) => {
    event.preventDefault();
    setCreateNumber(event.currentTarget.value);
  };
  const appendInputhander = (event: any) => {
    event.preventDefault();
    setAppendNumber(event.currentTarget.value);
  };

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
    setNoOfArrays((prev) => [...prev, appendNumber]);
    setDefaultText(false);

    const onAppendButton = contextSafe(() => {
      setTimeout(() => {
        gsap.from(`.box${appendNumber}`, {
          x: 100,
          stagger: 0.1,
          visibility: 0,
          ease: "back.Out",
          duration: 1,
          delay: 0.1,
        });
      }, 10);
    });

    onAppendButton();
  };

  
  const onCreateButton = contextSafe(() => {
    generateDefaultArray();
    setTimeout(() => {
      gsap.from(".box", {
        y: -50,
        stagger: 0.2,
        scale: 0,
        visibility: 0,
        ease: "back.inOut",
        duration: 1,
        
      });
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
            Please Click Any Operation to view the Arrays
          </span>
        )}
        <div className="flex">
          {noOfArrays.map((ele, i) => (
            <div key={i}>
              <div className="border-2 border-black p-1">
                <div className={boxClassVariable + " box " + "box" + ele}>
                  {ele.toString()}
                </div>
              </div>
                <div className="text-lg font-medium text-center">{i}</div>
            </div>
          ))}
        </div>

      </section>
      <section className="bg-orange-300 p-2">
        <div className="flex justify-evenly">
          <div className="flex flex-col items-center gap-3">
            <Button
              className="w-[5rem] hover:scale-100"
              onClick={onCreateButton}
            >
              Create
            </Button>
            <span className="text-md w-[60%] font-medium">
              To Create An Array Of Length{" "}
              <input
                className="w-5 p-1"
                onChange={createInputhander}
                value={createNumber}
              />{" "}
              Numbers
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Button
              className="w-[5rem] hover:scale-100"
              onClick={appendOneElement}
            >
              Append
            </Button>
            <span className="text-md w-[60%] font-medium">
              To Create An Array Of Length{" "}
              <input
                className="w-5 p-1"
                onChange={appendInputhander}
                value={appendNumber}
              />{" "}
              Numbers
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Button
              className="w-[5rem] hover:scale-100"
              onClick={onCreateButton}
            >
              Create
            </Button>
            <span className="text-md w-[60%] font-medium">
              To Create An Array Of Length{" "}
              <input
                className="w-5 p-1"
                onChange={createInputhander}
                value={createNumber}
              />{" "}
              Numbers
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Button
              className="w-[5rem] hover:scale-100"
              onClick={onCreateButton}
            >
              Create
            </Button>
            <span className="text-md w-[60%] font-medium">
              To Create An Array Of Length{" "}
              <input
                className="w-5 p-1"
                onChange={createInputhander}
                value={createNumber}
              />{" "}
              Numbers
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
