import type { Dispatch, SetStateAction } from "react";
import type { IdevStack } from "../../DevType";
import { toast } from "react-toastify";
//import DevStack from "./DevStack";

//import React from 'react';
interface IselectrdCard{
  card:IdevStack[];
  setCard:Dispatch<SetStateAction<IdevStack[]>>
  
}
const SelectedCards = ({card, setCard }:IselectrdCard) => {

    const handleremove=(selectedCard:IdevStack)=>{

        const rescard=card.filter((item)=>{
          return(item.id != selectedCard.id);
        })
        toast.error('Item has been removed');
        setCard(rescard);
    }
    const handleAllRemove =() =>{
      setCard([]);
      if(card.length!=0){
         toast.error('Removed All');
      }
      
    }

  return (
         <div>
      <div className="w-80 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-900">
          Your Stack
        </h2>
         <p className="mt-2 text-lg text-gray-400">
          {card.length} Technology Selected
        </p>

        {/* Selected Items */}
        <div className="mt-6 space-y-3">
          {
            card.map((card)=>(
              <div>
                {/* Svelte */}
          <div className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3">

            <div className="flex items-center gap-3">
              <img
                src={card.icon}
                alt="Svelte"
                className="h-10 w-10"
              />

              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {card.id}
                </h3>

                <p className="text-xs text-gray-400">
                  {card.category}
                </p>
              </div>
            </div>
        
        
    
            <button className="text-3xl font-light text-gray-400"
            onClick={()=>handleremove(card)}>
              ×
            </button>

          </div>
              </div>
            ))
          }

          

        </div>

        {/* Remove All */}
        <button className="mt-16 w-full rounded-xl border-2 border-red-200 py-2.5 text-lg font-bold text-red-500 hover:bg-red-50"
         onClick={handleAllRemove}>
          Remove All
        </button>

      </div>
    </div>
    
    
  );
};

export default SelectedCards;
