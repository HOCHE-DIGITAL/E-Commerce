import React from 'react'
import { Link } from 'react-router-dom'

const Ad03 = () => {
  return (
    <div className='relative bg-[url(https://images.pexels.com/photos/2265488/pexels-photo-2265488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]
                    w-full max-h-96 bg-cover bg-center'>
      
      <div className='absolute w-full h-full bg-[#0C243C]/20'></div>
      <div className='relative p-16 text-center text-white space-y-3'>
        <h3 className='text-5xl font-bold'>Ready to get started?</h3>
        <p className='text-lg'>Explore millions of products from trusted suppliers by signing up today!</p>
        <button
          className='flex mx-auto items-center text-2xl text-white font-bold bg-[#D8A07A] rounded-full cursor-pointer  px-6 py-3 my-3 hover:border-2 hover:border-[#D8A07A] hover:bg-transparent'
        >
        Sign up</button>
      </div>
      
    </div>
  )
}

export default Ad03