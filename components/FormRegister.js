import Image from 'next/image'
import headerImage from '../public/assets/images/header-image.jpg'
import { ArrowCircleLeftIcon } from '@heroicons/react/outline'
import Link from 'next/link'

export default function FormRegister() {
    return (
        <section className="overflow-hidden">
            <div className="flex min-h-screen overflow-hidden">
                <div className="relative flex-1 hidden w-0 overflow-hidden md:block">
                    <Image 
                        layout='fill'
                        src={headerImage}
                        className="absolute inset-0 object-cover w-full h-full"    
                    />
                </div>
                <div className="flex flex-col justify-center flex-1 px-4 overflow-hidden sm:px-6 lg:flex-none lg:px-20 xl:px-22">
                    <div className="w-full max-w-xl mx-auto lg:w-96">
                        <Link href="/">
                            <button className="flex flex-row">
                                <ArrowCircleLeftIcon className="h-8 w-8 text-redLogo"/>
                                <p className='pl-1 pt-[2.5px]'>Back</p>
                            </button>
                        </Link>
                        <div>
                            <h2 className="mt-2 text-2xl font-bold text-neutral-600"> Register an account. </h2>
                        </div>
                        <div className="mt-3">
                            <div className="">
                                <form action="#" method="POST" className="space-y-2">
                                <div>
                                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-600"> Name </label>
                                        <div className="mt-1">
                                            <input id="name" name="name" type="name" autoComplete="name" required placeholder="Your name" className="
                                                block
                                                w-full
                                                px-3
                                                py-2
                                                text-base text-neutral-600
                                                placeholder-gray-400
                                                transition
                                                duration-500
                                                ease-in-out
                                                transform
                                                border border-transparent
                                                rounded-lg
                                                bg-[#EDEDED]
                                                outline-none
                                            " />
                                        </div>
                                      </div>
                                    <div className="space-y-1">
                                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-600"> Email Address </label>
                                            <input id="email" name="email" type="email" autoComplete="email" required placeholder="Your email" className="
                                                block
                                                w-full
                                                px-3
                                                py-2
                                                text-base text-neutral-600
                                                placeholder-gray-400
                                                transition
                                                duration-500
                                                ease-in-out
                                                transform
                                                border border-transparent
                                                rounded-lg
                                                bg-[#EDEDED]
                                                outline-none
                                            " />
                                    </div>
                                    <div className="space-y-1">
                                    <label htmlFor="password" className="mb-2 block text-sm font-medium text-neutral-600"> Password </label>
                                        <div className="mt-1">
                                            <input id="password" name="name" type="password" autoComplete="password" required placeholder="Password" className="
                                                block
                                                w-full
                                                px-3
                                                py-2
                                                text-base text-neutral-600
                                                placeholder-gray-400
                                                transition
                                                duration-500
                                                ease-in-out
                                                transform
                                                border border-transparent
                                                rounded-lg
                                                bg-[#EDEDED]
                                                outline-none
                                            " />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                    <label htmlFor="text" className="mb-2 block text-sm font-medium text-neutral-600"> Company </label>
                                        <div className="mt-1">
                                            <input id="company" name="company" type="text" autoComplete="company" required placeholder="Company" className="
                                                block
                                                w-full
                                                px-3
                                                py-2
                                                text-base text-neutral-600
                                                placeholder-gray-400
                                                transition
                                                duration-500
                                                ease-in-out
                                                transform
                                                border border-transparent
                                                rounded-lg
                                                bg-[#EDEDED]
                                                outline-none
                                            " />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                    <label htmlFor="tel" className="mb-2 block text-sm font-medium text-neutral-600"> Name </label>
                                        <div className="mt-1">
                                            <input id="tel" name="tel" type="tel" autoComplete="telphone" required placeholder="+62" className="
                                                block
                                                w-full
                                                px-3
                                                py-2
                                                text-base text-neutral-600
                                                placeholder-gray-400
                                                transition
                                                duration-500
                                                ease-in-out
                                                transform
                                                border border-transparent
                                                rounded-lg
                                                bg-[#EDEDED]
                                                outline-none
                                            " />
                                        </div>
                                    </div>
                                    <div className="my-10 text-sm text-right">
                                        <p className="font-normal"> have an account ? <Link href='/login'><a className="text-redLogo">Sign In</a></Link></p>
                                    </div>
                                    <div>
                                        <button type="submit" className="
                                            flex
                                            items-center
                                            justify-center
                                            w-full
                                            py-3
                                            text-base
                                            font-medium
                                            text-center text-white
                                            transition
                                            duration-500
                                            ease-in-out
                                            transform
                                            rounded-xl
                                            bg-redLogo
                                            hover:bg-red-300
                                            focus:outline-none
                                            focus:ring-2
                                            focus:ring-offset-2
                                            focus:ring-blue-500
                                        "> Sign in </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
