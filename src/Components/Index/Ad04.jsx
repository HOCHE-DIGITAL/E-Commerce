import React from 'react'

const Ad04 = () => {
  return (
    <div className='text-center my-16 p-10 space-y-5'>
      <h3 className='text-5xl font-bold my-3'>Empowering businesses through global trade</h3>
      <p className='text-xl '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare pretium aliquet. Aenean tempor urna elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare pretium aliquet. Aenean tempor urna elit</p>
      <div className='grid md:grid-cols-2 gap-10 p-16'>
        <div className='relative h-48 md:h-full bg-[url(https://images.pexels.com/photos/4350210/pexels-photo-4350210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] 
                        rounded-lg bg-cover flex flex-col justify-end text-start'>
          <div className='absolute w-full h-full bg-[#0C243C]/40 rounded-lg'></div>
          <h3 className='relative text-[#D8A07A] font-bold uppercase px-8 md:text-xl'>Our Mission</h3>
          <h3 className='relative md:text-3xl font-bold text-white p-8'>Make it easy to do business anywhere</h3>
        </div>
        <div className='grid grid-cols-1 gap-10'>
          <div className='relative h-48 bg-[url(https://images.pexels.com/photos/4350210/pexels-photo-4350210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] 
                          rounded-lg bg-cover flex flex-col justify-end text-start'>
            <div className='absolute w-full h-full bg-[#0C243C]/40 rounded-lg'></div>
            <h3 className='relative text-[#D8A07A] font-bold uppercase px-8 md:text-xl'>Our Location</h3>
            <h3 className='relative md:text-3xl font-bold text-white p-8'>We have teams around the world.</h3>
          </div>
          <div className='relative h-48 bg-[url(https://images.pexels.com/photos/4350210/pexels-photo-4350210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] 
                        rounded-lg bg-cover flex flex-col justify-end text-start'>
            <div className='absolute w-full h-full bg-[#0C243C]/40 rounded-lg'></div>
            <h3 className='relative text-[#D8A07A] font-bold uppercase px-8 md:text-xl'>OUR ESG PROMISES</h3>
            <h3 className='relative md:text-3xl font-bold text-white p-8'>Responsible technology. Sustainable future.</h3>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Ad04