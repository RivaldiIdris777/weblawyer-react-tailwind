import React from 'react'
import law03 from '../../../assets/law03.png'
import law04 from '../../../assets/law04.png'
import { motion } from 'framer-motion'
const Benefit = ({reverse}) => {
  return (
    <div className='bg-redSecondary/10 pb-14'>
      <div className="container py-24 mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 p-6 md:space-y-0 ">
          <div className={`flex justify-start items-center mx-auto ${
              reverse && "md:order-last md:justify-end" }`}
          >
            <motion.img src={law03} alt='' className="w-[350px] h-full object-cover"/>
          </div>
          <div className="flex flex-col justify-center text-center md:text-left space-y-5 lg:max-w-[550px]">
            <motion.p initial="hidden" whileInView={"visible"} className="text-xl lg:text-3xl text-redSecondary font-semibold capitalize">
              Things you need to know <span className="text-bluePrimary">"Benefits From Us"</span>
            </motion.p>
            <div className="grid grid-cols md:grid-cols-1">
              <p className="text-2xl font-semibold">01. Experienced</p>
              <div className="flex flex-col">
                <p className='text-lg text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi eligendi praesentium harum, totam enim laudantium ullam molestias iste commodi?</p>
              </div>              
            </div>
            <div className="grid grid-cols md:grid-cols-1">
              <p className="text-2xl font-semibold">02. Professional Lawyer</p>
              <div className="flex flex-col">
                <p className='text-lg text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi eligendi praesentium harum, totam enim laudantium ullam molestias iste commodi?</p>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefit
