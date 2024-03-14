import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';

const Contact = () => {
    return (
        <div className='font-outfit w-full h-screen text-center text-white overflow-x-hidden overflow-y-hidden'>
            <div className='flex justify-center h-full items-center'>
                <ParallaxBanner
                    layers={[
                        {
                            speed: -100,
                            children: (
                                <div className='w-full h-[50%] absolute left-0 top-[25%] z-0 bg-gradient-to-tr from-[#000000] to-[#0022d2]' />
                            ),
                        },
                    ]}
                    className='bg-container'
                >
                    <div id='contact' className='bg-container flex flex-col h-screen justify-center items-center'>
                        <div className='absolute top-0 border-4 border-[#ffb800] z-10 w-full' />
                        <div className='relative z-10'>
                            <div className='font-medium font-playfair text-5xl font-outfit select-none py-6'>
                                Contact Us
                            </div>
                            <div className='py-2 text-2xl'>
                                Name
                            </div>
                            <div className='py-2 text-2xl'>
                                Phone
                            </div>
                            <div className='py-2 text-2xl'>
                                Email
                            </div>
                        </div>
                    </div>
                </ ParallaxBanner>
            </div>
        </div>
    )
}

export default Contact