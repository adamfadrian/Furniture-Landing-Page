import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const Navbar = () => {
    const [isMobile , setIsMobile] = useState<boolean>(false)
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    // toggle mui for nav link furniture
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    //toggle hide nav links when mobile device 
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    // to make a logo responsive on mobile device
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 375);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div className=' mx-auto h-36 w-full lg:px-[100px] shadow-md  flex items-center'>
            <div className='w-full flex bg-transparent p-6 items-center my-auto'>
                {/* Logo Deekor */}
                    <div className='flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={`${isMobile ? "108" : "161"}`} height={`${isMobile ? "32" : "48"}`}  viewBox="0 0 161 48" fill="none">
                            <path d="M7.68 20.16C7.68 12.0703 7.68 8.02545 9.62147 5.11983C10.462 3.86196 11.542 2.78195 12.7998 1.94147C15.7054 0 19.7503 0 27.84 0C35.9297 0 39.9746 0 42.8802 1.94147C44.138 2.78195 45.218 3.86196 46.0585 5.11983C48 8.02545 48 12.0703 48 20.16C48 28.2497 48 32.2946 46.0585 35.2002C45.218 36.458 44.138 37.538 42.8802 38.3785C39.9746 40.32 35.9297 40.32 27.84 40.32C19.7503 40.32 15.7054 40.32 12.7998 38.3785C11.542 37.538 10.462 36.458 9.62147 35.2002C7.68 32.2946 7.68 28.2497 7.68 20.16Z" fill="#553B33" />
                            <path d="M0 23.04C0 15.7992 0 12.1788 2.24942 9.92942C4.49884 7.68 8.11923 7.68 15.36 7.68H24.96C32.2008 7.68 35.8212 7.68 38.0706 9.92942C40.32 12.1788 40.32 15.7992 40.32 23.04V32.64C40.32 39.8808 40.32 43.5012 38.0706 45.7506C35.8212 48 32.2008 48 24.96 48H15.36C8.11923 48 4.49884 48 2.24942 45.7506C0 43.5012 0 39.8808 0 32.64V23.04Z" fill="#2F241F" />
                            <path d="M69.3819 35.0399H61.4619V12.6981H69.4474C71.6946 12.6981 73.6292 13.1454 75.251 14.0399C76.8728 14.9272 78.1201 16.2036 78.9928 17.869C79.8728 19.5345 80.3128 21.5272 80.3128 23.8472C80.3128 26.1745 79.8728 28.1745 78.9928 29.8472C78.1201 31.5199 76.8656 32.8036 75.2292 33.6981C73.6001 34.5927 71.651 35.0399 69.3819 35.0399ZM66.1856 30.9927H69.1856C70.5819 30.9927 71.7565 30.7454 72.7092 30.2508C73.6692 29.749 74.3892 28.9745 74.8692 27.9272C75.3565 26.8727 75.6001 25.5127 75.6001 23.8472C75.6001 22.1963 75.3565 20.8472 74.8692 19.7999C74.3892 18.7527 73.6728 17.9818 72.7201 17.4872C71.7674 16.9927 70.5928 16.7454 69.1965 16.7454H66.1856V30.9927Z" fill="#2F241F" />
                            <path d="M90.1322 35.3672C88.4086 35.3672 86.9249 35.0181 85.6813 34.3199C84.4449 33.6145 83.4922 32.6181 82.8231 31.3308C82.154 30.0363 81.8195 28.5054 81.8195 26.7381C81.8195 25.0145 82.154 23.5018 82.8231 22.1999C83.4922 20.8981 84.434 19.8836 85.6486 19.1563C86.8704 18.429 88.3031 18.0654 89.9468 18.0654C91.0522 18.0654 92.0813 18.2436 93.034 18.5999C93.994 18.949 94.8304 19.4763 95.5431 20.1818C96.2631 20.8872 96.8231 21.7745 97.2231 22.8436C97.6231 23.9054 97.8231 25.149 97.8231 26.5745V27.8508H83.674V24.9708H93.4486C93.4486 24.3018 93.3031 23.709 93.0122 23.1927C92.7213 22.6763 92.3177 22.2727 91.8013 21.9818C91.2922 21.6836 90.6995 21.5345 90.0231 21.5345C89.3177 21.5345 88.6922 21.6981 88.1468 22.0254C87.6086 22.3454 87.1868 22.7781 86.8813 23.3236C86.5758 23.8618 86.4195 24.4618 86.4122 25.1236V27.8618C86.4122 28.6908 86.5649 29.4072 86.8704 30.0108C87.1831 30.6145 87.6231 31.0799 88.1904 31.4072C88.7577 31.7345 89.4304 31.8981 90.2086 31.8981C90.7249 31.8981 91.1977 31.8254 91.6268 31.6799C92.0558 31.5345 92.4231 31.3163 92.7286 31.0254C93.034 30.7345 93.2668 30.3781 93.4268 29.9563L97.7249 30.2399C97.5068 31.2727 97.0595 32.1745 96.3831 32.9454C95.714 33.709 94.8486 34.3054 93.7868 34.7345C92.7322 35.1563 91.514 35.3672 90.1322 35.3672Z" fill="#2F241F" />
                            <path d="M103.838 30.2181L103.849 24.6436H104.525L109.892 18.2836H115.227L108.016 26.7054H106.914L103.838 30.2181ZM99.627 35.0399V12.6981H104.274V35.0399H99.627ZM110.1 35.0399L105.169 27.7418L108.267 24.4581L115.543 35.0399H110.1Z" fill="#2F241F" />
                            <path d="M123.159 35.3672C121.465 35.3672 119.999 35.0072 118.763 34.2872C117.534 33.5599 116.585 32.549 115.916 31.2545C115.246 29.9527 114.912 28.4436 114.912 26.7272C114.912 24.9963 115.246 23.4836 115.916 22.189C116.585 20.8872 117.534 19.8763 118.763 19.1563C119.999 18.429 121.465 18.0654 123.159 18.0654C124.854 18.0654 126.316 18.429 127.545 19.1563C128.781 19.8763 129.734 20.8872 130.403 22.189C131.072 23.4836 131.406 24.9963 131.406 26.7272C131.406 28.4436 131.072 29.9527 130.403 31.2545C129.734 32.549 128.781 33.5599 127.545 34.2872C126.316 35.0072 124.854 35.3672 123.159 35.3672ZM123.181 31.7672C123.952 31.7672 124.596 31.549 125.112 31.1127C125.628 30.669 126.017 30.0654 126.279 29.3018C126.548 28.5381 126.683 27.669 126.683 26.6945C126.683 25.7199 126.548 24.8508 126.279 24.0872C126.017 23.3236 125.628 22.7199 125.112 22.2763C124.596 21.8327 123.952 21.6108 123.181 21.6108C122.403 21.6108 121.748 21.8327 121.217 22.2763C120.694 22.7199 120.297 23.3236 120.028 24.0872C119.766 24.8508 119.636 25.7199 119.636 26.6945C119.636 27.669 119.766 28.5381 120.028 29.3018C120.297 30.0654 120.694 30.669 121.217 31.1127C121.748 31.549 122.403 31.7672 123.181 31.7672Z" fill="#2F241F" />
                            <path d="M140.77 35.3672C139.076 35.3672 137.61 35.0072 136.374 34.2872C135.145 33.5599 134.196 32.549 133.527 31.2545C132.858 29.9527 132.523 28.4436 132.523 26.7272C132.523 24.9963 132.858 23.4836 133.527 22.189C134.196 20.8872 135.145 19.8763 136.374 19.1563C137.61 18.429 139.076 18.0654 140.77 18.0654C142.465 18.0654 143.927 18.429 145.156 19.1563C146.392 19.8763 147.345 20.8872 148.014 22.189C148.683 23.4836 149.018 24.9963 149.018 26.7272C149.018 28.4436 148.683 29.9527 148.014 31.2545C147.345 32.549 146.392 33.5599 145.156 34.2872C143.927 35.0072 142.465 35.3672 140.77 35.3672ZM140.792 31.7672C141.563 31.7672 142.207 31.549 142.723 31.1127C143.239 30.669 143.629 30.0654 143.89 29.3018C144.159 28.5381 144.294 27.669 144.294 26.6945C144.294 25.7199 144.159 24.8508 143.89 24.0872C143.629 23.3236 143.239 22.7199 142.723 22.2763C142.207 21.8327 141.563 21.6108 140.792 21.6108C140.014 21.6108 139.359 21.8327 138.829 22.2763C138.305 22.7199 137.909 23.3236 137.639 24.0872C137.378 24.8508 137.247 25.7199 137.247 26.6945C137.247 27.669 137.378 28.5381 137.639 29.3018C137.909 30.0654 138.305 30.669 138.829 31.1127C139.359 31.549 140.014 31.7672 140.792 31.7672Z" fill="#2F241F" />
                            <path d="M150.811 35.0399V18.2836H155.316V21.2072H155.491C155.796 20.1672 156.309 19.3818 157.029 18.8508C157.749 18.3127 158.578 18.0436 159.516 18.0436C159.749 18.0436 160 18.0581 160.269 18.0872C160.538 18.1163 160.774 18.1563 160.978 18.2072V22.3308C160.76 22.2654 160.458 22.2072 160.072 22.1563C159.687 22.1054 159.334 22.0799 159.014 22.0799C158.331 22.0799 157.72 22.229 157.182 22.5272C156.651 22.8181 156.229 23.2254 155.916 23.749C155.611 24.2727 155.458 24.8763 155.458 25.5599V35.0399H150.811Z" fill="#2F241F" />
                        </svg>
                    </div>
                    {/* Middle nav Links */}
                    <div
                        className={`w-full ${isOpen ? 'block' : 'hidden'
                            } lg:flex  lg:w-auto mx-auto`}
                    >
                        <div className={` font-semibold items-center  ${isOpen ? '' : 'flex space-x-10'}`}>
                            <Link className='block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-black mr-4' href={'#AboutUs'}>
                                <h1 className='text-lg font-semibold'>About us</h1>
                            </Link>

                            <div className='block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-black mr-4'>
                                <Button
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    style={{ textTransform: 'none' }}
                                >

                                    <h1 className='text-customColor flex text-lg font-medium items-center'>Furniture <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_4_593)">
                                            <path d="M7.41 8.58997L12 13.17L16.59 8.58997L18 9.99997L12 16L6 9.99997L7.41 8.58997Z" fill="#2F241F" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4_593">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    </h1>
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>Chair</MenuItem>
                                    <MenuItem onClick={handleClose}>Bed</MenuItem>
                                    <MenuItem onClick={handleClose}>Sofa</MenuItem>
                                </Menu>
                            </div>

                            <Link className='block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-black mr-4' href={'#Partnerships'}>
                                <h1 className='text-lg font-semibold' > Partnerships</h1>
                            </Link>
                            <Link className='block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-black' href={'#Contacts'}>
                                <h1 className='text-lg font-semibold'>Contacts</h1>
                            </Link>
                        </div>
                    </div>
                    {/* sign up and shop icons nav links */}
                    <div className={` ml-20 gap-2 justify-center items-center  ${isOpen ? 'block' : ' hidden lg:flex'}`}>
                        <Link href={''}>
                            <Button className='bg-signUp py-3 px-6 h-12 text-customColor lg:text-base font-medium'>sign up</Button>
                        </Link>

                        <div className="p-3 h-12 w-12 flex justify-center items-center  rounded-lg bg-colorLight">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clipPath="url(#clip0_4_583)">
                                    <path d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM18 20H6V8H8V10C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 10V8H14V10C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 10V8H18V20Z" fill="#E5F1B5" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_4_583">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>

                {/* icons when mobile device */}
                    <div className='flex justify-end lg:hidden w-full'>
                        <button
                            onClick={toggleMenu}
                            className='flex items-center px-3 py-2 border rounded  text-gray-500 border-gray-600 hover:text-black hover:border-black'
                        >
                            <svg
                                className='fill-current h-3 w-3'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <title>Menu</title>
                                <path
                                    d='M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z'
                                />
                            </svg>
                        </button>
                    </div>
            </div>
        </div>
    );
};

export default Navbar;
