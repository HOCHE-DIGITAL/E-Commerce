import React from 'react'
import { FaSearch } from "react-icons/fa";
import { LuBadgeCheck } from "react-icons/lu";
import { MdPayment } from "react-icons/md";
import { IoGlobeOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";

const Ad02 = () => {
  return (
    <div className='p-16'>
      <h3 className='text-5xl font-bold md:w-2/3'>Streamline ordering from search to fulfillment, all in one place</h3>
      <div className='grid md:grid-cols-2'>

        {/*   FEATURES  */}
        <div className='w-full grid grid-cols-1 gap-10 py-10'>

          {/*   SEARCH  */}
          <div className='flex items-center gap-5'>
            <FaSearch className='text-7xl rounded-full text-[#DAB785]'/>
            <div className='border-l-2 pl-5 space-y-3'>
              <h3 className='text-3xl font-bold text-[#0C243C]'>Search for matches</h3>
              <p className='text-md text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare pretium aliquet. Aenean tempor urna elit</p>
            </div>
          </div>

          {/*   IDENTIFY  */}
          <div className='flex items-center gap-5 '>
            <LuBadgeCheck className='text-7xl rounded-full text-[#DAB785]'/>
            <div className='border-l-2 pl-5 space-y-3'>
              <h3 className='text-3xl font-bold text-[#0C243C]'>Identify the right one</h3>
              <p className='text-md text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare pretium aliquet. Aenean tempor urna elit.</p>
            </div>
          </div>

          {/*   PAY  */}
          <div className='flex items-center gap-5 '>
            <MdPayment className='text-7xl rounded-full text-[#DAB785]'/>
            <div className='border-l-2 pl-5 space-y-3'>
              <h3 className='text-3xl font-bold text-[#0C243C]'>Pay with confidence</h3>
              <p className='text-md text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare pretium aliquet. Aenean tempor urna elit</p>
            </div>
          </div>

          {/*   FULFIL  */}
          <div className='flex items-center gap-5 '>
            <IoGlobeOutline className='text-7xl rounded-full text-[#DAB785]'/>
            <div className='border-l-2 pl-5 space-y-3'>
              <h3 className='text-3xl font-bold text-[#0C243C]'>Fulfil with transparency</h3>
              <p className='text-md text-gray-500'>GLorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare pretium aliquet. Aenean tempor urna elit</p>
            </div>
          </div>

          {/*   MANAGE  */}
          <div className='flex items-center gap-5 '>
            <MdOutlineManageAccounts className='text-7xl rounded-full text-[#DAB785]'/>
            <div className='border-l-2 pl-5 space-y-3'>
              <h3 className='text-3xl font-bold text-[#0C243C]'>Manage with ease</h3>
              <p className='text-md text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare pretium aliquet. Aenean tempor urna elit</p>
            </div>
          </div>
        </div>

        {/*   IMAGES  */}
        <div className='m-10 hidden md:block'>
          <img className='w-full h-full object-cover m-auto rounded-md p-2' src='https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        </div>
      </div>
    </div>
  )
}

export default Ad02