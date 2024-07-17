import React, { useState } from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const Ad06 = () => {

    const images = [
        {
            id:1,
            url:'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id:2,
            url:'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id:3,
            url:'https://images.pexels.com/photos/792345/pexels-photo-792345.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = ()=> {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const nextSlide = ()=> {
        const isLastSlide = currentIndex === images.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (imageIndex) => {
        setCurrentIndex(imageIndex)
    }

  return (
    <div className='my-10 p-10'>
        <h3 className='text-2xl font-bold my-5'>Just For You</h3>
        <div className='w-full space-y-5 mt-5 rounded-lg bg-white'>
            <div className='relative group'>
              <img className='h-80 w-full rounded-lg object-cover shadow-xl' src={images[currentIndex].url}/>

              {/* Left arrow */}
              <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-2 text-lg rounded-full p-2 bg-white text-black shadow-lg cursor-pointer'>
                  <BsChevronCompactLeft size={30} onClick={prevSlide}/>
              </div>
              {/* Right arrow */}
              <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-2 text-lg rounded-full p-2 bg-white text-black shadow-lg cursor-pointer'>
                  <BsChevronCompactRight size={30} onClick={nextSlide}/>
              </div>
            </div>
            
            <div className='flex top-4 justify-center py-2'>
                {images.map((image, imageIndex) => {
                    return(
                        <div key={imageIndex} onClick={() => goToSlide(imageIndex)} className='text-2xl cursor-pointer'>
                            <RxDotFilled className={`${currentIndex === imageIndex ? 'text-[#0C243C]': 'text-[#0C243C]/20'}`}/>
                        </div>
                )})}
            </div>

          </div>
    </div>
  )
}

export default Ad06