import Image from 'next/image'
import Link from 'next/link'
import dummyImage from '../public/assets/images/card-kantor-dummy-image.jpg'

export default function CardOffice({data}) {
    return (
        <Link href={`/detail/${data.ID}`}>
            <div className="w-72 rounded overflow-hidden shadow-lg hover:cursor-pointer">
                <div className="h-80 max-w-full relative">
                    <Image className='absolute rounded-md object-none' layout="fill" src={data.Photo} alt="Sunset in the mountains" objectFit='cover'/>
                </div>
                <div className="px-4 py-2 pb-8">
                    <div className="font-semibold text-gray-700 text-xl mb-2">
                        {data.Name}
                        </div>
                    <p className="text-sm font-light text-gray-700">
                        Mulai dari
                    </p>
                    <p className="font-semibold text-gray-700">
                        Rp. {data.Price} / sqm / bulan
                    </p>
                </div>
            </div>
        </Link>
    )
}
