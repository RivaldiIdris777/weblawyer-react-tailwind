import React, { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom'
import ResponsiveMenu from './ResponsiveMenu';



const Navbar = () => {

    const DropdownLinks = [
        {
            name: "Our Services",
            link: "/#services",
        },
        {
            name: "Top Brands",
            link: "/#mobile_brands",
        },
        {
            name: "Location",
            link: "/#location",
        },
    ];

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md">
                <div className="bg-gradient-to-r from-bluePrimary to-redSecondary text-white">
                    <div className="container mx-auto py-[2px] sm:block hidden">
                        <div className="flex items-center justify-between">
                            <p className="text-sm">Law Support Service</p>
                            <p>Call Center no. +62 88920323302</p>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto py-3 mt-5 mb-5 sm:py-0">
                    <div className="flex justify-between items-center">
                        <div className="flex px-4 items-center gap-4 font-bold text-2xl">
                            <h3 className='bg-gradient-to-r from-bluePrimary to-redSecondary inline-block text-transparent bg-clip-text'>A - Lawme</h3>
                        </div>
                        <div className="hidden mx-auto md:block">
                            <ul className="flex items-center gap-6">
                                <li className="py-4 text-xl font-medium">
                                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                                        Home
                                    </NavLink>
                                </li>
                                <li className="py-4 text-xl font-medium">
                                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                                        About Us
                                    </NavLink>
                                </li>
                                <li className="py-4 text-xl font-medium">
                                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                                        Service
                                    </NavLink>
                                </li>
                                <li className='group relative cursor-pointer text-lg font-medium'>
                                    <a href="/" className="flex h-[72px] items-center gap-[2px]">
                                        Tax Product{" "}
                                        <span>
                                            <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                                        </span>
                                    </a>
                                    <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md">
                                        <ul className="space-y-3">
                                            {DropdownLinks.map((data) => (
                                                <li key={data.name}>
                                                    <a href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20">{data.name}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="md:block hidden">
                                <div className="flex items-center gap-3">
                                    <button type="button" className="transtion group flex h-10 w-32 items-center justify-center rounded-full bg-gradient-to-r from-bluePrimary to-redSecondary p-[1.5px] text-gray-900 duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30">
                                        <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-50 transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-slate-50 group-hover:to-slate-50 group-hover:transition group-hover:duration-300 group-hover:ease-in-out">
                                            <p className='text-lg font-bold'>Login</p>
                                        </div>
                                    </button>
                                    <button type="button" className="transtion group flex h-10 w-32 items-center justify-center rounded-full bg-gradient-to-r from-bluePrimary to-redSecondary p-[1.5px] text-slate-50 duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30">                                        
                                        <Link to="/register" className='text-lg font-bold'>Sign In</Link>
                                    </button>                                
                                </div>
                            </div>
                            <div className="md:hidden block px-4">
                                    {showMenu ? (
                                        <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer transition-all" size={30}/>
                                    ) : (
                                        <HiMenuAlt3
                                            onClick={toggleMenu}
                                            className="cursor-pointer transition-all"
                                            size={30}
                                        />
                                    )}
                                </div>
                        </div>
                    </div>
                </div>
                <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu}/>
            </nav>
        </>
    )
}

export default Navbar
