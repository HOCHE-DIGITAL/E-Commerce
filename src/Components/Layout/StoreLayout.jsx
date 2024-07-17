import React from 'react'
import Topbar from '../Shared/Topbar'
import Footer from '../Shared/Footer'
import { Outlet } from 'react-router-dom'

const StoreLayout = () => {
  return (
    <div>
        <Topbar/>
            <Outlet/>
        <Footer/>
    </div>
  )
}

export default StoreLayout