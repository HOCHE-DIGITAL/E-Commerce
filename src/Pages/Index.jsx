import React from 'react'
import Herosection from '../Components/Index/Herosection'
import Features from '../Components/Index/Features'
import Explore from '../Components/Index/Explore'
import Discover from '../Components/Index/Discover'
import Ad01 from '../Components/Index/Ad01'
import Ad02 from '../Components/Index/Ad02'
import Ad03 from '../Components/Index/Ad03'
import Testimonial from '../Components/Index/Testimonial'
import Ad04 from '../Components/Index/Ad04'
import Country from '../Components/Index/Country'
import Factory from '../Components/Index/Factory'

const Index = () => {
  return (
    <div>
      <Herosection/>
      <Features/>
      <Explore/>
      <Discover/>
      <Factory/>
      <Ad01/>
      <Ad02/>
      <Testimonial/>
      <Ad03/>
      <Ad04/>
      <Country/>
    </div>
  )
}

export default Index