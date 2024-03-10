import React, { useEffect } from 'react'
import Head from 'next/head';
import { useManual } from '../contexts/ManualContext';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'
import { ParallaxBanner } from 'react-scroll-parallax';
import Logo from '../public/assets/logos/logo-ww.png'

const easing = [.6, -.05, .01, .9]

const fadeInUp = {
    initial: {
        y: 100,
        opacity: 0
    },

    animate: {
        y: 0,
        opacity: 1,

        transition: {
            duration: .8,
            ease: easing
        }
    }
};

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const Main = () => {
    const { setManual } = useManual();

    useEffect(() => {
        setManual(false);
    }, []);

    return (
        <>
            <Head>
                <title>Amalna</title>
            </Head>
            <motion.div initial='initial' animate='animate'>
                <div id='home' className='font-marcellus w-full h-screen text-center text-white overflow-x-hidden overflow-y-hidden'>
                    <div className='flex justify-center h-full items-center'>
                        <ParallaxBanner
                            layers={[
                                {
                                    speed: -100,
                                    children: (
                                        <div className='w-full h-[50%] absolute left-0 top-[25%] z-0 bg-gradient-to-br from-[#0047AB] via-[#4682B4] to-[#A7C7E7]' />
                                    ),
                                },
                            ]}
                            className='bg-container'
                        >
                            <div className='bg-container flex flex-col justify-end h-screen items-center'>
                                <motion.div variants={stagger}>
                                    <div className='relative z-10'>
                                        <motion.div variants={fadeInUp}>
                                            <h1 className='font-medium text-6xl md:text-8xl font-marcellus pt-20 pb-8 select-none'>
                                                Amalna
                                            </h1>
                                            <div className='font-regular flex justify-center items-center w-[100vw] p-8 text-sm transition-all duration-200'>
                                                <div className='grid grid-cols-5 gap-8 max-w-8xl items-end'>
                                                    <Link href='#about'>
                                                        <div className='col-span-1 text-2xl px-8 py-6 ease-in border-b-4 border-transparent hover:border-white duration-100'>About</div>
                                                    </Link>
                                                    <Link href='/'>
                                                        <div className='col-span-1 text-2xl px-8 py-6 ease-in border-b-4 border-transparent hover:border-white duration-100'>Vision</div>
                                                    </Link>
                                                    <div className='col-span-1 rounded-full px-8'>
                                                        <Image src={Logo} width={300} height={300} />
                                                    </div>
                                                    <Link href='/'>
                                                        <div className='col-span-1 text-2xl px-8 py-6 ease-in border-b-4 border-transparent hover:border-white duration-100'>Founders</div>
                                                    </Link>
                                                    <Link href='#contact'>
                                                        <div className='col-span-1 text-2xl px-8 py-6 ease-in border-b-4 border-transparent hover:border-white duration-100'>Contact</div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                        </ ParallaxBanner>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Main