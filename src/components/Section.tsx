import React from 'react'

const Section = () => {
    return (
        <div className='bg-customColor h-[380px] py-8 px-6  lg:h-[486px] lg:py-[72px] lg:px-[142px] '>
            <div className='flex flex-col text-signUp gap-6 lg:gap-10'>
                <h1 className='lg:text-2xl lg:text-left text-center font-thin'>WHY CHOOSE US?</h1>
                <h1 className=' lg:text-[54px] font-bold text-[24px] text-center lg:text-left'>We care about details and the quality of our products</h1>
                <div className='flex flex-col lg:flex-row lg:gap-16 items-center justify-center mx-auto gap-4'>
                    {/* MANUFACTURED WITH QUALITY MATERIALS */}
                    <div className='w-full flex items-center gap-3 mt-2 lg:mt-0 ml-2 lg:ml-0'>
                        <div className='flex p-2 bg-sectionColor rounded lg:w-10 lg:h-10 items-center justify-center text-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clipPath="url(#clip0_4_506)">
                                    <path d="M15.5 14H14.71L14.43 13.73C15.63 12.33 16.25 10.42 15.91 8.39002C15.44 5.61002 13.12 3.39002 10.32 3.05002C6.09001 2.53002 2.53002 6.09001 3.05002 10.32C3.39002 13.12 5.61002 15.44 8.39002 15.91C10.42 16.25 12.33 15.63 13.73 14.43L14 14.71V15.5L18.25 19.75C18.66 20.16 19.33 20.16 19.74 19.75C20.15 19.34 20.15 18.67 19.74 18.26L15.5 14ZM9.50002 14C7.01002 14 5.00002 11.99 5.00002 9.50002C5.00002 7.01002 7.01002 5.00002 9.50002 5.00002C11.99 5.00002 14 7.01002 14 9.50002C14 11.99 11.99 14 9.50002 14Z" fill="#F4F4F4" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_4_506">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <h1 className='lg:text-2xl font-bold'>
                            MANUFACTURED WITH QUALITY MATERIALS
                        </h1>
                    </div>
                    {/*5 YEARS OF WARRANTY FOR EACH PROFUCT */}
                    <div className='flex gap-3 items-center  w-full ml-2 lg:ml-0'>
                        <div className='flex p-2 bg-sectionColor rounded lg:w-10 lg:h-10 items-center justify-center text-center'>
                            <h1 className=' text-2xl lg:text-2xl font-bold  w-6'>5</h1>
                        </div>
                        <h1 className='lg:text-2xl font-bold'>
                            5 YEARS OF WARRANTY FOR EACH PROFUCT
                        </h1>
                    </div>
                    {/* 20 YEARS OF EXPERTISE */}
                    <div className='flex gap-3 items-center  w-full ml-2 lg:ml-0'>
                        <div className='flex p-2 bg-sectionColor rounded lg:w-10 lg:h-10 items-center justify-center text-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clipPath="url(#clip0_4_515)">
                                    <path d="M14 6V4H10V6H14ZM4 9V18C4 18.55 4.45 19 5 19H19C19.55 19 20 18.55 20 18V9C20 8.45 19.55 8 19 8H5C4.45 8 4 8.45 4 9ZM20 6C21.11 6 22 6.89 22 8V19C22 20.11 21.11 21 20 21H4C2.89 21 2 20.11 2 19L2.01 8C2.01 6.89 2.89 6 4 6H8V4C8 2.89 8.89 2 10 2H14C15.11 2 16 2.89 16 4V6H20Z" fill="#F4F4F4" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_4_515">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <h1 className='lg:text-2xl font-bold'>20 YEARS OF EXPERTISE</h1>
                    </div>

                    {/* end */}
                </div>
            </div>
        </div>
    )
}

export default Section

