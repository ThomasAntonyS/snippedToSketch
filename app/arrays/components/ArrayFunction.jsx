"use client"
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);



export default function ArrayFunction() {
    const container = useRef();
    const { contextSafe } = useGSAP({ scope: container });
    const [noOfArrays, setNoOfArrays] = useState([]);
    let defautSize = 5;
  
    const generateDefaultArray = () => {
      const newNumbers = [];
      while (newNumbers.length < defautSize) {
        let randomNum = Math.round(Math.random() * 100);
        if (!noOfArrays.includes(randomNum)) {
          newNumbers.push(randomNum);
        }
      }
      setNoOfArrays(newNumbers);
      
    };
    // useEffect(()=>{
    //     generateDefaultArray()
    //     },[])

    const appendOneElement = () => {
        const newNumbers = [];
      
        let randomNum = Math.round(Math.random() * 100);
        if (!noOfArrays.includes(randomNum)) {
          newNumbers.push(randomNum);
        }else{
            appendOneElement()
        }
      
      setNoOfArrays(prev=>[...prev,newNumbers]);
      gsap.from('.box', { y: -50,stagger: 0.1,scale: 0,visibility: 0});
    }

    const onClickGood = contextSafe(() => {
        generateDefaultArray()
        gsap.from('.box', { y: -50,stagger: 0.1,scale: 0,visibility: 0});
    });
  return (
    <>
    <section ref={container} className="row-start-2 mx-10 bg-white flex justify-center items-center flex-col">
    <div  className="flex  border-y-2 border-black">
        {noOfArrays.map((ele, i) => (
          <div className="border-x-2 border-black p-1" key={i}>
            <div className="box flex h-14 w-14 items-center justify-center rounded-lg bg-rose-500 text-xl font-medium drop-shadow-lg box">
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
      <section className="row-start-3 bg-orange-300 p-2">
        <div className="grid gap-4">
          <Button className="w-fit hover:scale-100" onClick={onClickGood}>Create</Button>
          <Button className="w-fit" onClick={appendOneElement}>Append</Button>
          <Button className="w-fit">Remove</Button>
        </div>
      </section>
    </>
  )
}
