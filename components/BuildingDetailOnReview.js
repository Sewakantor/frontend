import Image from 'next/image';
import kantorImage from '../public/assets/images/card-kantor-dummy-image.jpg'

export default function BuildingDetailOnReview({data}) {
    
  return (
    <div className="flex flex-wrap -mx-2 mb-14">
        <div className="w-full px-2 mb-4 ">
            <div className="flex items-center h-full py-12 px-8 bg-white rounded-3xl">
                <div className="flex flex-wrap items-center justify-between w-full -mx-2">
                    <div className="w-full md:w-auto px-2 mb-4 md:mb-0">
                        <a className="block mx-auto max-w-max">
                            <div className="h-64 w-64 relative">
                                <Image className='rounded-lg text-center' layout="fill" src={data.Photo} objectFit='cover'/>
                            </div>
                        </a>
                    </div>
                    <div className="w-full md:w-auto px-2 mb-8 md:mb-0">
                        <p className="block mb-2 text-xl font-medium ">{data.Name}</p>
                        <div className="flex">
                            <p className="text-sm font-medium mr-2">
                            {data.Complexes.Street}
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-auto px-2 mb-8 md:mb-0">
                        <p className="text-xl text-blue-500 font-medium">Rp. {data.Price}</p>
                        <p className="text-md text-blue-500 font-medium">sqm / bulan</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
