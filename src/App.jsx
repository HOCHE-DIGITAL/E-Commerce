import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Components/layout/IndexLayout'
import Index from './Pages/Index'
import StoreLayout from './Components/Layout/StoreLayout'
import Store from './Pages/Store'
import ProductDetail from './Pages/ProductDetail'
import Cart from './Pages/Cart'

function App() {
  
  const route = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path='/' element={<Layout/>} >
        <Route index element={<Index/> }/>
        
        <Route path='/store' element={<Store/>}/>
        <Route path='/product' element={<ProductDetail/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Route>
      
    </>
     
  ))

  return (
    <RouterProvider router={route}/>
  )
}

export default App
