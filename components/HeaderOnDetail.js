// import React from 'react'

// export default function HeaderOnDetail() {
//     return (
//         <div className="container mx-auto">
//             <div className="grid grid-cols-2">
//                 <div className="bg-red-200 col-auto">
//                     <h1>Wisma Atlet</h1>
//                     <h1>Jl. Kebayoran,Jakarta Pusat</h1>
//                     <div className="">
//                             <div className="grid grid-cols-2 border rounded-lg border-black mt-3 p-3">
//                                 <div className="">
//                                     <p>Dibangun</p>
//                                     <p>2018</p>
//                                 </div>
//                                 <div className="">
//                                     <p>Jumlah Lantai</p>
//                                     <p>28</p>
//                                 </div>
//                                 <div className="">
//                                     <p>Luas Bangunan</p>
//                                     <p>32000 m2</p>
//                                 </div>
//                                 <div className="">
//                                     <p>Dibangun</p>
//                                     <p>2018</p>
//                                 </div>
//                             </div>
//                     </div> 
//                     <div className="mt-5">
//                         <button type="submit" className="
//                                 flex
//                                 items-center
//                                 justify-center
//                                 w-36
//                                 lg:w-72
//                                 py-3
//                                 text-base
//                                 font-medium
//                                 text-center text-white
//                                 transition
//                                 duration-500
//                                 ease-in-out
//                                 transform
//                                 rounded-xl
//                                 bg-redLogo
//                                 hover:bg-red-300
//                                 focus:outline-none
//                                 focus:ring-2
//                                 focus:ring-offset-2
//                             "> Saya Berminat </button>
//                         </div>

//                 </div>
//                 <div className="bg-red-600">
//                     IMG
//                 </div>
//             </div>
//         </div>
//     )
// }
{/* <div className="flex w-full pl-6 lg:pl-12 pr-6 py-4 mb-4 items-center leading-7 rounded-2xl border-2 border-blueGray-200 hover:border-blueGray-300">
    <div className="flex flex-col md:w-1/2">
        <div className="w-full md:w-1/2 px-2 mb-2 md:mb-0">dwadwad</div>
        <div className="w-full md:w-1/2 px-2 mb-2 md:mb-0">dwadwad</div>
    </div>
    <div className="flex flex-col md:w-1/2">
        <div className="w-full md:w-1/2 px-2 mb-2 md:mb-0">dwadwad</div>
        <div className="w-full md:w-1/2 px-2 mb-2 md:mb-0">dwadwad</div>
    </div>
</div> */}

import Image from 'next/image'
import React from 'react'
import coverImg from '../public/assets/images/card-kantor-dummy-image.jpg'

export default function HeaderOnDetail() {
    return (
        <>
            <div className="container py-5 px-4 mx-auto">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 px-4 xl:pr-20">
                        <div className="max-w-md mb-6">
                            <h2 className="mb-1 text-4xl md:text-7xl lg:text-7xl font-medium">
                                Wisma Atlet
                            </h2>
                            <p className="flex items-center mb-6">
                                <span className="text-xl text-gray-400 font-light">Jl. Kemayoran, Jakarta Pusat</span>
                            </p>
                        </div>
                        <div className="grid grid-cols-2 border rounded-lg border-black mt-3 p-4 mb-5 shadow-md">
                            <div className="">
                                <p className="text-xl font-semibold">Dibangun</p>
                                <p className='text-xl text-gray-500'>2018</p>
                            </div>
                            <div className="">
                                <p className="text-xl font-semibold">Jumlah Lantai</p>
                                <p className='text-xl text-gray-500'>28</p>
                            </div>
                            <div className="mt-3">
                                <p className="text-xl font-semibold">Luas Bangunan</p>
                                <p className='text-xl text-gray-500'>32000 m2</p>
                            </div>
                            <div className="mt-3">
                                <p className="text-xl font-semibold">Luas Lantai</p>
                                <p className='text-xl text-gray-500'>1516 m2</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-2 mt-10 mb-12">
                            <div className="w-full lg:w-3/4 md:w-2/4 px-2 mb-2 md:mb-0">
                                 <button type="submit" className="flex items-center justify-center w-full py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform rounded-xl bg-redLogo hover:bg-red-300">Saya Berminat</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-4 xl:pl-20 lg:mb-0 order-first lg:order-last">
                        <div className="relative md:w-2/3 lg:w-auto mx-auto mb-14">
                            <div className="h-80 relative">
                                <Image className='w-full h-full absolute rounded-md object-none' layout="fill" src={coverImg} alt="Sunset in the mountains" objectFit='cover'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
