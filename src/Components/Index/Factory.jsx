import React from 'react'

const Factory = () => {
  return (
    <div className='p-16'>
      <h3 className='text-3xl font-bold'>Source direct-from factory</h3>
      <div className='grid md:grid-cols-3 gap-10 my-10'>
        <div className='relative h-96 bg-[url(https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=400)] 
                        bg-cover rounded-lg text-white flex flex-col justify-between'>
          <div className='w-full h-full absolute bg-gradient-to-b from-black rounded-lg'>.</div>
          <h3 className='text-2xl font-bold z-10 p-5'>Take factory live tours</h3>
          <h3 className='z-10 p-5 underline'>View LIVE</h3>
        </div>
        <div className='relative h-96 bg-[url(https://images.pexels.com/photos/3038539/pexels-photo-3038539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] 
                        bg-cover rounded-lg text-white flex flex-col justify-between'>
          <div className='w-full h-full absolute bg-gradient-to-b from-black rounded-lg'>.</div>
          <h3 className='text-2xl font-bold z-10 p-5'>Get samples</h3>
          <h3 className='z-10 p-5 underline'>View LIVE</h3>
        </div>
        <div className='relative h-96 bg-[url(https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] 
                        bg-cover rounded-lg text-white flex flex-col justify-between'>
          <div className='w-full h-full absolute bg-gradient-to-b from-black rounded-lg'>.</div>
          <h3 className='text-2xl font-bold z-10 p-5'>Connect with top-ranking manufacturers</h3>
          <h3 className='z-10 p-5 underline'>View LIVE</h3>
        </div>
      </div>
    </div>
  )
}

export default Factory