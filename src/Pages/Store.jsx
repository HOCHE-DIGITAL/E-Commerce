import React from 'react'
import Headersection from '../Components/Shared/Headersection'
import Ad05 from '../Components/Store/Ad05'
import Ad06 from '../Components/Store/Ad06'
import { Link } from 'react-router-dom'

const Store = () => {


  const product = [
    {
        id: 1,
        productName: 'Product One',
        price: 1000,
        image: 'https://cdna.lystit.com/photos/italist/3a6ac578/gallery-dept-Black-T-shirt.jpeg',
    },
    {
        id: 2,
        productName: 'Product Two',
        price: 1000,
        image: 'https://i.ebayimg.com/images/g/IXsAAOSwo8diw2sC/s-l1600.jpg',
    },
    {
        id: 3,
        productName: 'Product Three',
        price: 1000,
        image: 'https://image.made-in-china.com/202f0j00dzCotKTahbqc/Gallery-Dept-T-Shrit-Women-Unisex-Shirts-Tee.jpg',
    },
    {
        id: 4,
        productName: 'Product Four',
        price: 1000,
        image: 'https://i.pinimg.com/736x/7a/a8/11/7aa81135a49b36da12a72faa0fd58add.jpg',
    },{
        id: 5,
        productName: 'Product Five',
        price: 1000,
        image: 'https://cdna.lystit.com/photos/italist/3a6ac578/gallery-dept-Black-T-shirt.jpeg',
    },
    {
        id: 6,
        productName: 'Product Six',
        price: 1000,
        image: 'https://i.ebayimg.com/images/g/IXsAAOSwo8diw2sC/s-l1600.jpg',
    },
    {
        id: 7,
        productName: 'Product Seven',
        price: 1000,
        image: 'https://image.made-in-china.com/202f0j00dzCotKTahbqc/Gallery-Dept-T-Shrit-Women-Unisex-Shirts-Tee.jpg',
    },
    {
        id: 8,
        productName: 'Product Eight',
        price: 1000,
        image: 'https://i.pinimg.com/736x/7a/a8/11/7aa81135a49b36da12a72faa0fd58add.jpg',
    },{
        id: 9,
        productName: 'Product Nine',
        price: 1000,
        image: 'https://cdna.lystit.com/photos/italist/3a6ac578/gallery-dept-Black-T-shirt.jpeg',
    },
    {
        id: 10,
        productName: 'Product Ten',
        price: 1000,
        image: 'https://i.ebayimg.com/images/g/IXsAAOSwo8diw2sC/s-l1600.jpg',
    },
    {
        id: 11,
        productName: 'Product Eleven',
        price: 1000,
        image: 'https://image.made-in-china.com/202f0j00dzCotKTahbqc/Gallery-Dept-T-Shrit-Women-Unisex-Shirts-Tee.jpg',
    },
    {
        id: 12,
        productName: 'Product Twelve',
        price: 1000,
        image: 'https://i.pinimg.com/736x/7a/a8/11/7aa81135a49b36da12a72faa0fd58add.jpg',
    },
    
]


const prod = product.map(
    (item) => {
        return (
            <Link to='/product' key={item.id} className='space-y-2 my-3 bg-white p-5 rounded-md'>
                <img className='h-40 w-full object-cover object-center rounded-lg shadow-md' src={item.image}/>
                <h3 className='text-md font h--bold my-2'>{item.productName}</h3>
                <h3 className=''><span className='text-3xl font-bold'>{item.price}</span> ETB</h3>
                <h3 className='text-md font h--bold my-2'>Min.Order: 1 piece</h3> 
            </Link>
        )
    }
)

  return (
    <div>
      <Headersection/>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 bg-gray-100 p-16'>
        {prod}
      </div>

      <Ad05/>
      <Ad06/>
      

    </div>
  )
}

export default Store