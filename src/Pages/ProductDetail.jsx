import React, { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaCreditCard } from "react-icons/fa";
import { CiStar } from "react-icons/ci";


const ProductDetail = () => {
 

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
    },
    {
        id:3,
        url:'https://images.pexels.com/photos/792345/pexels-photo-792345.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
        id:3,
        url:'https://images.pexels.com/photos/792345/pexels-photo-792345.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ]

  const[currentImage, setCurrentImage] = useState(images[0])

  const handleImageChange = (image) => {
      setCurrentImage(image)
  }

  return (
    <div className='grid grid-cols-5'>
      <div className='col-span-3 px-10 my-10'>
        <h3 className='text-2xl font-bold'>Kids GPS Tracking Watch With Calling Function SOS Child Anti-lost Tracking Clock</h3>
        <h3 className='text-xl my-5'>No reviews yet. 9 orders</h3>

        {/* PRODUCT IMAGES */}
        <div className='grid grid-cols-5 gap-10'>
          <div className='col-span-1 py-5 space-y-10 h-96 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-300'>
          {images.map(image => {
            return (
              <img 
                className='rounded-lg w-24 h-24 object-cover shadow-md'
                onClick={() => handleImageChange(image) } src={image.url}/>
            )
          })}
          </div>
          <div className='col-span-4 py-5'>
            <CiHeart size={45} className='absolute m-5 bg-white p-2 rounded-full cursor-pointer border'/>
            <img src={currentImage.url} className='rounded-lg w-[80%] h-96 object-cover object-center shadow-md'/>
          </div>
        </div>


        {/* Recommendation */}
        <div>

        </div>

        {/* KEY ATTRIBUTES */}
        <div className='space-y-2 my-16'>
          <h3 className='text-2xl font-bold'>Key attributes</h3>
          <h3 className='text-xl text-gray-600 mb-5'>Industrial-specific attributes</h3>

          <div className='grid grid-cols-2 border border-gray-300'>
            <div className='bg-gray-200 py-3 px-5 border-b border-t border-gray-300'>attribute Name</div>
            <div className=' py-3 px-5 border-b border-t border-gray-300'>attribute</div>
            <div className='bg-gray-200 py-3 px-5 border-b border-t border-gray-300'>attribute Name</div>
            <div className=' py-3 px-5 border-b border-t border-gray-300'>attribute</div>
          </div>

         

        </div>
        

        {/* Rating & Reviews */}
        <div>
          <h3 className='text-2xl font-bold'>Rating & Reviews</h3>
          <h3 className='text-xl text-gray-600 my-3'><span className='text-2xl font-bold text-black'>5.0</span>/5 Very satisfied</h3>
          <div className='grid grid-cols-2'>
            <div className='py-3 text-xl'>Supplier service</div>
            <div className=' py-3 px-5 flex items-center gap-3'>
              <div className='w-1/2 h-1 bg-orange-500'></div> 4.6
            </div>
            <div className='py-3 text-xl'>On-time shipment</div>
            <div className=' py-3 px-5 flex items-center gap-3'>
              <div className='w-1/2 h-1 bg-orange-500'></div> 4.6
            </div>
            <div className='py-3 text-xl'>Product quality</div>
            <div className=' py-3 px-5 flex items-center gap-3'>
              <div className='w-1/2 h-1 bg-orange-500'></div> 4.6
            </div>
          </div>
        </div>
      </div>
      <div className='w-full col-span-2 p-10'>
        <div className='w-full shadow-md p-10'>
          <h3 className='text-xl text-gray-500'>category name</h3>
          <div className='flex justify-between items-center'>
            <h3 className='text-3xl font-bold my-2'>Canon Camera</h3>
            <div className='flex items-center'>
              <CiStar size={25} className=''/>
              <CiStar size={25} className=''/>
              <CiStar size={25} className=''/>
              <CiStar size={25} className=''/>
              <CiStar size={25} className=''/> 
              <h3 className='text-xl pl-2 text-gray-400'> <span className='text-2xl font-bold text-orange-400'>3.5</span>/5</h3>
            </div>
            
          </div>
          <h3 className='text-xl'><span className='text-4xl text-orange-500 font-bold'>15000 </span>ETB</h3>
          
          <div className='mt-5 py-4 space-y-3 border-t border-gray-200'>
            <h3 className='text-2xl font-bold'>Variants</h3>

            <h3>Color: 3</h3>
            <div className='w-full flex space-x-4'>
              <div className='w-10 h-10 rounded-md bg-blue-900'></div>
              <div className='w-10 h-10 rounded-md bg-yellow-400'></div>
              <div className='w-10 h-10 rounded-md bg-green-400'></div>
            </div>

            <h3>Size: 2</h3>
            <div className='w-full flex space-x-4 font-bold'>
              <div className='w-10 h-10 rounded-md flex items-center justify-center bg-gray-200 text-center'>S</div>
              <div className='w-10 h-10 rounded-md flex items-center justify-center bg-gray-200'>M</div>
              <div className='w-10 h-10 rounded-md flex items-center justify-center bg-gray-200'>L</div>
            </div>
          </div>

          <div className='mt-5 py-4 space-y-3 border-t border-gray-200'>
            <h3 className='text-2xl font-bold'>Shipping</h3>
            <h3 className='text-lg'>Shipping solutions for the selected quantity are currently unavailable</h3>
            
            <div className='w-full flex justify-between items-center'>
              <button className='bg-orange-500 border border-orange-500 px-5 py-2 rounded-full text-white font-bold hover:bg-transparent hover:text-orange-500'>Order request</button>
              <button className='border border-orange-500 rounded-full px-5 py-2 text-orange-500 font-bold hover:bg-orange-500 hover:text-white'>Contact Supplier</button>
              <FaRegMessage size={25} className='text-orange-500'/>
            </div>
          </div>

          <div className='mt-5 py-4 space-y-3 border-t border-gray-200'>
            <h3 className='text-2xl font-bold'>Membership benefits</h3>
            <h3 className='text-lg'>Claim US $80 in coupons every month <span>View more</span></h3>
          </div>

          <div className='mt-5 py-4 space-y-4 border-t border-gray-200'>
            <h3 className='text-2xl font-bold'>Protections for this product</h3>
            <div className='grid grid-cols-4 items-center justify-center'>
              <RiSecurePaymentLine size={40} className='text-center mx-auto text-orange-500'/>
              <div className='col-span-3'>
                <h3 className='text-xl font-bold'>Secure payment</h3>
                <p>Every payment you make on Alibaba.com is secured with strict SSL encryption and PCI DSS data protection protocols</p>
              </div>
            </div>
            <div className='grid grid-cols-4 items-center justify-center'>
              <FaCreditCard size={30} className='text-center mx-auto text-orange-500'/>
              <div className='col-span-3'>
                <h3 className='text-xl font-bold'>Refund policy</h3>
                <p>Claim a refund if your order doesn't ship, is missing, or arrives with product issues</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductDetail