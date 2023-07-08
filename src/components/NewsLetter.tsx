import React from 'react'

const NewsLetter = () => {
    return (
        <div className='flex py-8 px-4 lg:py-20 lg:px-36 bg-partnerBg  '>
                <div className='flex flex-col gap-6 lg:gap-10'>
                    <div className='flex flex-col text-center gap-2 lg:text-left px-4 lg:px-0'>
                        <h1 className=' text-sm lg:text-2xl text-customColor'>LIMITED DEALS</h1>
                        <h1 className=' text-[18px] lg:text-[64px] font-bold text-customColor'>
                            Become a member and get 10% off of your first purchase
                        </h1>
                    </div>
                    {/* mock input with email button */}
                    <div className='flex  px-4 lg:px-0'>
                        <div className='flex items-center w-[256px] py-4 px-4 lg:py-[22px] lg:px-9 bg-white lg:w-[503px] rounded-l-lg'>
                            <h1 className='text-center text-xs lg:text-2xl'>Enter your email here</h1>
                        </div>
                        {/* the email button but doesn't work */}
                        <div className='flex bg-signUp rounded-r-lg w-12 h-12 lg:w-20 lg:h-20 items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clipPath="url(#clip0_4_578)">
                                    <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 10.99L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#2F241F" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_4_578">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    {/* ends */}
                </div>
            </div>
    )
}

export default NewsLetter