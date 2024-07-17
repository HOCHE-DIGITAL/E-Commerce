import React, { useEffect, useRef, useState } from 'react'
import { CiCircleList } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
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
import { FaRankingStar } from "react-icons/fa6";
import { MdFiberNew } from "react-icons/md";
import { IoPricetagsSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {


  const [openNav, setOpenNav] = useState(false)

  const handleNavigation = () => {
    setOpenNav(!openNav)
  }

  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(!isOpen);
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const [isOpen, setIsOpen] = useState('')
  const handleOpenCategory = (category) => {
      setIsOpen(category)
  } 

  return (
    <div ref={dropdownRef}>
      <div>
        <div className='md:hidden w-full'>
          <IoMdMenu className='text-2xl text-end ml-5 my-2' onClick={handleNavigation}/>
          {openNav && (
            <ul className='absolute w-full z-10 bg-white text-black space-y-3 text-sm px-5 mx-5 py-5 rounded-b-lg'>
                <li 
                  className='border-b-2 py-1 hover:-translate-y-2 hover:text-[#55c2c3] transition-all duration-500'
                  onClick={handleOpenCategory}> All categories </li>
                <li className='border-b-2 py-1 hover:-translate-y-2 hover:text-[#55c2c3] transition-all duration-500'>Featured sections</li>
                <li className='border-b-2 py-1 hover:-translate-y-2 hover:text-[#55c2c3] transition-all duration-500'>Trade Assureance</li>
                <li className='border-b-2 py-1 hover:-translate-y-2 hover:text-[#55c2c3] transition-all duration-500'>Buyers Central</li>
                <li className='border-b-2 py-1 hover:-translate-y-2 hover:text-[#55c2c3] transition-all duration-500'>Help Center</li>
                <li className='border-b-2 py-1 hover:-translate-y-2 hover:text-[#55c2c3] transition-all duration-500'>Get the app</li>
                <li className='border-b-2 py-1 hover:-translate-y-2 hover:text-[#55c2c3] transition-all duration-500'>Become a supplier</li>
            </ul>
          )}
        </div>
        <div className='w-full hidden md:visible text-black bg-white text-sm border-t md:flex justify-between px-8 py-3'>
            <ul className='flex space-x-5'>
                <li 
                  className='flex items-center gap-2 cursor-pointer'
                  onClick={() => handleOpenCategory('category')}> <CiCircleList/> All categories</li>
                <li
                  className='cursor-pointer' 
                  onClick={() => handleOpenCategory('featured')}>Featured sections</li>
                <li
                  className='cursor-pointer'
                  onClick={() => handleOpenCategory('trade')}>Trade Assureance</li>
                <li
                  className='cursor-pointer'><Link to='/store'>Explore Products</Link></li>
            </ul>
        
            <ul className='flex space-x-5'>
                <li
                   className='cursor-pointer'
                   onClick={() => handleOpenCategory('buyersCentral')}>Buyers Central</li>
                <li
                 className='cursor-pointer'
                 onClick={() => handleOpenCategory('help')}>Help Center</li>
                <li
                 className='cursor-pointer'
                 onClick={() => handleOpenCategory('getApp')}>Get the app</li>
                <li className='cursor-pointer'>Become a supplier</li>
            </ul>
            
        </div>
      </div>

      {/* CATEGORY */}
      {isOpen == 'category' && (
      <div className='hidden w-full md:flex gap-5 justify-evenly bg-white text-black h-[68%] p-5 absolute z-30'>
      
          <div className='w-1/3 relative'>
              <div className='max-h-96 text-md overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-300 text-start'>
                  <div onClick={handleOpenCategory} className='block rounded-lg px-4 py-3 bg-gray-100 no-underline hover:bg-gray-50 border-b-2 border-gray-100 '>
                      Top categories
                  </div>
                  <div onClick={handleOpenCategory} className='block rounded-lg px-4 py-3 text-gray-500 no-underline hover:bg-gray-50  border-b-2 border-gray-100 '>
                      Home Decor
                  </div>
                  <div onClick={handleOpenCategory} className='block rounded-lg px-4 py-3 text-gray-500 no-underline hover:bg-gray-50 border-b-2 border-gray-100 '>
                      Industrial
                  </div>
                  <div className='block rounded-lg px-4 py-3 text-gray-500 no-underline hover:bg-gray-50 border-b-2 border-gray-100 '>
                      Health & Personal care
                  </div>
                  <div className='block rounded-lg px-4 py-3 text-gray-500 no-underline hover:bg-gray-50 border-b-2 border-gray-100 '>
                      Fashion & Beauty
                  </div>
                  <div className='block rounded-lg px-4 py-3 text-gray-500 no-underline hover:bg-gray-50 border-b-2 border-gray-100 '>
                      Sports & Home Improvement
                  </div>
                  <div className='block rounded-lg px-4 py-3 text-gray-500 no-underline hover:bg-gray-50 border-b-2 border-gray-100 '>
                      Raw Materials
                  </div>
                  <div className='block rounded-lg px-4 py-3 text-gray-500 no-underline hover:bg-gray-50 border-b-2 border-gray-100 '>
                      Sports & Home Improvement
                  </div>
                  <div className='block rounded-lg px-4 py-3 text-gray-500 no-underline hover:bg-gray-50 border-b-2 border-gray-100 '>
                      Raw Materials
                  </div>
              </div>
          </div>
          <div className='w-1/3'>
              <div className='max-h-96 text-md text-gray-500 font-thin overflow-y-auto scrollbar-thin scrollbar-track-transparent  scrollbar-thumb-blue-300 text-start'>
                  
                  <div onClick={handleOpenCategory} className='w-full flex items-center pl-3 space-x-3 py-3 border-b-2 border-gray-100 rounded-lg hover:bg-gray-50'>
                      <PiPlantFill className='text-xl'/>
                      <h3>Agriculture</h3>
                  </div>
                  <div className='w-full flex items-center pl-3 space-x-3 py-3 border-b-2 border-gray-100 rounded-lg hover:bg-gray-50'>
                      <GiLargeDress className='text-xl'/>
                      <h3>Apparel & Accessories</h3>
                  </div>
                  <div className='w-full flex items-center pl-3 space-x-3 py-3 border-b-2 border-gray-100 rounded-lg hover:bg-gray-50'>
                      <TbGardenCart className='text-xl'/>
                      <h3>Home & Garden</h3>
                  </div>
                  <div className='w-full flex items-center pl-3 space-x-3 py-3 border-b-2 border-gray-100 rounded-lg hover:bg-gray-50'>
                      <GiLipstick className='text-xl'/>
                      <h3>Beauty</h3>
                  </div>
                  <div className='w-full flex items-center pl-3 space-x-3 py-3 border-b-2 border-gray-100 rounded-lg hover:bg-gray-50'>
                      <BiSolidPackage className='text-xl'/>
                      <h3>Packaging & Printing</h3>
                  </div>
                  <div className='w-full flex items-center pl-3 space-x-3 py-3 border-b-2 border-gray-100 rounded-lg hover:bg-gray-50'>
                      <GiRunningShoe className='text-xl'/>
                      <h3>Shoes & Accessories</h3>
                  </div>
                  <div className='w-full flex items-center pl-3 space-x-3 py-3 border-b-2 border-gray-100 rounded-lg hover:bg-gray-50'>
                      <RiSofaFill className='text-xl'/>
                      <h3>Furniture</h3>
                  </div>
                  <div className='w-full flex items-center pl-3 space-x-3 py-3 border-b-2 border-gray-100 rounded-lg hover:bg-gray-50'>
                      <GiRunningShoe className='text-xl'/>
                      <h3>Shoes & Accessories</h3>
                  </div>
                  <div className='w-full flex items-center pl-3 space-x-3 py-3 border-b-2 border-gray-100 rounded-lg hover:bg-gray-50'>
                      <RiSofaFill className='text-xl'/>
                      <h3>Furniture</h3>
                  </div>
              </div>
          </div>
          <div className='w-1/3'>
              
              <div className='max-h-96 text-md  overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-300 text-start'>
                <h3 className='text-lg rounded-sm font-bold pl-4 py-3'> Agriculture </h3>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
                  <div onClick={handleOpenCategory} className='px-4 py-3 flex flex-col mx-auto space-y-2 text-gray-500 hover:bg-gray-50'>
                      <img
                        className='rounded-full w-16 h-16 object-cover' 
                        src='https://images.pexels.com/photos/792345/pexels-photo-792345.jpeg?auto=compress&cs=tinysrgb&w=400'/>
                      <span className=' overflow-visible'>Categorhgy hbhb hbhb</span>
                  </div>
                  <div onClick={handleOpenCategory} className='px-4 py-3 flex flex-col mx-auto space-y-2 text-gray-500 hover:bg-gray-50'>
                      <img
                        className='rounded-full w-16 h-16 object-cover' 
                        src='https://images.pexels.com/photos/792345/pexels-photo-792345.jpeg?auto=compress&cs=tinysrgb&w=400'/>
                      <span className=''>Category</span>
                  </div>
                  <div onClick={handleOpenCategory} className='px-4 py-3 flex flex-col mx-auto space-y-2 text-gray-500 hover:bg-gray-50'>
                      <img
                        className='rounded-full w-16 h-16 object-cover' 
                        src='https://images.pexels.com/photos/792345/pexels-photo-792345.jpeg?auto=compress&cs=tinysrgb&w=400'/>
                      <span className=''>Category</span>
                  </div>
                  <div onClick={handleOpenCategory} className='px-4 py-3 flex flex-col mx-auto space-y-2 text-gray-500 hover:bg-gray-50'>
                      <img
                        className='rounded-full w-16 h-16 object-cover' 
                        src='https://images.pexels.com/photos/792345/pexels-photo-792345.jpeg?auto=compress&cs=tinysrgb&w=400'/>
                      <span className=''>Category</span>
                  </div>
                  <div onClick={handleOpenCategory} className='px-4 py-3 flex flex-col mx-auto space-y-2 text-gray-500 hover:bg-gray-50'>
                      <img
                        className='rounded-full w-16 h-16 object-cover' 
                        src='https://images.pexels.com/photos/792345/pexels-photo-792345.jpeg?auto=compress&cs=tinysrgb&w=400'/>
                      <span className=''>Category</span>
                  </div>
                  <div onClick={handleOpenCategory} className='px-4 py-3 flex flex-col mx-auto space-y-2 text-gray-500 hover:bg-gray-50'>
                      <img
                        className='rounded-full w-16 h-16 object-cover' 
                        src='https://images.pexels.com/photos/792345/pexels-photo-792345.jpeg?auto=compress&cs=tinysrgb&w=400'/>
                      <span className=''>Category</span>
                  </div>
                  <div onClick={handleOpenCategory} className='px-4 py-3 flex flex-col mx-auto space-y-2 text-gray-500 hover:bg-gray-50'>
                      <img
                        className='rounded-full w-16 h-16 object-cover' 
                        src='https://images.pexels.com/photos/792345/pexels-photo-792345.jpeg?auto=compress&cs=tinysrgb&w=400'/>
                      <span className=''>Category</span>
                  </div>
                </div>
              </div>
          </div>
      </div> 
      )}

      
      {/* FEATURED SECTION */}
      {isOpen == 'featured' && (
      <div className='hidden w-full md:grid grid-cols-4 gap-5 justify-evenly bg-white text-black h-[48%] p-5 absolute z-30 transition-all duration-500 delay-150 ease-in'>
      
          <div className='p-5'>
              <div className='border border-gray-400 space-y-2 flex flex-col justify-center items-center p-10 rounded-md'>
                <FaRankingStar size={50}/>
                <h3 className='text-lg'>Top Ranking</h3>
              </div>
          </div>
          <div className='p-5'>
              <div className='border border-gray-400 space-y-2 flex flex-col justify-center items-center p-10 rounded-md'>
                <MdFiberNew size={50}/>
                <h3 className='text-lg'>New Arrivals</h3>
              </div>
          </div>
          <div className='p-5'>
              <div className='border border-gray-400 space-y-2 flex flex-col justify-center items-center p-10 rounded-md'>
                <IoPricetagsSharp size={50}/>
                <h3 className='text-lg'>Saving spotlight</h3>
              </div>
          </div>
          <div className='p-5 text-md  border-l border-gray-100'>
              
              <ul className='space-y-5 pl-2'>
                <li>Sample center</li>
                <li>Online Trade Show</li>
                <li>Tips</li>
                <li>LIVE</li>
                <li>Global Suppliers</li>
              </ul>
          </div>
      </div> 
      )}

      
      {/* TRADE */}
      {isOpen == 'trade' && (
      <div className='hidden w-full md:grid grid-cols-3 gap-5 justify-evenly bg-white text-black h-[48%] p-5 absolute z-30 transition-all duration-500 delay-150 ease-in'>
      
          <div className='p-5 space-y-4'>
              <h3 className='text-lg font-semibold'>Trade Assurance</h3>
              <h3 className='text-4xl font-bold'>Enjoy protection from payment to delivery</h3>
              <button
                className='bg-blue-400 text-white px-3 py-1 rounded-full'
              >Learn more</button>
          </div>
          <div className='grid grid-cols-1 gap-5 p-5'>
              <div className='bg-black/5 shadow-sm space-y-2 flex justify-start space-x-3 items-center px-5 rounded-md'>
                <MdFiberNew size={50}/>
                <h3 className='text-lg'>Safe & easy payment</h3>
              </div>
              <div className='bg-black/5 shadow-sm space-y-2 flex justify-start space-x-3 items-center px-5 rounded-md'>
                <MdFiberNew size={50}/>
                <h3 className='text-lg'>Safe & easy payment</h3>
              </div>
          </div>
          <div className='grid grid-cols-1 gap-5 p-5'>
              <div className='bg-black/5 shadow-sm space-y-2 flex justify-start space-x-3 items-center px-5 rounded-md'>
                <MdFiberNew size={50}/>
                <h3 className='text-lg'>Safe & easy payment</h3>
              </div>
              <div className='bg-black/5 shadow-sm space-y-2 flex justify-start space-x-3 items-center px-5 rounded-md'>
                <MdFiberNew size={50}/>
                <h3 className='text-lg'>Safe & easy payment</h3>
              </div>
          </div>
         
      </div> 
      )}

      {/* BUYERS CENTRAL */}
      {isOpen == 'buyersCentral' && (
      <div className='hidden w-full md:grid grid-cols-5 gap-5 justify-evenly bg-white text-black h-[48%] p-5 absolute z-30 transition-all duration-500 delay-150 ease-in'>
      
          <div className='p-7 space-y-2 text-md'>
              <h3 className='font-bold'>Get Started</h3>
              <h3 className=''>What is website.com</h3>
          </div>
          <div className='p-7 space-y-2 text-md border-l'>
              <h3 className='font-bold'>Why website.com</h3>
              <h3 className=''>How sourcing works</h3>
              <h3 className=''>Membership program</h3>
          </div>
          <div className='p-7 space-y-2 text-md border-l'>
              <h3 className='font-bold'>Trade services</h3>
              <h3 className=''>Trade Assurance</h3>
              <h3 className=''>Logistics services</h3>
              <h3 className=''>Letter of credits</h3>
              <h3 className=''>Tax compliance program</h3>
          </div>
          <div className='p-7 space-y-2 text-md border-l'>
              <h3 className='font-bold'>Resources</h3>
              <h3 className=''>Success stories</h3>
              <h3 className=''>Blogss</h3>
          </div>
          <div className='p-7 space-y-2 text-md border-l'>
              <h3 className='font-bold'>Webinars</h3>
              <h3 className=''>Overview</h3>
              <h3 className=''>Meet the peers</h3>
              <h3 className=''>Ecommerce Academy</h3>
          </div>
         
      </div> 
      )}

      {/* HELP */}
      {isOpen == 'help' && (
      <div className='hidden w-full md:grid grid-cols-3 gap-5 justify-evenly bg-white text-black h-[40%] p-5 absolute z-30 transition-all duration-500 delay-150 ease-in'>
      
          <div className='p-5'>
              <div className='border border-gray-400 space-y-2 flex flex-col justify-center items-center p-10 rounded-md'>
                <FaRankingStar size={50}/>
                <h3 className='text-lg'>For buyers</h3>
              </div>
          </div>
          <div className='p-5'>
              <div className='border border-gray-400 space-y-2 flex flex-col justify-center items-center p-10 rounded-md'>
                <FaRankingStar size={50}/>
                <h3 className='text-lg'>For suppliers</h3>
              </div>
          </div>
          <div className='p-7 space-y-2 text-md border-l my-auto'>
              <h3 className=''>Open a dispute</h3>
              <h3 className=''>Report abuse</h3>
              <h3 className=''>Report IPR infringement</h3>
          </div>
         
      </div> 
      )}

    </div>
  )
}

export default Navbar