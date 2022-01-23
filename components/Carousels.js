import CardCarousel from './CardCarousel';
import Slider from "react-slick";

export default function Carousels() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        }
      }
    ]
  };
    return (
      <div className='container mx-auto px-2 pt-7'>
        <h1 className='pb-2 font-bold text-2xl'>Rekomendasi Daerah Kantor </h1>
        <div className='pl-10 sm:pl-0 md:pl-10 lg:pl-0'>
          <Slider {...settings} className='pl-10 sm:pl-0 md:pl-5 lg:pl-0'>
            <CardCarousel/>
            <CardCarousel/>
            <CardCarousel/>
            <CardCarousel/>
            <CardCarousel/>
            <CardCarousel/>
            <CardCarousel/>
            <CardCarousel/>
            <CardCarousel/>
            <CardCarousel/>
          </Slider>
        </div>
      </div>
    )
}

