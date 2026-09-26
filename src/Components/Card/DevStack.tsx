//import React from 'react';

import { use, useState } from "react";
import type { IdevStack } from "../../DevType";
import Cards from "./Cards";
import SelectedCards from "./SelectedCards";

interface IdevStackProps{
    PromiseDevStack:Promise<IdevStack[]>;
}

const DevStack = ({PromiseDevStack}:IdevStackProps) => {
    const devStack = use(PromiseDevStack);
    console.log(devStack);

   const [card,setCard]=useState<IdevStack[]>([]);
   //const [Cbutton,setCbutton]=useState(false);


    return (
        <div className="max-w-1xl mx-auto px-1">
            <div className="">
            <h1 className="text-5xl font-bold m-5">
              Explore the{" "}
              <span className="bg-linear-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                 Technologies
             </span>
            </h1>

            <p className="m-4 text-gray-500">
               Pick the technology per category to build your ideal stack
            </p>
        </div>
            
            <div className="  flex justify-center gap-4">
                
            <div className="grid grid-cols-3 gap-4">
                 {
                devStack.map((devStacks:IdevStack,index:number) => {
                    return(
                        
                    <Cards devStacks={devStacks} key={index} card={card} setCard={setCard}  ></Cards>

                    )
                })
            }
            
            </div>
            <div>
                <SelectedCards card={card} setCard={setCard}  ></SelectedCards>
                </div>
            </div>
            
            
        </div>
    );
};

export default DevStack;