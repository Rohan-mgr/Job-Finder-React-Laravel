import React from "react";
import "./Testimonial.css";
import { ImQuotesLeft } from "react-icons/im";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper.min.css";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


function Testimonial() {


  return (
    <section className="testimonial-container">
    
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        allowSlideNext={true}
        allowSlidePrev={true}
        longSwipes={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="testimonial mySwiper">

        <div className="testi-content">
          <SwiperSlide className="slide">
            <img
              src={require("../../../Assets/Images/testimonial-founder.png")}
              alt=""
              className="image"
            />
            <p>
              “I am at an age where I just want to be fit and healthy our bodies
              are our responsibility! So start caring for your body and it will
              care for you. Eat clean it will care for you and workout hard.”
            </p>
            <i className=" quote-icon"><ImQuotesLeft /></i>

            <div className="details mb-5">
              <span className="name">Amrit Gurung</span>
              <span className="job">Web Developer</span>
            </div>

          </SwiperSlide>
            <SwiperSlide className="slide">
              <img
                src={require("../../../Assets/Images/ourteam_amrit-min.jpg")}
                alt=""
                className="image"
              />
              <p>
                “I am at an age where I just want to be fit and healthy our bodies
                are our responsibility! So start caring for your body and it will
                care for you. Eat clean it will care for you and workout hard.”
              </p>
              <i className=" quote-icon"><ImQuotesLeft /></i>

              <div className="details mb-5">
                <span className="name">Amrit Gurung</span>
                <span className="job">Web Developer</span>
              </div>

            </SwiperSlide>
            <SwiperSlide className="slide">
              <img
                src={require("../../../Assets/Images/ourteam_amrit-min.jpg")}
                alt=""
                className="image"
              />
              <p>
                “I am at an age where I just want to be fit and healthy our bodies
                are our responsibility! So start caring for your body and it will
                care for you. Eat clean it will care for you and workout hard.”
              </p>
              <i className=" quote-icon"><ImQuotesLeft /></i>

              <div className="details mb-5">
                <span className="name">Amrit Gurung</span>
                <span className="job">Web Developer</span>
              </div>

            </SwiperSlide>
        </div>
      </Swiper>
       
    </section>
  );
}

export default Testimonial;
