import Image from 'next/image';
import React, { useState } from 'react';
import LogoSVG from '../public/assets/images/main-logo-color.svg'
import userPicProfile from '../public/assets/images/user-profile.jpg'
import { Popover } from '@headlessui/react'
import { usePopper } from 'react-popper'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const Login = false;

    const [referenceElement, setReferenceElement] = useState()
    const [popperElement, setPopperElement] = useState()
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: 'bottom-end',
    })
    

    return (
        <>
            <section className="py-5">
                <div className="container px-4 mx-auto">
                    <nav className="relative">
                        <div className="flex justify-between items-center">
                            <a className="text-lg font-medium" href="/">
                                <Image className="h-7" src={LogoSVG} alt="" width={120} height={30} />
                            </a>
                            <div className="lg:hidden">
                                <button onClick={() => setIsOpen(!isOpen)} className="navbar-burger flex items-center p-3 hover:bg-gray-50 rounded">
                                    <svg className="block h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Mobile menu</title>
                                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                    </svg>
                                </button>
                            </div>
                            <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:w-auto lg:space-x-12">
                                <li><a className="text-sm font-medium" href="#">About</a></li>
                                <li><a className="text-sm font-medium" href="#">Company</a></li>
                                <li><a className="text-sm font-medium" href="#">Services</a></li>
                                <li><a className="text-sm font-medium" href="#">Testimonials</a></li>
                            </ul>
                            {Login ? (
                                <div className="hidden lg:block">
                                    <a className="inline-block mr-2 py-3 px-8 text-sm leading-normal rounded border font-medium" href="#">Log in</a>
                                    <a className="inline-block py-3 px-8 text-sm text-white font-medium leading-normal bg-red-400 hover:bg-red-300 rounded transition duration-200" href="#">Sign Up</a>
                                </div>
                            ) : (
                                <div className="hidden lg:block">
                                    <div className="grid grid-rows-2 grid-flow-col">
                                        <div className="col-span-2">
                                            <a className='text-sm font-medium'>Selamet Riyadi</a>
                                        </div>
                                        <div className="col-span-2">
                                            <a className='text-sm'>Customer</a>
                                        </div>
                                        <div className="row-span-2 col-span-2 px-3 mt-2">
                                             <Popover className="relative">
                                                <Popover.Button 
                                                    ref={setReferenceElement}>
                                                    <Image
                                                        className='rounded-full'
                                                        src={userPicProfile}    
                                                        height={35}
                                                        width={35}
                                                        alt=''
                                                    />
                                                </Popover.Button>
                                                <Popover.Panel 
                                                    ref={setPopperElement}
                                                    style={styles.popper}
                                                    {...attributes.popper}
                                                    className="absolute w-36 max-w-sm pr-20 px-4 mt-3 sm:px-0 lg:max-w-3xl">
                                                        <div className="overflow-hidden rounded-lg shadow-lg">
                                                            <div className="relative grid bg-white p-3 lg:grid-cols-2">
                                                                <a className='text-sm font-medium' href='/'>Live Chat</a>
                                                            </div>
                                                            <div className="relative grid bg-white p-3 lg:grid-cols-2 text-black bg-red-300 hover:bg-red-600 text-white">
                                                                <a className='text-sm font-medium' href='/'>Log Out</a>
                                                            </div>
                                                    </div>
                                                </Popover.Panel>
                                                </Popover>
                                        </div>
                                    </div>
                                </div>
                                // <h1>ABC</h1>
                            )}
                        </div>
                    </nav>
                </div>
                <div className={`navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50 ${isOpen ? '' :'hidden'}`}>
                    <div onClick={() => setIsOpen(false)} className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
                    <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
                        <div className="flex items-center mb-8">
                            <a className="mr-auto text-2xl font-medium leading-none" href="#">
                                <Image className="h-7" src={LogoSVG} alt="" width={120} height={30} />
                            </a>
                            <button onClick={() => setIsOpen(false)} className="navbar-close">
                                <svg className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div>
                            <ul>
                                <li className="mb-1"><a className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded" href="#">About</a></li>
                                <li className="mb-1"><a className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded" href="#">Company</a></li>
                                <li className="mb-1"><a className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded" href="#">Services</a></li>
                                <li className="mb-1"><a className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded" href="#">Testimonials</a></li>
                            </ul>
                        </div>
                        <div className="mt-auto">
                            <div className="pt-6">
                                <a className="block mb-2 py-3 text-sm text-center leading-normal rounded border font-medium" href="#">Log in</a>
                                <a className="block py-3 text-sm text-center text-white leading-normal rounded bg-red-400 hover:bg-red-300 font-medium transition duration-200" href="#">Sign Up</a>
                            </div>
                            <p className="mt-6 mb-4 text-sm text-center text-gray-500">
                                <span>© 2021 All rights reserved.</span>
                            </p>
                        </div>
                    </nav>
                </div>
            </section>
        </>
    )
}

