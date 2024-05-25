import React, { useState } from 'react';

const FAQ = () => {

    return (
        <div id='about' className='font-outfit w-full h-screen text-center bg-[#F0F8FF] overflow-x-hidden'>
            <div className='w-full h-full mx-auto flex flex-col justify-center items-center text-black'>
                <div className='text-4xl font-playfair py-8'>
                    About Us
                </div>
                <div className='text-xl py-8 w-[60vw]'>
                    Our aim is to offer both shelter and security to children facing leg amputations, alongside 
                    delivering essential medications and healthcare supplies to healthcare providers in Gaza. 
                    Through these efforts, we strive to enhance the overall well-being of families in Gaza. Our 
                    primary goal is to facilitate a healthier existence for those in need and reassure them that 
                    they are not alone. We are committed to both preventing the spread of diseases and improving 
                    the quality of life for children by ensuring access to basic necessities. Our mission is focused 
                    on rescuing and providing care for children coping with leg amputations. We strive to create a 
                    nurturing environment where these children can feel safe in their temporary residences during 
                    medical treatments.
                    
                    {/* Amalna is a non-profit corporation based in New Jersey. Our mission is to provide medical and
                    educational assistance to those affected by the war in Gaza. We provide humanitarian aid in
                    various forms, including medical equipment and facilitation of medical procedures. We distribute
                    food, clothing, and other essential supplies to support the well-being of the families in Gaza.
                    Our focus is to nurture educational opportunities for children, creating a healthier life for
                    those in need and ensuring they know they are not alone. We are dedicated to preventing the
                    spread of disease and providing the means for a better quality of life and basic sustenance. */}
                </div>
            </div>
        </div >
    )
}

export default FAQ