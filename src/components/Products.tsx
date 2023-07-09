import React, { useEffect, useState } from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperNavButtons } from '@/components/SwiperNavButtons';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import furniture_image1 from '@/public/best_1.png'
import furniture_image2 from '@/public/best_2.png'
import furniture_image3 from '@/public/best_3.png'
import furniture_image4 from '@/public/best_4.png'
import furniture_image5 from '@/public/best_5.png'
import { Button } from '@mui/material';


const Products = () => {
    // state for current slide
    const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false)

    // to know when mobile device
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.matchMedia('(max-width: 376px)').matches);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // how to know current slide
    const handleSlideChange = (swiper: any) => {
        setActiveSlideIndex(swiper.activeIndex);
    };
    return (
        <div className="w-full px-4 py-8 lg:px-9 lg:py-20 bg-customColor flex flex-col gap-12 relative">
            <div className='flex lg:mx-[142px] justify-between items-center'>
                <div className='flex flex-col lg:text-2xl font-normal gap-2'>
                    {/* when mobile device text become 'Categories' and when desktop become 'OUR PRODUCTS' */}
                    {isMobile ? (
                        <h1 className="text-signUp text-sm">Categories</h1>
                    ) : (
                        <h1 className="text-signUp text-sm">OUR PRODUCTS</h1>
                    )}
                    <h1 className='text-signUp text-lg lg:text-[48px] font-bold'>This month&apos;s best seller</h1>
                </div>
                <button className='flex items-center justify-center font-normal text-customColor py-3 px-4 bg-signUp rounded-xl lg:w-[153px] lg:h-[52px] lg:text-base   '>
                    SEE MORE
                </button>
            </div>
            <h1>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={36}
                    slidesPerView="auto"
                    onSlideChange={handleSlideChange}
                >
                    <SwiperSlide className="bg-center bg-cover bg-no-repeat min-w-[192px] max-w-[192px] min-h-[217px] lg:min-w-[300px] lg:max-w-[300px] lg:min-h-[400px] rounded-xl" style={{ backgroundImage: `url(${furniture_image1.src})` }} />
                    <SwiperSlide className={` bg-center bg-cover bg-no-repeat pt-[164px] pl-4 min-w-[192px] max-w-[192px] lg:pl-6 lg:pt-[318px] lg:min-w-[300px] lg:max-w-[300px] ${activeSlideIndex === 1 ? 'lg:min-h-[472px] min-h-[256px]' : 'lg:min-h-[400px] min-h-[217px] '} rounded-xl`} style={{ backgroundImage: `url(${furniture_image2.src})` }}>
                        {activeSlideIndex === 1 ?
                            <div className='flex flex-col gap-3'>
                                <div className='py-2 px-4 w-[68px] h-9 lg:w-[93px] lg:h-[52px] flex items-center justify-center glass-effect' >
                                    <h1 className='text-lg lg:text-2xl font-normal text-center text-black'>$329</h1>
                                </div>
                                <h1 className=' text-2xl lg:text-[48px] text-white font-normal'>Und Chair</h1>
                            </div> : <></>}
                    </SwiperSlide>
                    <SwiperSlide className={` bg-center bg-cover bg-no-repeat pt-[164px] pl-4 min-w-[192px] max-w-[192px] lg:pl-6 lg:pt-[318px] lg:min-w-[300px] lg:max-w-[300px] ${isMobile && activeSlideIndex === 2 ? 'lg:min-h-[472px] min-h-[256px]' : 'lg:min-h-[400px] min-h-[217px]'} ${activeSlideIndex === 0 ? 'lg:min-h-[472px] min-h-[256px]' : 'lg:min-h-[400px] min-h-[217px]'} rounded-xl`} style={{ backgroundImage: `url(${furniture_image3.src})` }}>
                        {activeSlideIndex === 0 ?
                            <div className='flex flex-col gap-3'>
                                <div className='py-2 px-4 w-[68px] h-9 lg:w-[93px] lg:h-[52px] flex items-center justify-center glass-effect' >
                                    <h1 className='text-lg lg:text-2xl font-normal text-center text-black'>$329</h1>
                                </div>
                                <h1 className='text-2xl lg:text-[48px] text-white font-normal'>Sofa Und</h1>
                            </div> : <></>
                        }
                        {/* in the mobile device the activeSlideIndex change idk why so this is for mobile device to show the text */}
                        {
                            isMobile && activeSlideIndex === 2 ? 
                            <div className='flex flex-col gap-3'>
                                <div className='py-2 px-4 w-[68px] h-9 lg:w-[93px] lg:h-[52px] flex items-center justify-center glass-effect' >
                                    <h1 className='text-lg lg:text-2xl font-normal text-center text-black'>$329</h1>
                                </div>
                                <h1 className='text-2xl lg:text-[48px] text-white font-normal'>Sofa Und</h1>
                            </div> : <></>
                        }
                    </SwiperSlide>
                    <SwiperSlide className="bg-center bg-cover bg-no-repeat min-w-[192px] max-w-[192px] min-h-[217px] lg:min-w-[300px] lg:max-w-[300px] lg:min-h-[400px] rounded-xl" style={{ backgroundImage: `url(${furniture_image4.src})` }} />
                    <SwiperSlide className="bg-center bg-cover bg-no-repeat min-w-[192px] max-w-[192px] min-h-[217px] lg:min-w-[300px] lg:max-w-[300px] lg:min-h-[400px] rounded-xl" style={{ backgroundImage: `url(${furniture_image5.src})` }} />
                    <SwiperNavButtons />
                </Swiper>
            </h1>
        </div>
    )
}

export default Products