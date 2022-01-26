import Image from "next/image";
import userPicProfile from '../public/assets/images/user-profile.jpg';
import { StarIcon as StarSolid } from '@heroicons/react/solid'
import Rating from 'react-rating'
import Moment from 'moment';

export default function CardReview( {review} ) {
    let newDate = Moment(review.created_at).format('MMMM Do YYYY, h:mm:ss a')
    return (
        <div className="rounded-t-xl border-black w-full">
            <div className="rounded-t-xl flex flex-wrap items-center px-16 py-5 bg-[#DEDEDEDE]">
                <Image
                    src={userPicProfile}
                    width={30}
                    height={30}
                    className="rounded-full"
                    alt=""
                />
                <h4 className="w-full md:w-auto font-bold text-base lg:ml-6 md:ml-6">{review.user.Name}</h4>
                <div className="w-full hidden md:block lg:w-px md:w-px h-2 md:h-8 mx-8 bg-black" />
                    <span className="mr-4 font-bold text-base">{review.star}.0</span>
                    <div className="inline-flex">
                        <Rating
                            emptySymbol={<StarSolid className="w-6 h-6 text-[#C4C4C4]" />}
                            fullSymbol={<StarSolid className="w-6 h-6 text-yellow-500" />}
                            initialRating={review.star}
                            readonly
                            className='mt-1 grid'
                        />
                    </div>
                </div>
                <div className="px-16 py-7 leading-relaxed">
                    <p>{review.comment}</p>
                <div className="pt-5 w-full text-right">
                    <p className="mb-8 text-sm text-gray-600">{newDate}</p>
                </div>
            </div>
        </div>
    )
}
