import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import chair from '@/public/chair_sekawan.png'
import chair_mobile from '@/public/chair_mobile.png'
import {
    createTheme,
    PaletteColorOptions,
    ThemeProvider,
} from '@mui/material/styles';

// customize mui color
declare module '@mui/material/styles' {
    interface CustomPalette {
        anger: PaletteColorOptions;
        brown: PaletteColorOptions;
        steelBlue: PaletteColorOptions;
        brown2: PaletteColorOptions;
    }
    interface Palette extends CustomPalette { }
    interface PaletteOptions extends CustomPalette { }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        anger: true;
        brown: true;
        steelBlue: true;
        brown2: true;
    }
}

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: any) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
    palette: {
        anger: createColor('#fff'),
        brown: createColor('#553B33'),
        steelBlue: createColor('#5C76B7'),
        brown2: createColor('#2F241F'),
    },
});

const Hero = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    // make a mobile resolution to make a responsive image  
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 375);
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const backgroundDesktop = {
        backgroundImage: `url('${chair.src}')`,
    };

    const backgroundMobile = {
        backgroundImage: `url('${chair_mobile.src}')`,
    };

    // make responsive image with difference pict
    const backgroundStyle = isMobile ? backgroundMobile : backgroundDesktop;
    return (
        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-16 xl:h-[709px]">
            {/* left side HERO */}
            <div className="lg:w-2/3 flex flex-col lg:pl-36 xl:pl-28 py-8 px-4  justify-center gap-12 ">
                <div className="lg:w-[712px] text-center  lg:text-left w-[342px]  ">
                    <h1 className="font-bold text-[32px] lg:text-7xl text-customColor ">
                        The kind of {''}
                        <br className="hidden lg:block" />
                        <span className='text-furniture'>furniture</span> you have {' '}
                        <br className="hidden lg:block" />
                        been <br className="lg:hidden block" /> looking for
                    </h1>
                </div>
                {/* 2 buttons search and watch */}
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center w-full lg:gap-6 gap-3 '>
                    <Button className='mx-auto lg:mx-0 w-[282px] gap-4 py-4 px-6 lg:py-[22px] lg:px-9 lg:w-[344px] rounded-xl flex items-center bg-signUp'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_4_487)">
                                <path d="M15.5 14H14.71L14.43 13.73C15.63 12.33 16.25 10.42 15.91 8.39002C15.44 5.61002 13.12 3.39002 10.32 3.05002C6.09001 2.53002 2.53002 6.09001 3.05002 10.32C3.39002 13.12 5.61002 15.44 8.39002 15.91C10.42 16.25 12.33 15.63 13.73 14.43L14 14.71V15.5L18.25 19.75C18.66 20.16 19.33 20.16 19.74 19.75C20.15 19.34 20.15 18.67 19.74 18.26L15.5 14ZM9.50002 14C7.01002 14 5.00002 11.99 5.00002 9.50002C5.00002 7.01002 7.01002 5.00002 9.50002 5.00002C11.99 5.00002 14 7.01002 14 9.50002C14 11.99 11.99 14 9.50002 14Z" fill="#553B33" />
                            </g>
                            <defs>
                                <clipPath id="clip0_4_487">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <h1 className='text-colorLight text-sm lg:text-2xl'>Search Catalog</h1>
                    </Button>
                    <ThemeProvider theme={theme}>
                        <Button className='mx-auto lg:mx-0 w-[282px] gap-4 py-4 px-6 lg:py-[22px] lg:px-9 lg:w-[344px] rounded-xl' variant="outlined" color='brown'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M10.8 15.9L15.47 12.4C15.74 12.2 15.74 11.8 15.47 11.6L10.8 8.1C10.47 7.85 10 8.09 10 8.5V15.5C10 15.91 10.47 16.15 10.8 15.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#553B33" />
                            </svg>
                            <h1 className='text-colorLight text-sm lg:text-2xl'>WATCH VIDEOS</h1>
                        </Button>
                    </ThemeProvider>
                </div>
                {/* buttons end */}
            </div>

            {/* right side */}

            <div className='bg-cover bg-no-repeat bg-center pl-6 lg:pl-12 h-[253px] lg:h-full  lg:w-1/3 ' style={backgroundStyle}>
                {/* add an h1 if on mobile device */}
                {isMobile ? <h1 className='text-white mt-6'>HIGHLIGHTED PRODUCT</h1> : <></>}
                {/* end */}
                <div className='flex flex-col mt-[55px] lg:mt-[413px] gap-2 lg:gap-8'>
                    <div className='py-2 px-4 w-[68px] h-9 lg:w-[93px] lg:h-[52px] flex items-center justify-center glass-effect' >
                        <h1 className='text-lg lg:text-2xl font-normal text-center text-black'>$329</h1>
                    </div>
                    <h1 className='lg:text-[64px] text-2xl font-normal text-white'>Pösht Sofa</h1>
                    <ThemeProvider theme={theme}>
                        <Button className='w-[146px] h-[56px]  px-4 py-3 lg:mt-5 lg:px-6 lg:py-4 lg:w-[197px] rounded-xl flex items-center' variant="contained" color='brown2' href="#contained-buttons">
                            <h1 className=' text-xs lg:text-base'>VIEW DETAILS</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clipPath="url(#clip0_4_496)">
                                    <path d="M10 6L8.59003 7.41L13.17 12L8.59003 16.59L10 18L16 12L10 6Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_4_496">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </Button>
                    </ThemeProvider>
                </div>
            </div>
            {/* right side section end */}
        </div>
    );
};

export default Hero;
