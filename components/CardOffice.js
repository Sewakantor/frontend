import Image from 'next/image'
import dummyImage from '../public/assets/images/card-kantor-dummy-image.jpg'

export default function CardOffice() {
    return (
        <div className="w-64 rounded overflow-hidden shadow-lg">
            <div className="h-80 max-w-full relative">
                <Image className='absolute rounded-md object-none' layout="fill" src={dummyImage} alt="Sunset in the mountains" objectFit='cover'/>
            </div>
            <div className="px-4 py-2 pb-8">
                <div className="font-semibold text-gray-700 text-xl mb-2">
                    Wisma Atlet
                    </div>
                <p className="text-sm font-light text-gray-700">
                    Mulai dari
                </p>
                <p className="font-semibold text-gray-700">
                    Rp 200.000 / sqm / bulan
                </p>
            </div>
        </div>
    )
}
