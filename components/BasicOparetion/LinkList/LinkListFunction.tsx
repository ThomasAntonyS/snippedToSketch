'use client'
import React, { useRef, useState } from 'react'
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const LinkListFunction = () => {

    const boxClassVariable = "flex h-14 w-14 items-center justify-center rounded-lg bg-rose-500 text-xl font-medium drop-shadow-lg ";
    
    const [defaultText, setDefaultText] = useState(true);
    const container = useRef<HTMLDivElement>(null);
    const [noOfList, setNoOfList] = useState<number[]>([]);
    const [createNumber, setCreateNumber] = useState<number | string>(5);
    const [appendNumber, setAppendNumber] = useState<number | string>(6);
    const [appendNumber1, setAppendNumber1] = useState<number | string>(0);

    const createInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCreateNumber(Number(event.currentTarget.value));
    };
   
    const generateDefaultList = () => { // Corrected function
        const newNumbers: number[] = [];
        const targetLength = Number(createNumber);

        if (isNaN(targetLength)) { // Type guard
            console.error("createNumber is not a valid number");
            return;
        }

        while (newNumbers.length < targetLength) {
            let randomNum = Math.round(Math.random() * 10);
            if (!newNumbers.includes(randomNum)) {
                newNumbers.push(randomNum);
            }
        }
        setNoOfList(newNumbers);
        setDefaultText(false);
    };

       // this is for the front end 
    const appendOneElementFirst = () => {
        setNoOfList((prev) => [Number(appendNumber1), ...prev]);
        setDefaultText(false);

        const onAppendFirst = contextSafe(() => {
          setTimeout(() => {
            gsap.from(`.box${appendNumber1}`, {
                background:"blue",
                x: -100,
                stagger: 0.1,
                visibility: 0,
                ease: "back.Out",
                duration: 1,
                delay: 0.1,
            });
        }, 10);
    });
    onAppendFirst();
    };

    const appendInputHandler1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAppendNumber1(Number(event.currentTarget.value));
    };

    // this is for the rare end 
    const appendOneElement = () => {
        setNoOfList((prev) => [...prev, Number(appendNumber)]);
        setDefaultText(false);

        const onAppendButton = contextSafe(() => {
            setTimeout(() => {
                gsap.from(`.box${appendNumber}`, {
                    background:'purple',
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

    const appendInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAppendNumber(Number(event.currentTarget.value));
    };

    const { contextSafe } = useGSAP();

    const onCreateButton = contextSafe(() => {
        generateDefaultList();
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
                className="mx-8 flex grid-rows-2 flex-col items-center justify-center bg-white"
            >
                {defaultText && (
                    <span className='text-2xl font-medium'>
                        Click an Operation to view the LinkList
                    </span>
                )}
                <div className="flex">
                    {noOfList.map((ele, i) => (
                        <div key={i}>
                            <div className="border-black border-2 p-1 m-4 rounded-md">
                                <div className={boxClassVariable + " box " + "box" + ele}>
                                    {ele.toString()}
                                </div>
                            </div>
                            <div className="text-lg font-medium text-center">{i}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className='bg-orange-200 p-2'>
                <div className="flex justify-evenly">
                    <div className="flex flex-col items-center gap-3">
                        <Button
                            className="w-[5rem] hover:scale-100 p-2"
                            onClick={onCreateButton}
                        >
                            Create
                        </Button>
                        <span className="text-md w-[85%] font-medium">
                            To Create A Linked List <br /> Choose a number
                            <input
                                className="w-5 p-1"
                                onChange={createInputHandler}
                                value={createNumber}
                                type="number"
                            />
                        </span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <Button
                            className="w-[7rem] hover:scale-100"
                            onClick={appendOneElementFirst}
                        >
                            Insert in front
                        </Button>
                        <span className="text-md w-[60%] font-medium">
                            Click to insert a number in the list
                            <input
                                className="w-5 p-1"
                                onChange={appendInputHandler1}
                                value={appendNumber1}
                                type="number"
                            />
                        </span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <Button
                            className="w-[7rem] hover:scale-100"
                            onClick={appendOneElement}
                        >
                            Insert in rear
                        </Button>
                        <span className="text-md w-[60%] font-medium">
                            Click to insert a number in the list
                            <input
                                className="w-5 p-1"
                                onChange={appendInputHandler}
                                value={appendNumber}
                                type="number"
                            />
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LinkListFunction;
