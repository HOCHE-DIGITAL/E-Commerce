import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-5 border-t-2 border-gray-200 p-10'>
        <div className=''>
          <h3 className='text-xl font-bold my-4' >Get support</h3>
          <ul className='space-y-3'>
            <li>Loreum epsum</li>
            <li>Loreum epsum</li>
            <li>Loreum epsum</li>
            <li>Loreum epsum</li>
            <li>Loreum epsum</li>
          </ul>
        </div>
        <div className=''>
          <h3 className='text-xl font-bold my-4' >Trade Assurance</h3>
          <ul className='space-y-3'>
            <li>Loreum epsum</li>
            <li>Loreum epsum</li>
            <li>Loreum epsum</li>
            <li>Loreum epsum</li>
            <li>Loreum epsum</li>
          </ul>
        </div>
        <div className=''>
          <h3 className='text-xl font-bold my-4' >Source on website.com</h3>
          <ul className='space-y-3'>
            <li>Loreum epsum</li>
            <li>Loreum epsum</li>
            <li>Loreum epsum</li>
            <li>Loreum epsum</li>
            <li>Loreum epsum</li>
          </ul>
        </div>
        <div className=''>
          <h3 className='text-xl font-bold my-4' >Sell on website.com</h3>
          <ul className='space-y-3'>
            <li>Loreum epsum</li>
            <li>Loreum epsum</li>
            <li>Loreum epsum</li>
            <li>Loreum epsum</li>
            <li>Loreum epsum</li>
          </ul>
        </div>
        <div className=''>
          <h3 className='text-xl font-bold my-4' >Get to know us</h3>
          <ul className='space-y-3'>
            <li>Loreum epsum</li>
            <li>Loreum epsum</li>
            <li>Loreum epsum</li>
            <li>Loreum epsum</li>
          </ul>
        </div>
      </div>
      
      <div className='text-center md:flex justify-between py-5 px-10'>
          <ul className='flex justify-evenly text-3xl text-gray-500 space-x-8'>
            <li><FaFacebookSquare/></li>
            <li><FaLinkedin/></li>
            <li><FaInstagram/></li>
            <li><FaYoutube/></li>
          </ul>
          <div>
            <h3 className='text-md'>Trade on the go with the <span className='underline'>website.com app</span></h3>
          </div>
      </div>
    </>
  )
}

export default Footer