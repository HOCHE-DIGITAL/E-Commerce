import React, {useEffect, useRef, useState} from 'react'
import { CiGlobe } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';


// this is for displaying searchbar when scrolled; didnt work bedenb
const RevealOnScroll = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
 
    useEffect(() => {
        const scrollObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                scrollObserver.unobserve(entry.target);
            }
        });
 
        scrollObserver.observe(ref.current);
 
        return () => {
            if (ref.current) {
                scrollObserver.unobserve(ref.current);
            }
        };
    }, []);
 
    const classes = `transition-opacity duration-1000 
        ${isVisible ? "opacity-100" : "opacity-0"
        } w-full`;
 
    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    );
};

const Topbar = () => {

  const [isOpen, setIsOpen] = useState(false)
    const handleOpenCategory = () => {
        setIsOpen(!isOpen)
    } 
   

  return (
    <div className='flex justify-between items-center bg-white text-black py-1 px-8 sticky top-0 z-30 border-b'>
      <Link to='/' className='w-1/3 text-xl font-bold'>E-Shop</Link>

        {/* Search */}
        
        <div className='hidden lg:visible md:flex justify-between w-1/2 mx-auto rounded-md p-1 '>
            
            <input type='text' placeholder='Search for Products' className='w-full flex-row px-3 text-sm rounded-l-md py-2 text-black hover:bg-gray-100 active:bg-gray-100 focus:outline-none'/>
        
            <div  className='bg-[#55c2c3] flex items-center gap-3 text-[1em] text-white px-5 py-2 rounded-tr-md rounded-br-md font-bold'>
                <FaSearch/> <span className='hidden md:block'>Search </span>
            </div>
        </div>
        
      <ul className='w-1/3 flex justify-evenly space-x-4 items-center'>
        <li><CiGlobe size={20}/></li>
        <li className='flex items-center text-sm gap-2'><IoPersonOutline/> Sign in</li>
        <li className='flex gap-2 items-center bg-[#55c2c3] text-white text-sm rounded-full px-5 py-1 font-bold'>Sign up</li>
      </ul>
    </div>
  )
}

export default Topbar