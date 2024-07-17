import React from 'react'
import Topbar from '../Shared/Topbar'
import Navbar from '../Shared/Navbar'
import { FaPlayCircle } from "react-icons/fa";
import { FaCameraRetro, FaSearch } from "react-icons/fa";

const Herosection = () => {
  return (
    <div className='relative h-screen bg-cover bg-[url(https://images.pexels.com/photos/1325722/pexels-photo-1325722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]'>
      
      <div className='w-full h-full my-auto text-white bg-gradient-to-b from-black absolute z-10'>
        <Navbar/>
        <div className='p-16 space-y-10'>
          <h3 className='flex items-center gap-2 text-sm md:text-xl '><FaPlayCircle/> Learn about Alibaba.com</h3>
          <h3 className='md:w-3/4 flex items-center gap-2 text-3xl md:text-5xl font-bold '>The leading B2B ecommerce platform for global trade</h3>

          <div className='w-full md:w-1/2 bg-white text-black flex justify-between rounded-full px-2 py-2 my-5'>
            <input type='text' className='w-full pl-4 border-none active:border-none' placeholder='What are you looking for?'/>
            <div className='flex items-center gap-3'>
              <FaCameraRetro size={20} className=''/>
              <button className='flex gap-2 py-2 px-4 rounded-full items-center bg-[#55c2c3] text-white'>
                <FaSearch/> Search
              </button>
            </div>
          </div>

          <div className='w-full text-lg flex items-center'>
            <h3 className='font-bold'>Frequently Searched:</h3>
            <div className='w-full flex space-x-5'>
              <div className='w-fit border-2 font-semibold border-white rounded-full px-3 py-1'> electric scooter </div>
              <div className='w-fit border-2 font-semibold border-white rounded-full px-3 py-1'> iphone 15 pro max </div>
              <div className='w-fit border-2 font-semibold border-white rounded-full px-3 py-1'> phone </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Herosection