//import React from 'react';

import { useState } from 'react';
import banarStack from '../assets/banner-stack.png'

const Banner = () => {

   const [Bbutton, setBbutton]= useState(true);

   const handleBbutton = (type : boolean) =>{
       
        setBbutton(type);
   }

    return (
        <div className="min-h-100 my-10 flex justify-between cointainer items-center ">
            <div className='m-4 p-4'>
                <p className='text-7xl font-bold m-4 '>Build Your Ideal </p>
                <p className='text-7xl font-bold m-4 bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent'>Development Stack</p>
                <p className='m-4 text-gray-500'>Explore fronted,backend,database,and tooling Options,Compare them side by side,and put together the stack that fits your next project</p>
                <div className='flex m-4 gap-4'>
                    <button onClick={() =>handleBbutton(true) } className={`btn ${Bbutton === true ? "btn-secondary" : " "} rounded-1.5xl`}>Explore Technologies</button>
                    <button onClick={() =>handleBbutton(false) } className={`btn ${Bbutton === false ? "btn-secondary" : " "}  rounded-1.5xl`}>Learn More</button>
                </div>
            </div>
            <div>
                <img className='w-200 h-150'  src={banarStack} alt="" />
            </div>
        </div>
    );
};

export default Banner;