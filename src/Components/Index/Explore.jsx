import React, {useState} from 'react'
import { PiPlantFill } from "react-icons/pi";
import { GiLargeDress } from "react-icons/gi";
import { TbGardenCart } from "react-icons/tb";
import { GiLipstick } from "react-icons/gi";
import { BiSolidPackage } from "react-icons/bi";
import { GiRunningShoe } from "react-icons/gi";
import { RiSofaFill } from "react-icons/ri";
import { FaHeadphonesSimple } from "react-icons/fa6"
import { FaWeightScale } from "react-icons/fa6";
import { GiSewingMachine } from "react-icons/gi";
import { PiBabyFill } from "react-icons/pi";
import { IoDiamondSharp } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const Explore = () => {

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

    const icons = [
      {
          id:1,
          icon:<PiPlantFill/>,
          title: 'Agriculture'
      },
      {
        id:2,
        icon:<PiPlantFill/>,
        title: 'Agriculture'
    },
    {
      id:3,
      icon:<PiPlantFill/>,
      title: 'Agriculture'
  },
      
  ]




  return (
    <div>
      <div className='w-full flex flex-col lg:flex-row gap-5 justify-between p-10 my-10'>
        <div className='lg:w-2/3 my-auto'>
          <h3 className='text-5xl font-bold'>Explore millions of offerings tailored to your business needs</h3>
        </div>
        <div className='lg:w-1/3 grid grid-cols-2 gap-10'>
          <div className='border-l-4 pl-5'>
            <h3 className='text-4xl text-[#52c3c2] font-bold '>200M+</h3>
            <h3 className='text-xl'>products</h3>
          </div>
          <div className='border-l-4 pl-5'>
            <h3 className='text-4xl text-[#52c3c2] font-bold '>200K+</h3>
            <h3 className='text-xl'>suppliers</h3>
          </div>
          <div className='border-l-4 pl-5'>
            <h3 className='text-4xl text-[#52c3c2] font-bold '>5,900</h3>
            <h3 className='text-xl'>product category</h3>
          </div>
          <div className='border-l-4 pl-5'>
            <h3 className='text-4xl text-[#52c3c2] font-bold '>200+</h3>
            <h3 className='text-xl'>countries and regions</h3>
          </div>
        </div>
      </div>
      <div className='space-y-5 px-10 py-5 my-16 max-w-[90%] mx-auto text-md overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-300 text-start'>
        <div className='w-full flex gap-24'>
          <div className='w-full flex flex-col items-center justify-center text-center space-y-3'>
              <PiPlantFill className='text-5xl'/>
              <h3>Agriculture</h3>
          </div>
          <div className='w-full flex flex-col items-center justify-center text-center space-y-3'>
              <GiLargeDress className='text-5xl'/>
              <h3>Apparel & Accessories</h3>
          </div>
          <div className='w-full flex flex-col items-center justify-center text-center space-y-3'>
              <TbGardenCart className='text-5xl'/>
              <h3>Home & Garden</h3>
          </div>
          <div className='w-full flex flex-col items-center justify-center text-center space-y-3'>
              <GiLipstick className='text-5xl'/>
              <h3>Beauty</h3>
          </div>
          <div className='w-full flex flex-col items-center justify-center text-center space-y-3'>
              <BiSolidPackage className='text-5xl'/>
              <h3>Packaging & Printing</h3>
          </div>
          <div className='w-full flex flex-col items-center justify-center text-center space-y-3'>
              <GiRunningShoe className='text-5xl'/>
              <h3>Shoes & Accessories</h3>
          </div>
          <div className='w-full flex flex-col items-center justify-center text-center space-y-3'>
              <RiSofaFill className='text-5xl'/>
              <h3>Furniture</h3>
          </div>
          <div className='w-full flex flex-col items-center justify-center text-center space-y-3'>
              <FaHeadphonesSimple className='text-5xl'/>
              <h3>Consumer Electronics</h3>
          </div>
          <div className='w-full flex flex-col items-center justify-center text-center space-y-3'>
              <FaWeightScale className='text-5xl'/>
              <h3>Sports & Entertainment</h3>
          </div>
          <div className='w-full flex flex-col items-center justify-center text-center space-y-3'>
              <FaWeightScale className='text-5xl'/>
              <h3>Sports & Entertainment</h3>
          </div>
          <div className='w-full flex flex-col items-center justify-center text-center space-y-3'>
              <FaWeightScale className='text-5xl'/>
              <h3>Sports & Entertainment</h3>
          </div>
          <div className='w-full flex flex-col items-center justify-center text-center space-y-3'>
              <FaWeightScale className='text-5xl'/>
              <h3>Sports & Entertainment</h3>
          </div>
        </div>
        <div className='w-full flex gap-24'>
          <div className='w-full flex flex-col items-center justify-center text-center space-y-3'>
              <GiSewingMachine className='text-5xl'/>
              <h3>Industrial Machinery</h3>
          </div>
          <div className='w-full flex flex-col items-center justify-center text-center space-y-3'>
              <PiBabyFill className='text-5xl'/>
              <h3>Mother, Kids & Toys</h3>
          </div>
          <div className='w-full flex flex-col items-center justify-center text-center space-y-3'>
              <IoDiamondSharp className='text-5xl'/>
              <h3>Jewelry, Eyewear,..</h3>
          </div>
          <div className='w-full flex flex-col items-center justify-center text-center space-y-3'>
              <FaCar className='text-5xl'/>
              <h3>Vehicle parts & Accessories</h3>
          </div>
          <div className='w-full flex flex-col items-center justify-center text-center space-y-3'>
              <PiPlantFill className='text-5xl'/>
              <h3>Enviroment</h3>
          </div>
          <div className='w-full flex flex-col items-center justify-center text-center space-y-3'>
              <FaWeightScale className='text-5xl'/>
              <h3>Sports & Entertainment</h3>
          </div>
          <div className='w-full flex flex-col items-center justify-center text-center space-y-3'>
              <GiSewingMachine className='text-5xl'/>
              <h3>Industrial Machinery</h3>
          </div>
          <div className='w-full flex flex-col items-center justify-center text-center space-y-3'>
              <PiBabyFill className='text-5xl'/>
              <h3>Mother, Kids & Toys</h3>
          </div>
          <div className='w-full flex flex-col items-center justify-center text-center space-y-3'>
              <IoDiamondSharp className='text-5xl'/>
              <h3>Jewelry, Eyewear,..</h3>
          </div>
          <div className='w-full flex flex-col items-center justify-center text-center space-y-3'>
              <FaWeightScale className='text-5xl'/>
              <h3>Sports & Entertainment</h3>
          </div>
          <div className='w-full flex flex-col items-center justify-center text-center space-y-3'>
              <FaWeightScale className='text-5xl'/>
              <h3>Sports & Entertainment</h3>
          </div>
          <div className='w-full flex flex-col items-center justify-center text-center space-y-3 rounded-full'>
              <FaWeightScale className='text-5xl'/>
              <h3>Sports & Entertainment</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore