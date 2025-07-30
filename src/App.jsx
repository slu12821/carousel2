import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import {EffectCoverflow, Pagination, Navigation} from 'swiper';


import slider_image1 from "./assets/rock1.jpg"
import slider_image2 from "./assets/rock2.jpg"
import slider_image3 from "./assets/rock3.jpg"
import slider_image4 from "./assets/rock4.jpg"
import slider_image5 from "./assets/rock5.jpg"
import slider_image6 from "./assets/rock6.jpg"
import slider_image7 from "./assets/rock7.jpg"




function App() {
  return (
     <div className="container">
     <h1 className="heading">Rock Climbing Gallery</h1>
     <Swiper
     effect={'coverflow'}
     grabCursor={true}
     centeredSlides={true}
     loop={true}
     slidesPerView={'auto'}
     coverflowEffect={
       {
         rotate: 0,
         stretch: 0,
         depth: 100,
         modifier: 2.5,
       }}
       pagination={{el:'.swiper-pagination', clickable:true}}
       navigation= { {
         nextEl:'.swiper-button-next',
         prevEl:'.swiper-button-prev',
         clickable: true,
       }}
       modules={[EffectCoverflow,Pagination, Navigation]}
       className='swiper_container'
     >
       <SwiperSlide>
         <img src={slider_image1} alt="slide_image" />
       </SwiperSlide>
        <SwiperSlide>
         <img src={slider_image2} alt="slide_image" />
       </SwiperSlide>
       <SwiperSlide>
         <img src={slider_image3} alt="slide_image" />
       </SwiperSlide>
        <SwiperSlide>
         <img src={slider_image4} alt="slide_image" />
       </SwiperSlide>
        <SwiperSlide>
         <img src={slider_image5} alt="slide_image" />
       </SwiperSlide>
        <SwiperSlide>
         <img src={slider_image6} alt="slide_image" />
       </SwiperSlide>
        <SwiperSlide>
         <img src={slider_image7} alt="slide_image" />
       </SwiperSlide>
     
     </Swiper>
      <div className="slider-controler">
       <div className="swiper-button-prev slider-arrow">
       <ion-icon name="arrow-back-outline"></ion-icon>
       </div>
       <div className="swiper-button-next slider-arrow">
       <ion-icon name="arrow-forward-outline"></ion-icon>
       </div>
       <div className="swiper-pagination"></div>
       </div>
     </div>
 );
}


export default App



