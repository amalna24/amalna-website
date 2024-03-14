import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import { useManual } from '../contexts/ManualContext';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'
import { ParallaxBanner } from 'react-scroll-parallax';
import Logo from '../public/assets/logos/logo-gold.png'

// https://www.color-hex.com/color-palette/2260

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
    // const { setManual } = useManual();
    // const [text, setText] = useState('');
    // const [loopNum, setLoopNum] = useState(0);
    // const [isDeleting, setIsDeleting] = useState(false);
    // const [isTyping, setIsTyping] = useState(true);
    // const words = ['Amalna', 'أملنا'];
    // const typingSpeed = isDeleting ? 100 : 250;
    // const switchingDelay = 10000;

    // useEffect(() => {
    //     setManual(false);
    // }, []);

    // useEffect(() => {
    //     if (!isTyping) return;

    //     const handleTyping = () => {
    //         const currentWord = words[loopNum % words.length];
    //         const updatedText = isDeleting ? currentWord.slice(0, text.length - 1) : currentWord.slice(0, text.length + 1);
    //         setText(updatedText);

    //         if (!isDeleting && updatedText === currentWord) {
    //             setTimeout(() => setIsDeleting(true), switchingDelay);
    //         } else if (isDeleting && updatedText === '') {
    //             setIsDeleting(false);
    //             setLoopNum(loopNum + 1);
    //             if ((loopNum + 1) >= words.length * 2) {
    //                 setIsTyping(false);
    //             }
    //         }
    //     };

    //     const typingInterval = setTimeout(handleTyping, typingSpeed);

    //     return () => clearTimeout(typingInterval);
    // }, [text, isDeleting, loopNum, isTyping]);

    // const isArabic = text => /[\u0600-\u06FF]/.test(text);
    // const [cursorVisible, setCursorVisible] = useState(true);

    // useEffect(() => {
    //     if (!isTyping) return;
    //     const blinkInterval = setInterval(() => {
    //         setCursorVisible(visible => !visible);
    //     }, 500);
    //     return () => clearInterval(blinkInterval);
    // }, [isTyping]);

    return (
        <>
            <Head>
                <title>Amalna</title>
            </Head>
            <motion.div initial='initial' animate='animate'>
                <div id='home' className='font-outfit w-full h-screen text-center text-white overflow-x-hidden overflow-y-hidden'>
                    <div className='flex justify-center h-full items-center'>
                        <ParallaxBanner
                            layers={[
                                {
                                    speed: -100,
                                    children: (
                                        <div className='w-full h-[50%] absolute left-0 top-[25%] z-0 bg-gradient-to-br from-[#000000] to-[#0022d2]' />
                                    ),
                                },
                            ]}
                            className='bg-container'
                        >
                            <div className='bg-container flex flex-col justify-end h-screen items-center'>
                                <motion.div variants={stagger}>
                                    <div className='relative z-10'>
                                        <motion.div variants={fadeInUp}>
                                            <h1 className='font-medium font-playfair text-6xl md:text-8xl pt-20 pb-8 select-none'>
                                                Amalna
                                                {/* {isArabic(text) ? (
                                                    <>
                                                        <span style={{ opacity: cursorVisible && isTyping ? 1 : 0, transition: 'opacity 0.5s' }} className={`inline-block w-1 h-[12vh] bg-[#ffb800] mr-2`}></span>
                                                        <span className='text-8xl'>{text}</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span className='text-8xl'>{text}</span>
                                                        <span style={{ opacity: cursorVisible && isTyping ? 1 : 0, transition: 'opacity 0.5s' }} className={`inline-block w-1 h-[12vh] bg-[#ffb800] ml-2`}></span>
                                                    </>
                                                )} */}
                                            </h1>
                                            <div className='font-regular flex justify-center items-center w-[100vw] p-8 text-sm transition-all duration-200'>
                                                <div className='grid grid-cols-5 gap-8 max-w-8xl items-end'>
                                                    <Link href='#about'>
                                                        <div className='col-span-1 text-2xl px-8 py-8 ease-in border-b-8 border-transparent hover:border-[#ffb800] duration-100'>About</div>
                                                    </Link>
                                                    <Link href='/'>
                                                        <div className='col-span-1 text-2xl px-8 py-8 ease-in border-b-8 border-transparent hover:border-[#ffb800] duration-100'>Mission</div>
                                                    </Link>
                                                    <div className='col-span-1 rounded-full px-8 py-4'>
                                                        <Image src={Logo} width={300} height={300} />
                                                    </div>
                                                    <Link href='/'>
                                                        <div className='col-span-1 text-2xl px-8 py-8 ease-in border-b-8 border-transparent hover:border-[#ffb800] duration-100'>Founders</div>
                                                    </Link>
                                                    <Link href='#contact'>
                                                        <div className='col-span-1 text-2xl px-8 py-8 ease-in border-b-8 border-transparent hover:border-[#ffb800] duration-100'>Contact</div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className='border-4 border-[#ffb800]' />
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