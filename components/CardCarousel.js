import Image from 'next/image'
import Link from 'next/link'
import dummyImage from '../public/assets/images/card-kantor-dummy-image.jpg'

export default function CardCarousel({data}) {
    return (
        <Link href={`/search?complex_name=${data.Name}`} passHref>
            <div className="w-72 rounded overflow-hidden hover:cursor-pointer">
                <div className="h-48 max-w-full relative ">
                    <Image 
                        layout="fill" 
                        src={dummyImage} 
                        alt="Kantor image" 
                        objectFit='cover'
                        className='absolute object-none rounded-[15px]' 
                    />
                </div>
                <div className="py-1">
                    <div className="font-semibold text-gray-700 text-xl">
                        {data.Name}
                    </div>
                </div>
            </div>
        </Link>
    )
}
