import React, { useState } from 'react';

const FAQ = () => {

    return (
        <div id='about' className='font-truculenta w-full h-screen text-center bg-[#F0F8FF] overflow-x-hidden'>
            <div className='w-full h-full mx-auto flex flex-col justify-center items-center text-black'>
                <div className='text-4xl font-playfair py-8'>
                    About Us
                </div>
                <div className='text-2xl py-8 w-[60vw]'>
                    Amalna is a non-profit corporation based in New Jersey. Our mission is to provide medical and
                    educational assistance to those affected by the war in Gaza. We provide humanitarian aid in
                    various forms, including medical equipment and facilitation of medical procedures. We distribute
                    food, clothing, and other essential supplies to support the well-being of the families in Gaza.
                    Our focus is to nurture educational opportunities for children, creating a healthier life for
                    those in need and ensuring they know they are not alone. We are dedicated to preventing the
                    spread of disease and providing the means for a better quality of life and basic sustenance.
                </div>
            </div>
        </div >
    )
}

export default FAQ