import React from 'react'
import { BiCategoryAlt } from "react-icons/bi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Features = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-16 bg-[#0C243C] text-white'>
      <div className='space-y-5 flex flex-col px-8 py-8 rounded-lg hover:bg-[#1C5768]/50 mx-auto bg-white/5'>
          <BiCategoryAlt className='text-6xl p-3 bg-[#DAB785] rounded-full'/>
          <h3 className='text-2xl font-bold'>Millions of business offerings</h3>
          <p className='text-md'>Explore products and suppliers for your business from millions of offerings worldwide</p>
      </div>
      <div className='space-y-5 flex flex-col px-8 py-8 rounded-lg hover:bg-[#1C5768]/50 mx-auto bg-white/5'>
          <BiCategoryAlt className='text-6xl p-3 bg-[#DAB785] rounded-full'/>
          <h3 className='text-2xl font-bold'>Assured quality and transactions</h3>
          <p className='text-md'>Ensure production quality from verified suppliers, with your orders protected from payment to delivery.</p>
      </div>
      <div className='space-y-5 flex flex-col px-8 py-8 rounded-lg hover:bg-[#1C5768]/50 mx-auto bg-white/5'>
          <BiCategoryAlt className='text-6xl p-3 bg-[#DAB785] rounded-full'/>
          <h3 className='text-2xl font-bold'>One-stop trading solutions</h3>
          <p className='text-md'>Order seamlessly from product/supplier search to order management, payment, and fulfillment.</p>
      </div>
      <div className='space-y-5 flex flex-col px-8 py-8 rounded-lg hover:bg-[#1C5768]/50 mx-auto bg-white/5'>
          <BiCategoryAlt className='text-6xl p-3 bg-[#DAB785] rounded-full'/>
          <h3 className='text-2xl font-bold'>Tailored trading experience</h3>
          <p className='text-md'>Get curated benefits, such as exclusive discounts, enhanced protection, and extra support, to help grow your business every step of the way.</p>
      </div>
    </div>
  )
}

export default Features