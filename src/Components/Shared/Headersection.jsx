import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import { EffectCoverflow, EffectFade, Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Headersection = () => {


    const category = [
        {
            id: 1,
            categoryName: 'CategoryOne',
            image: 'https://cdna.lystit.com/photos/italist/3a6ac578/gallery-dept-Black-T-shirt.jpeg',
        },
        {
            id: 2,
            categoryName: 'CategoryTwo',
            image: 'https://i.ebayimg.com/images/g/IXsAAOSwo8diw2sC/s-l1600.jpg',
        },
        {
            id: 3,
            categoryName: 'CategoryThree',
            image: 'https://image.made-in-china.com/202f0j00dzCotKTahbqc/Gallery-Dept-T-Shrit-Women-Unisex-Shirts-Tee.jpg',
        },
        {
            id: 4,
            categoryName: 'CategoryFour',
            image: 'https://i.pinimg.com/736x/7a/a8/11/7aa81135a49b36da12a72faa0fd58add.jpg',
        },{
            id: 5,
            categoryName: 'CategoryFive',
            image: 'https://cdna.lystit.com/photos/italist/3a6ac578/gallery-dept-Black-T-shirt.jpeg',
        },
        {
            id: 6,
            categoryName: 'CategorySix',
            image: 'https://i.ebayimg.com/images/g/IXsAAOSwo8diw2sC/s-l1600.jpg',
        },
        {
            id: 7,
            categoryName: 'CategorySeven',
            image: 'https://image.made-in-china.com/202f0j00dzCotKTahbqc/Gallery-Dept-T-Shrit-Women-Unisex-Shirts-Tee.jpg',
        },
        {
            id: 8,
            categoryName: 'CategoryEight',
            image: 'https://i.pinimg.com/736x/7a/a8/11/7aa81135a49b36da12a72faa0fd58add.jpg',
        },{
            id: 9,
            categoryName: 'CategoryNine',
            image: 'https://cdna.lystit.com/photos/italist/3a6ac578/gallery-dept-Black-T-shirt.jpeg',
        },
        {
            id: 10,
            categoryName: 'CategoryTen',
            image: 'https://i.ebayimg.com/images/g/IXsAAOSwo8diw2sC/s-l1600.jpg',
        },
        {
            id: 11,
            categoryName: 'CategoryEleven',
            image: 'https://image.made-in-china.com/202f0j00dzCotKTahbqc/Gallery-Dept-T-Shrit-Women-Unisex-Shirts-Tee.jpg',
        },
        {
            id: 12,
            categoryName: 'CategoryTwelve',
            image: 'https://i.pinimg.com/736x/7a/a8/11/7aa81135a49b36da12a72faa0fd58add.jpg',
        },
        
    ]


    const cat = category.map(
        (item) => {
            return (
                <SwiperSlide key={item.id}> 
                    <div className='space-y-2 my-3 mx-auto flex flex-col justify-center items-center'>
                        <img className='w-16 h-16 object-cover rounded-full shadow-md' src={item.image}/>
                        <h3 className='text-md'>{item.categoryName}</h3>
                    </div>
                </SwiperSlide>
            )
        }
    )

  return (
    <div className=' bg-[#0C243C] text-white text-center flex flex-col pt-10'>
        <h3 className='text-4xl font-bold'>Title</h3>
        <h3 className='text'>Discover new and trending products</h3>

        <div className='relative bg-white text-black w-3/4 mx-auto my-10 rounded-md p-5'>
            <h3 className='text-xl font-bold text-start'>Top categories</h3>
            {/* <div id='slider' className='w-full h-full flex gap-20 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {cat}
            </div> */}
            <Swiper
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            direction={'horizontal'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
             slidesPerView={5}
             spaceBetween={20}
             navigation={true}
             modules={[Pagination, Autoplay, EffectCoverflow, Navigation]}
             
             className="mySwiper min-w-full "
          >
        {cat}
        </Swiper>
         
              
        </div>
    </div>
  )
}

export default Headersection