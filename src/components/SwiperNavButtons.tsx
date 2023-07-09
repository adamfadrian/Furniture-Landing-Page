import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';

export const SwiperNavButtons = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false)
    const swiper = useSwiper();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.matchMedia('(max-width: 376px)').matches);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`swiper-nav-btns flex  ${isMobile ? 'absolute top-16 left-0 right-0 justify-between z-20' : ''} lg:gap-6 lg:justify-end lg:mr-[190px]`}>
            {/* prev Button */}
            <button className='flex justify-center items-center bg-signUp rounded-full w-12 h-12 lg:w-14 lg:h-14' onClick={() => isMobile ? swiper.slidePrev() :  swiper.slideNext()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clipPath="url(#clip0_4_568)">
                        <path d="M17.51 3.86998L15.73 2.09998L5.84 12L15.74 21.9L17.51 20.13L9.38 12L17.51 3.86998V3.86998Z" fill="#2F241F" />
                    </g>
                    <defs>
                        <clipPath id="clip0_4_568">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </button>
            {/* next Button */}
            <button className='flex justify-center items-center bg-signUp rounded-full w-12 h-12 lg:w-14 lg:h-14' onClick={() => isMobile ? swiper.slideNext() : swiper.slidePrev()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clipPath="url(#clip0_4_570)">
                        <path d="M6.48999 20.13L8.25999 21.9L18.16 12L8.25999 2.09998L6.48999 3.86998L14.62 12L6.48999 20.13V20.13Z" fill="#2F241F" />
                    </g>
                    <defs>
                        <clipPath id="clip0_4_570">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </button>
        </div>
    );
};
