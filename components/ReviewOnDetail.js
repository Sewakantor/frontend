import Image from "next/image";
import userPicProfile from '../public/assets/images/user-profile.jpg';
import { StarIcon as StarSolid } from '@heroicons/react/solid'
import Rating from 'react-rating'

export default function ReviewOnDetail() {
    return (
    <div className="rounded-t-xl border-black w-full ">
        <div className="rounded-t-xl flex flex-wrap items-center px-20 py-4 bg-[#DEDEDEDE]">
            <Image
                src={userPicProfile}
                width={30}
                height={30}
                className="rounded-full"
                alt=""
                />
            <h4 className="w-full md:w-auto font-bold text-base lg:ml-6 md:ml-6">Rachman Kamil</h4>
            <div className="w-full hidden md:block lg:w-px md:w-px h-2 md:h-8 mx-8 bg-black" />
                <span className="mr-4 font-bold text-base">5.0</span>
                <div className="inline-flex">
                    <Rating
                        emptySymbol={<StarSolid className="w-6 h-6 text-[#C4C4C4]" />}
                        fullSymbol={<StarSolid className="w-6 h-6 text-yellow-500" />}
                        initialRating={5}
                        readonly
                        className='mt-1 grid'
                    />
                </div>
            </div>
            <div className="px-20 py-2 leading-relaxed">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a consectetur erat, at malesuada tortor. Nulla magna magna, porta at libero at, venenatis consectetur metus. Morbi eget dolor enim. Nulla lectus risus, iaculis at porta eu, lobortis quis erat. Aliquam nec faucibus urna. Aliquam pharetra arcu commodo nisl volutpat, vel malesuada sapien vulputate. Quisque dui dui, iaculis ut arcu varius, pretium bibendum elit. Nam venenatis congue libero vel accumsan. Aliquam dictum fringilla metus et pulvinar. Donec quis libero quis nunc ultrices suscipit. Vivamus nec orci a augue pretium volutpat at non arcu.

                Phasellus lobortis, orci eget faucibus venenatis, orci dui tempus leo, eget convallis justo ante non ex. Mauris interdum semper velit, vitae dictum urna. Pellentesque rutrum tincidunt ex, sed porta ligula molestie suscipit. Etiam et ante mi. Proin luctus imperdiet purus, ut lobortis augue iaculis mollis. Etiam et fringilla mauris, ac pellentesque orci. Vivamus imperdiet ex sed nibh iaculis, non elementum est lacinia. Sed condimentum lectus at massa maximus gravida.</p>
            <div className="pt-5 w-full text-right">
                <p className="mb-8 text-sm text-gray-300">Added 2 months ago</p>
            </div>
        </div>
    </div>
    )
}
