import React from 'react'
import Topbar from '../Shared/Topbar'
import Navbar from '../Shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer'

const Layout = () => {
  return (
    <div>
        <Topbar/>
            <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout