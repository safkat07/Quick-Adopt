import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import banner from '../../../../assets/bannerimg.png'
const Banner = () => {


    const handleDone = () => {
        console.log(`Done after 5 loops!`);
    };

    return (
        <div className='bg-[#EBF1EE] md:px-20 min-h-screen'>

            <div className='flex lg:flex-row flex-col-reverse space-x-20   text-left items-center'>
                <div className='flex flex-col  items-start'>
                    <div className=''>
                        <h1 className='font-lobster lg:text-left text-center text-2xl lg:text-7xl' style={{ fontWeight: 'normal' }}>
                            {' '} <br />
                            <span className='font-monster text-2xl md:text-4xl lg:text-5xl'>
                                <Typewriter
                                    words={["Trusted Pet Care.Dont buy, please adopt"]}
                                    loop={1}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={150}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                    onLoopDone={handleDone}
                                />
                            </span>
                        </h1>
                    </div>
                </div>
                <div>
                    <img className='transition-all lg:w-auto md:w-full w-11/12   duration-1000 lg:hover:px-5 ' src={banner} alt="" />
                </div>
            </div>
            {/* <div className='text-center max-w-5xl mx-auto mt2 text-3xl'>
                <p>
                    Whether you’re a loving parent finding caring hands for your Pet, or a passionate Pet Sitter eager? We take care of the tedious side of Pet Care service, so you can get to what matters the most!
                </p>
            </div> */}
        </div>
    );
};

export default Banner;
