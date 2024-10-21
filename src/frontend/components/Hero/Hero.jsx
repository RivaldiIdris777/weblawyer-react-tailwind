import React from 'react'
import { FaRegCompass } from 'react-icons/fa'
import { FaBoxArchive } from 'react-icons/fa6'
import { IoIosArrowForward } from 'react-icons/io'
import law01 from '../../../assets/law01.png'
import law02 from '../../../assets/law02.png'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[750px] relative pt-20'>
            <div className="flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0">
                <div className="text-center md:text-left space-y-6">
                    <motion.p initial="hidden" animate="visible" className="text-gray-800 uppercase font-semibold">
                        Solution support for your case
                    </motion.p>
                    <motion.h1 initial="hidden" animate="visible" className="text-5xl font-semibold lg:text-6xl !leading-tight">
                        A - Lawme is ready to support on your side 
                    </motion.h1>
                    <motion.p initial="hidden" animate="visible">We help you out and together making truth case for justice</motion.p>
                    <motion.div initial="hidden" animate="visible" className='flex gap-5 justify-center md:justify-start !mt-8 items-center'>
                        <button className='flex justify-end items-center rounded-lg bg-redSecondary p-3 text-slate-50 gap-1 font-semibold'>
                            Lets Talk
                            <IoIosArrowForward/>
                        </button>
                        <button className='flex justify-end items-center rounded-lg bg-bluePrimary p-3 text-slate-50 gap-1 font-semibold'>
                            Show More
                        </button>
                    </motion.div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <motion.img src={law01} className='w-[250px] md:w-[250px]'/>                
            </div>
        </div>
    )
}

export default Hero
