import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';

const Contact = () => {
    return (
        <div className='font-marcellus w-full h-screen text-center text-white overflow-x-hidden overflow-y-hidden'>
            <div className='flex justify-center h-full items-center'>
                <ParallaxBanner
                    layers={[
                        {
                            speed: -100,
                            children: (
                                <div className='w-full h-[50%] absolute left-0 top-[25%] z-0 bg-gradient-to-tr from-[#0047AB] via-[#4682B4] to-[#A7C7E7]' />
                            ),
                        },
                    ]}
                    className='bg-container'
                >
                    <div id='contact' className='bg-container flex flex-col h-screen justify-center items-center'>
                        <div className='relative z-10'>
                            <div className='font-medium text-3xl font-marcellus select-none py-4'>
                                Contact Us
                            </div>
                            <div className='py-2'>
                                Name
                            </div>
                            <div className='py-2'>
                                Phone
                            </div>
                            <div className='py-2'>
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