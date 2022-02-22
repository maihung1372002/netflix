// import { Swiper, SwiperSlide} from 'swiper/react';
// import 'swiper/css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slide from "../../components/slide/Slide";
import styled from './Slides.module.css';
import ButtonSwipe from '../../components/Button/ButtonSwipe';
import { RIGHT } from '../../globalConfig/CONSTANTS';
import clsx from 'clsx';

function Slides() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div>

            <Slider {...settings}>

                <Slide/>
                <Slide/>
                <Slide/>
                <Slide/>


            </Slider>




            {/* <Swiper 
                className={styled.wrap}
                spaceBetween={0}
                slidesPerView={1}
                // navigation
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><Slide/></SwiperSlide>
                <SwiperSlide><Slide/></SwiperSlide>
                <SwiperSlide><Slide/></SwiperSlide>
                <SwiperSlide><Slide/></SwiperSlide>
            </Swiper>
            <div className={clsx(styled.btnRight,styled.btnSwipe)}>
                <ButtonSwipe width={44} height={44} side={RIGHT}/>
            </div>
            <div className={clsx(styled.btnLeft, styled.btnSwipe)}>
                <ButtonSwipe width={44} height={44} side={''}/>
            </div> */}
        </div>
    )
}

export default Slides;