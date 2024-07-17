import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlayCircle } from "react-icons/fa";

const Ad01 = () => {
  return (
    <div className='relative bg-no-repeat bg-cover bg-center bg-[url(https://images.pexels.com/photos/4350210/pexels-photo-4350210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]
                    text-white my-16' >
      <div className='w-full h-full absolute bg-[#0C243C]/50'>.</div>
      <h3 className='z-10 relative px-10 pt-10 text-5xl font-bold md:w-2/3'>Trade with confidence from production quality to purchase protection</h3>
      <div className='relative grid md:grid-cols-2 gap-10 p-10'>
        <div className='relative rounded-lg'>
          <div className='h-full w-full absolute backdrop-blur rounded-lg'></div>
          <div className='relative space-y-8 px-10 py-10'>
            <h3 className='text-xl'>Ensure production quality with</h3>
            <h3 className='text-4xl font-bold'>Organization Name</h3>
            <p>Connect with a variety of suppliers with third-party-verified credentials and capabilities. Look for the "Verified" logo to begin sourcing with experienced suppliers your business could rely on.</p>
            <div className='flex gap-10 items-center'>
              <button className='flex items-center border border-white bg-[#D8A07A]/50 rounded-full gap-3 px-4 py-2 hover:bg-[#D8A07A]'>
                <FaPlayCircle/> Watch video
              </button>
              <Link className='underline'>Learn more</Link>
            </div>
          </div>
        </div>
        <div className='relative rounded-lg'>
          <div className='h-full w-full absolute backdrop-blur rounded-lg'></div>
          <div className='relative space-y-8 px-10 py-10'>
            <h3 className='text-xl'>Ensure production quality with</h3>
            <h3 className='text-4xl font-bold'>Organization Name</h3>
            <p>Connect with a variety of suppliers with third-party-verified credentials and capabilities. Look for the "Verified" logo to begin sourcing with experienced suppliers your business could rely on.</p>
            <div className='flex gap-10 items-center'>
              <button className='flex items-center border border-white bg-[#D8A07A]/50 rounded-full gap-3 px-4 py-2 hover:bg-[#D8A07A]'>
                <FaPlayCircle/> Watch video
              </button>
              <Link className='underline'>Learn more</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ad01