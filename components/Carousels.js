// import CardCarousel from '../components/CardCarousel'
// import React from "react";
// import Slider from "react-slick";
// import { ArrowLeftIcon,ArrowRightIcon,ArrowCircleLeftIcon,ArrowCircleRightIcon} from '@heroicons/react/outline'
// import Carousel from 'react-multi-carousel';
// import "react-multi-carousel/lib/styles.css";

// // const responsive = {
// //     desktop: {
// //       breakpoint: { max: 3000, min: 1024 },
// //       items: 3,
// //     },
// //     tablet: {
// //       breakpoint: { max: 1024, min: 464 },
// //       items: 2,
// //     },
// //     mobile: {
// //       breakpoint: { max: 464, min: 0 },
// //       items: 1.5,
// //     }
// //   };

// // export default function Carousels() {

// //     const customLeftArrow = (
// //         <div className="w-8 h-8 px-1 mb-5 ml-5 absolute left-0 text-center cursor-pointer bg-white rounded-full drop-shadow-2xl">
// //             <ArrowLeftIcon className="w-5 h-5 my-1.5 mx-1" stoke="#000"/>
// //         </div>
// //     );

// //     const customRightArrow = (
// //         <div className="w-8 h-8 px-1 mb-5 mr-3 absolute right-0 text-center cursor-pointer bg-white rounded-full drop-shadow-2xl">
// //             <ArrowRightIcon className="w-5 h-5 my-1.5 mx-1" stoke="#000"/>
// //         </div>
// //     );

// //     return (
// //         <>
// //             <div className="p-10">
// //                 <Carousel infinite customLeftArrow={customLeftArrow} customRightArrow={customRightArrow} responsive={responsive} itemClass="pl-10">
// //                     <CardCarousel/>
// //                     <CardCarousel/>
// //                     <CardCarousel/>
// //                     <CardCarousel/>
// //                 </Carousel>
// //             </div>      
// //         </>
// //     )
// // }

// {/* {[...Array(3)].map((idx) => {
//     return(
//         <CardCarousel key={idx}/>
//     )
// })} */}
// export default function Carousels() {
//     const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
//         <ArrowCircleLeftIcon className="w-6 h-6 text-gray-600" {...props}/>
//       );
    
//       const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
//         <ArrowCircleRightIcon className="w-6 h-6 text-gray-600" {...props}/>
//       );
    
//       const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         initialSlide:3,
//         className: 'react__slick__slider__parent',
//         // prevArrow: <SlickArrowLeft />,
//         // nextArrow: <SlickArrowRight />,
//         responsive: [
//             {
//               breakpoint: 1024,
//               settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: true
//               }
//             },
//             {
//               breakpoint: 600,
//               settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 initialSlide: 0
//               }
//             },
//             {
//               breakpoint: 480,
//               settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//               }
//             }
//           ]
//       };
//       return (
//        <div>
//                 <Slider {...settings}>
//                     <CardCarousel/>
//                     <CardCarousel/>
//                     <CardCarousel/>
//                     <CardCarousel/>
//                     <CardCarousel/>
//                     <CardCarousel/>
//                     <CardCarousel/>
//                     <CardCarousel/>
//                 </Slider>
//             </div>
         
//       );
// }

import { Swiper, SwiperSlide } from 'swiper/react';
import CardCarousel from './CardCarousel';

export default function Carousels() {
    return (
        <Swiper
            centeredSlides={true}
            navigation={true}
            pagination={{ "clickable": true}} 
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
                "640": {
                  "slidesPerView": 1,
                  "spaceBetween": 20,
                  "centeredSlides": true    
                },
                "768": {
                  "slidesPerView": 2,
                  "spaceBetween": 40
                },
                "1024": {
                  "slidesPerView":3,
                  "spaceBetween": 50
                }
              }}
            >
            <SwiperSlide><CardCarousel/></SwiperSlide>
            <SwiperSlide><CardCarousel/></SwiperSlide>
            <SwiperSlide><CardCarousel/></SwiperSlide>
            <SwiperSlide><CardCarousel/></SwiperSlide>
            <SwiperSlide><CardCarousel/></SwiperSlide>
      </Swiper>
    )
}

