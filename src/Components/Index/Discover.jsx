import React,{useState} from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const Discover = () => {

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
    <div className='bg-gray-100 my-16'>
      <h3 className='text-3xl font-bold px-16 pt-10'>Discover your next business opportunity</h3>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 p-16'>
        <div>
          <div className='flex justify-between items-center'>
            <h3 className='text-2xl font-bold'>Top ranking</h3>
            <h3 className='underline text-md cursor-pointer'>View More</h3>
          </div>
          <div className='w-full space-y-5 mt-5 p-5 rounded-lg bg-white'>
            <div className='relative group'>
              <div className='bg-white absolute z-10 m-2 text-black p-3 rounded-md shadow-xl'>4.8</div>
              <img className='h-80 w-full rounded-lg object-cover' src={images[currentIndex].url}/>
              {/* <div style={{backgroundImage: `url(${images[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
              </div> */}

              {/* Left arrow */}
              <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-2 text-lg rounded-full p-2 bg-white text-black shadow-lg cursor-pointer'>
                  <BsChevronCompactLeft size={30} onClick={prevSlide}/>
              </div>
              {/* Right arrow */}
              <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-2 text-lg rounded-full p-2 bg-white text-black shadow-lg cursor-pointer'>
                  <BsChevronCompactRight size={30} onClick={nextSlide}/>
              </div>
            </div>
            
            <div className='flex gap-5'>
              <img className='w-24 h-24 rounded-lg object-cover' src='https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=400'/>
              <img className='w-24 h-24 rounded-lg object-cover' src='https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
              <img className='w-24 h-24 rounded-lg object-cover' src='https://images.pexels.com/photos/792345/pexels-photo-792345.jpeg?auto=compress&cs=tinysrgb&w=400'/>
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

        <div>
          <div className='flex justify-between items-center'>
            <h3 className='text-2xl font-bold'>New Arrival</h3>
            <h3 className='underline text-md cursor-pointer'>View More</h3>
          </div>
          <div className='w-full flex-flex-col justify-evenly space-y-5 mt-5 p-5 rounded-lg bg-white '>
            <h3 className='text-xl'>72,300+ products added today</h3>
            
            <div className='grid grid-cols-2 gap-5'>
              <img className='h-32 rounded-lg object-cover shadow-md' src='https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=400'/>
              <img className='h-32 rounded-lg object-cover shadow-md' src='https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
              <img className='h-32 rounded-lg object-cover shadow-md' src='https://images.pexels.com/photos/792345/pexels-photo-792345.jpeg?auto=compress&cs=tinysrgb&w=400'/>
              <img className='h-32 rounded-lg object-cover shadow-md' src='https://images.pexels.com/photos/792345/pexels-photo-792345.jpeg?auto=compress&cs=tinysrgb&w=400'/>
            </div>
          </div>
          <div className='flex gap-5 items-center p-5 rounded-lg bg-white mt-9'>
              <img className='w-24 h-24 rounded-lg object-cover' src='https://images.pexels.com/photos/792345/pexels-photo-792345.jpeg?auto=compress&cs=tinysrgb&w=400'/>
              <div>
                <h3 className='text-xl font-bold'>New this week</h3>
                <h3 className='text-md text-gray-500'>Products from verified suppliers only</h3>
              </div>
          </div>
        </div>

        <div>
          <div className='flex justify-evenly items-center'>
            <h3 className='text-2xl font-bold'>Saving spotlight</h3>
            <h3 className='underline text-md cursor-pointer'>View More</h3>
          </div>
          <div className='w-full flex-flex-col justify-evenly space-y-16 p-5 rounded-lg'>
            
            <div className='flex gap-5 items-center p-5 rounded-lg bg-white'>
                <img className='w-24 h-24 rounded-lg object-cover' src='https://images.pexels.com/photos/792345/pexels-photo-792345.jpeg?auto=compress&cs=tinysrgb&w=400'/>
                <div>
                  <h3 className='text-xl font-bold'>Lowest price in 180 days</h3>
                </div>
            </div>
            <div className='p-5 bg-white mt-4 rounded-lg'>
              <h3 className='text-xl py-2'>Deals on best sellersy</h3>
              <div className='relative'>
                <div className='bg-white absolute z-10 m-2 text-black p-3 rounded-md shadow-xl'>100% OFF</div>
                <img className='h-64 w-full rounded-lg object-cover shadow-md' src='https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=400'/>
              </div>
            </div>
          </div>
          

        </div>
      </div>
    </div>
  )
}

export default Discover