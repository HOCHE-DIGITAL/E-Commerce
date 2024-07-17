import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const Testimonial = () => {

  const testimonail = [
    {
      id: 1,
      person: 'Dylan O"Brian',
      company: 'Artist',
      words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare pretium aliquet. Aenean tempor urna elit.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cv7npWQnoOCLIS16J7NaTDIOtdlHnXIfYs6R01nnEQ&s'
    },
    {
      id: 2,
      person: 'Dr. Selam Tesfaye',
      company: 'Artist',
      words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare pretium aliquet. Aenean tempor urna elit.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkSvg7eAIGlx0ves_qvKGcyi1es_crKFvtShjlLv1mRA&s'
    },
    {
      id: 3,
      person: 'Dr. Tedi Afro',
      company: 'Artist',
      words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare pretium aliquet. Aenean tempor urna elit',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Teddy_Afro.jpg/800px-Teddy_Afro.jpg'
    }
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = ()=> {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? testimonailsList.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const nextSlide = ()=> {
        const isLastSlide = currentIndex === testimonailsList.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (imageIndex) => {
        setCurrentIndex(imageIndex)
    }


  

  return (
    <div className='text-center mt-16 px-10 py-24 space-y-5 bg-gray-100'>
      <h3 className='text-5xl font-bold my-3'>Get tailored discounts, services, and tools for your business stage.</h3>
      <p className='text-xl '> Grow with curated benefits offered by the free Alibaba.com Membership, whether you are a small business needing the essentials to start sourcing or a well-established enterprise looking for tools and solutions for more complex orders.</p>
      <Link className='text-lg underline pt-10'>Learn more</Link>

      {/* Testimonial */}
      <div>
        <div className='relative md:w-3/4 group mx-auto py-10 px-16 my-16 grid lg:grid-cols-3 bg-white text-black rounded-lg duration-500'>
          <img className='w-36 h-36 object-cover rounded-full flex mx-auto' src={testimonail[currentIndex].image}/>
          <div className='lg:text-start my-auto space-y-3'>
            <h3 className='text-2xl font-bold'>{testimonail[currentIndex].person}</h3>
            <h3 className='text-xl text-gray-500'>{testimonail[currentIndex].company}</h3>
          </div>
          <div className='my-auto'>
            <p>"{testimonail[currentIndex].words}"</p>
          </div>
        </div>

        <div className='flex justify-center'>
            {testimonail.map((testimonail, imageIndex) => {
                return(
                    <div key={imageIndex} onClick={() => goToSlide(imageIndex)} className='text-2xl cursor-pointer'>
                        <RxDotFilled className={`${currentIndex === imageIndex ? 'text-[#0C243C]': 'text-[#0C243C]/50'}`}/>
                    </div>
            )})}
        </div>
      </div>

        
    </div>
  )
}

export default Testimonial