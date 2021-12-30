import Image from 'next/image'
import dummyImage from '../public/assets/images/card-kantor-dummy-image.jpg'

export default function CardCarousel() {
    return (
        <div className="w-72 rounded overflow-hidden ">
            <div className="h-48 max-w-full relative ">
                <Image 
                    layout="fill" 
                    src={dummyImage} 
                    alt="Kantor image" 
                    objectFit='cover'
                    className='absolute rounded-md object-none rounded-[15px]' 
                />
            </div>
            <div className="py-1">
                <div className="font-semibold text-gray-700 text-xl">
                    Wisma Atlet
                </div>
            </div>
        </div>
    )
}
