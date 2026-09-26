//import React from 'react';
import { useState } from 'react';
import LogoText from '../assets/logo-text.png'

const Nav = () => {

const[sign,setSign]=useState("signIn");
const handleSign = (type: "signIn" | "signOut") =>{
    setSign(type);
}

    return (
        <div className='bg-white fixed top-0 left-0 w-full z-50 p-4'>
            <nav className='container mx-auto  flex justify-between items-center '>
                <div>
                    <img src={LogoText} alt="" />
                </div>
                <div>
                    <ul className='flex justify-center gap-4 font-bold cursor-pointer text-gray-500'>
                        <li className='text-red-500'>Home</li>
                        <li>Technology</li>
                        <li>Project</li>
                        <li>About</li>
                        <li>Contect</li>
                    </ul>
                </div>
                <div className=' flex gap-0 '>
                    <button onClick={()=>handleSign("signIn")} className={`btn rounded-full ${sign=="signIn" ? 'btn-active btn-secondary' : ''}`}>Sign In</button>
                    <button onClick={()=>handleSign("signOut")} className={`btn rounded-full ${sign=="signOut" ? 'btn-active btn-secondary' : ''}`}>Sign Up</button>
                </div>
            </nav>
        </div>
    );
};

export default Nav;