import Image from 'next/image'
import React from 'react'

export default function HeaderOnDetail({ data }) {
    return (
        <>
            <div className="">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 px-4 xl:pr-20">
                        <div className="max-w-md mb-6">
                            <h2 className="mb-1 text-4xl md:text-7xl lg:text-7xl font-medium">
                                {data.Name}
                            </h2>
                            <p className="flex items-center mb-6">
                                <span className="text-xl text-gray-400 font-light">{data.Complexes.Street}</span>
                            </p>
                        </div>
                        <div className="grid grid-cols-2 border rounded-lg border-black mt-3 p-4 mb-5 shadow-md">
                            <div className="">
                                <p className="text-xl font-semibold">Dibangun</p>
                                <p className='text-xl text-gray-500'>{data.Year}</p>
                            </div>
                            <div className="">
                                <p className="text-xl font-semibold">Jumlah Lantai</p>
                                <p className='text-xl text-gray-500'>{data.Floor}</p>
                            </div>
                            <div className="mt-3">
                                <p className="text-xl font-semibold">Luas Bangunan</p>
                                <p className='text-xl text-gray-500'>{data.TotalSurface}</p>
                            </div>
                            <div className="mt-3">
                                <p className="text-xl font-semibold">Luas Lantai</p>
                                <p className='text-xl text-gray-500'>{data.TotalSurface}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-2 mt-10 mb-12">
                            <div className="w-full lg:w-3/4 md:w-2/4 px-2 mb-2 md:mb-0">
                                 <button type="submit" className="flex items-center justify-center w-full py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform rounded-xl bg-redLogo hover:bg-red-300">Saya Berminat</button>
                            </div>
                        </div>
                    </div>
                    <div className="pt-0 lg:pt-16 w-full lg:w-1/2 px-4 xl:pl-20 lg:mb-0 order-first lg:order-last">
                        <div className="relative md:w-2/3 lg:w-auto mx-auto mb-14">
                            <div className="h-80 relative">
                                <Image className='w-full h-full absolute rounded-md object-none' layout="fill" src={data.Photo} alt="Sunset in the mountains" objectFit='cover'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
