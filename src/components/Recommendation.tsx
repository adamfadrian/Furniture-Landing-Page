import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import image_1 from '@/public/rec_1.png';
import image_2 from '@/public/rec_2.png';
import image_3 from '@/public/rec_3.png';
import mobile_1 from '@/public/mobile_1.png';
import mobile_2 from '@/public/mobile_2.png';

const Recommendation = () => {
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

// make responsive image with difference pict
  const getImageSource1 = (isMobile: boolean) => {
    if (isMobile) {
      return mobile_1;
    } else {
      return image_1;
    }
  };

// make responsive image with difference pict
  const getImageSource2 = (isMobile: boolean) => {
    if (isMobile) {
      return mobile_2;
    } else {
      return image_2;
    }
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row w-full pr-4 py-6 gap-6 lg:py-20 lg:pr-36 lg:gap-12 lg:mx-0 ">
      {/*Image sections */}
      <div className="flex gap-4 lg:gap-6">
        <Image src={getImageSource1(isMobile)} width={`${isMobile ? 103 : 148}`} height={`${isMobile ? 132 : 523}`} alt={''} />
        <Image src={getImageSource2(isMobile)} width={`${isMobile ? 103 : 148}`} height={`${isMobile ? 132 : 523}`} alt={''} />
        <Image src={image_3} width={`${isMobile ? 103 : 472}`} height={`${isMobile ? 132 : 523}`} alt={''} />
      </div>
      {/* should be accordion section */}
      <div className='px-4'>
        <div className="flex flex-col gap-6 lg:gap-8 lg:w-[434px] ">
          <div className='flex flex-col gap-4'>
            <h1 className=" text-lg mb-2  text-center lg:text-2xl lg:text-left text-customColor">Categories</h1>
            <h1 className="font-bold text-center text-2xl lg:text-5xl lg:text-left text-customColor">Furniture Sets <br className='block lg:hidden' /> Recommendations</h1>
          </div>
          <div className="flex flex-col bg-partnerBg ">
            <h1 className="font-bold lg:text-[18px]  px-3 py-5">Bedroom</h1>
            <div className="flex flex-col bg-signUp px-3 py-5 gap-1 lg:py-5 lg:px-6">
              <h1 className="font-bold text-[18px]">Living Room</h1>
              <h1>Enjoy a great living room aesthetics with your family. Designs created for increased comfortability.</h1>
            </div>
            <h1 className="font-bold px-3 py-5 lg:text-[18px] ">Home Office</h1>
            <h1 className="font-bold px-3 py-5 lg:text-[18px] ">Gaming Room</h1>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Recommendation;
