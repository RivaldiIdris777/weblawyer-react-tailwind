import { delay, motion } from 'framer-motion';
import React from 'react'
import { BsHouseFill } from 'react-icons/bs';
import { FaBalanceScale, FaCalculator, FaChartArea, FaUserTie } from 'react-icons/fa';
import { FaComputer, FaBook, FaHandcuffs } from "react-icons/fa6";
import { GiCharm, GiHandcuffed } from 'react-icons/gi';
const subjectList = [
    {
      id: 1,
      name: "Taxing",
      icon: <FaCalculator />,
      color: "#0063ff",
      delay: 0.2,
    },
    {
      id: 2,
      name: "Bankruptcy",
      icon: <FaChartArea />,
      color: "#00c986",
      delay: 0.3,
    },
    {
      id: 3,
      name: "Criminal",
      icon: <FaHandcuffs />,
      color: "#922aee",
      delay: 0.4,
    },
    {
      id: 4,
      name: "Civil",
      icon: <FaBalanceScale />,
      color: "#ea7516",
      delay: 0.5,
    },
    {
      id: 5,
      name: "Employment",
      icon: <FaUserTie />,
      color: "#075267",
      delay: 0.6,
    },
    {
      id: 6,
      name: "Marriage and Divorce",
      icon: <GiCharm />,
      color: "#986d1d",
      delay: 0.7,
    },
    {
      id: 7,
      name: "Land",
      icon: <BsHouseFill />,
      color: "#b93838",
      delay: 0.8,
    },
    {
      id: 8,
      name: "General Crimes",
      icon: <GiHandcuffed />,
      color: "#464646",
      delay: 0.9,
    },
];

const Legal = () => {
  return (
    
    <div >
        <div className="container py-14 md:py-24 mx-auto">
      {/* header */}
      <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-5">
          <h1 className="uppercase font-semibold text-redSecondary">
            Legal Option
          </h1>
          <p className="font-semibold text-3xl">
            What Legal Consultation Do You Want?
          </p>
      </div>
      {/* card section */}
      <div className="grid grid-cols-1 sm:grid-cols-4 md-grid-cols-4 gap-6">
        {subjectList.map((subject) => {
            return(
                <motion.div 
                key={subject.id} 
                initial={{opacity: 0, x: -200}} 
                whileInView={{opacity:1, x: 0}} 
                transition={{
                    type:"spring",
                    stiffness: 100,
                    delay: subject.delay
                }}
                className="border rounded-lg border-secondary/20 p-4 flex justify-start items-center gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer"
                >
                     <div
                  style={{
                    color: subject.color,
                    backgroundColor: subject.color + "20",
                  }}
                  className="w-10 h-10 rounded-md flex justify-center items-center"
                >
                  {subject.icon}
                </div>
                <p>{subject.name}</p>
                </motion.div>
            )
        })}
      </div>
    </div>
    </div>
  )
}

export default Legal
