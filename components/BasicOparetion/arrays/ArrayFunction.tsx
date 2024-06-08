"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface Array{
  id: string;
  value: number;
}

const boxClassVariable =
  "flex h-14 w-14 items-center justify-center rounded-lg bg-rose-500 text-xl font-medium drop-shadow-lg ";

export default function ArrayFunction() {

  const [insertNumberIndex, setInsertNumberIndex] = useState("4");
  const [insertNumber, setInsertNumber] = useState("24");
  const [createNumber, setCreateNumber] = useState(5);
  const [appendNumber, setAppendNumber] = useState(6);
  const [defaultText, setDefaultText] = useState(true);
  const container = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: container });
  const [mainArray, setMainArray] = useState<Array[]>([]);
  const arrayLength = mainArray.length;


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
    for (let i =0;i< createNumber;i++) {
      let randomNum = Math.round(Math.random() * 100);
      newNumbers.push({
        id: randomNum.toString()+i.toString(),
        value:randomNum
      })
    }
    setMainArray(newNumbers);
    setDefaultText(false);
  };

  const appendOneElement = () => {
    setMainArray((prev) => [...prev, {
      value: appendNumber,
      id: appendNumber.toString()+arrayLength.toString()
    }]);
    setDefaultText(false);
  };

  const insertToIndex = () => {
    let lastInx = arrayLength;
    let newArray = [...mainArray]; // copy of the mainArray

     while (Number(insertNumberIndex) < lastInx) {
      newArray[lastInx] = newArray[lastInx - 1];
      lastInx--;
    }

    newArray[lastInx] = {
      id: insertNumber + insertNumberIndex,
      value: Number(insertNumber),
    };

    setMainArray(newArray)
    setDefaultText(false);
    }
    

  const onAppendButton = contextSafe(() => {
    appendOneElement()
    setTimeout(() => {
      gsap.fromTo(`.box${appendNumber}${arrayLength}`, 
        {
        x: 100,
        stagger: 0.1,
        visibility: 0,
        ease: "back.Out",
        duration: 1,
        delay: 0.1,
        },{
          x: 0,
          scale: 1,
          visibility: 1,
          duration: 1,
          ease: "back.Out",
      });
    }, 10);


  });
  
  const onCreateButton = contextSafe(() => {
    generateDefaultArray();
    setTimeout(() => {
      gsap.fromTo(".box", {
        y: -50,
        stagger: 0.2,
        scale: 0,
        visibility: 0,
        ease: "back.inOut",
        duration: 1,
      },{
        y: 0,
        stagger: 0.2,
        scale: 1,
        visibility: 1,
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
        <div className="flex" ref={container}>
          {mainArray.map((ele, i) => (
            <div key={i}>
              <div className="border-2 border-black p-1">
                <div className={boxClassVariable + " box " + "box" + ele.id}>
                  {ele.value.toString()}
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
                className="w-10 p-1"
                type="number"
                onChange={createInputhander}
                value={createNumber}
              />{" "}
              Numbers
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Button
              className="w-[5rem] hover:scale-100"
              onClick={onAppendButton}
            >
              Append
            </Button>
            <span className="text-md w-[60%] font-medium">
              To Create An Array Of Length{" "}
              <input
                className="w-10 p-1"
                type="number"
                onChange={appendInputhander}
                value={appendNumber}
              />{" "}
              Numbers
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Button
              className="w-[5rem] hover:scale-100"
              onClick={insertToIndex}
            >
              Insert
            </Button>
            <span className="text-md w-[60%] font-medium">
              To Insert New Value has
              <input
                className="w-12 p-1"
                type="number"
                onChange={(e)=>setInsertNumber(e.target.value)}
                value={insertNumber}
              />{" "}
              To Index number 
              <input
                className="w-10 p-1"
                type="number"
                onChange={(e)=>setInsertNumberIndex(e.target.value)}
                value={insertNumberIndex}
              />{" "}
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
                className="w-10 p-1"
                type="number"
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
