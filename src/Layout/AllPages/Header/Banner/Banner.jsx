import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import banner from '../../../../assets/bannerimg.png'
import { motion } from 'framer-motion';
const Banner = () => {


    const handleDone = () => {
        console.log(`Done after 5 loops!`);
    };

    return (
        <div className='bg-[#EBF1EE] md:px-20 min-h-[89vh]'>
            <motion.div

                className='flex lg:flex-row justify-between flex-col-reverse space-x-20   text-left items-center'>
                <div className='flex flex-col  items-start'>
                    <div className=''>
                        {/* <h1 className='font-lobster lg:text-left text-center text-2xl lg:text-7xl' style={{ fontWeight: 'normal' }}>
                            {' '} <br />
                            <span className='font-monster text-2xl md:text-4xl lg:text-5xl'>
                                <Typewriter
                                    words={["Trusted Pet Care.Dont buy, please adopt"]}
                                    loop={1}
                                    cursor
                                    cursorStyle=''
                                    typeSpeed={150}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                    onLoopDone={handleDone}
                                />
                            </span>
                        </h1> */}
                        <motion.h2
                            initial={{ x: -1000 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 1 }}
                            className='font-monster text-7xl'>
                            Trusted Pet Care
                        </motion.h2>
                        <motion.h2
                            initial={{ x: -950 }}
                            animate={{ x: 100 }}
                            transition={{ duration: 3.5 }}
                            className='font-monster pt-2 text-5xl'>
                            Dont buy, please adopt
                        </motion.h2>
                    </div>
                </div>
                <motion.div
                    // initial={{ y: -1000, opacity:0 }}
                    animate={{ animation: "ease-in-out" }}
                    transition={{ duration: 2 }}
                >
                    <img className='transition-all lg:w-auto md:w-full w-11/12   duration-1000 lg:hover:px-5 ' src={banner} alt="" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Banner;
