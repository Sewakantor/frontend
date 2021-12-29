import Image from 'next/image'
import headerImage from '../public/assets/images/header-image.jpg'
import { ArrowCircleLeftIcon } from '@heroicons/react/outline'

export default function FormLogin() {
    return (
        <section className="overflow-hidden">
            <div className="flex min-h-screen overflow-hidden">
                <div className="relative flex-1 hidden w-0 overflow-hidden lg:block">
                    <Image 
                        layout='fill'
                        src={headerImage}
                        className="absolute inset-0 object-cover w-full h-full"    
                    />
                </div>
                <div className="flex flex-col justify-center flex-1 px-4 py-12 overflow-hidden sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="w-full max-w-xl mx-auto lg:w-96">
                        <div className="flex flex-row">
                            <ArrowCircleLeftIcon className="h-8 w-8 text-redLogo"/>
                            <p className='pl-1 pt-[2.5px]'>Back</p>
                        </div>
                        <div>
                            <h2 className="mt-6 text-3xl font-bold text-neutral-600"> Sign in. </h2>
                        </div>
                        <div className="mt-8">
                            <div className="mt-6">
                                <form action="#" method="POST" className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-neutral-600"> Email address </label>
                                        <div className="mt-1">
                                            <input id="email" name="email" type="email" autoComplete="email" required placeholder="Your Email" className="
                                                block
                                                w-full
                                                px-5
                                                py-3
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
                                        <label htmlFor="password" className="block text-sm font-medium text-neutral-600"> Password </label>
                                        <div className="mt-1">
                                            <input id="password" name="password" type="password" autoComplete="current-password" required placeholder="Your Password" className="
                                                block
                                                w-full
                                                px-5
                                                py-3
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
                                                "
                                            />
                                        </div>
                                    </div>
                                    <div className="text-sm text-right">
                                        <a href="#" className="font-normal text-redLogo"> Forgot your password? </a>
                                    </div>
                                    <div>
                                        <button type="submit" className="
                                        flex
                                        items-center
                                        justify-center
                                        w-full
                                        px-10
                                        py-4
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
                        <div className="mt-2 text-center font-normal text-sm">
                            <p>Don't have an account? <span className="text-redLogo">Sign up</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}