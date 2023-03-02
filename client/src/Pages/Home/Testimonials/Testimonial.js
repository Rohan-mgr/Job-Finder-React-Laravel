import React, { useState, useCallback, useEffect } from "react";
import "./Testimonial.css";
import { ImQuotesLeft } from "react-icons/im";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchTestimonials } from "../../../services/auth";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper.min.css";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function Testimonial() {
  const [testimonials, setTestimonials] = useState(null);
  const getTestimonials = useCallback(async () => {
    try {
      const response = await fetchTestimonials();
      setTestimonials(response.reverse());
    } catch (e) {
      throw new Error(e);
    }
  }, []);
  useEffect(() => {
    getTestimonials();
  }, [getTestimonials]);
  console.log(testimonials);

  return (
    <section className="testimonial-container">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        init={true}
        initialSlide={0}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        allowSlideNext={true}
        allowSlidePrev={true}
        longSwipes={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="testimonial mySwiper"
      >
        <div className="testi-content">
          {testimonials?.length > 0 ? (
            testimonials?.slice(0, 3).map((t) => {
              return (
                <SwiperSlide className="slide">
                  <img
                    src={`http://localhost:8000/${t.profile}`}
                    alt=""
                    className="image"
                  />
                  <p>“{t.description}”</p>
                  <i className=" quote-icon">
                    <ImQuotesLeft />
                  </i>

                  <div className="details mb-5">
                    <span className="name">
                      <strong>{t.clientName}</strong>
                    </span>
                    <span className="job">
                      {t.designation} at {t.companyName}
                    </span>
                  </div>
                </SwiperSlide>
              );
            })
          ) : (
            <h2 className="text-center">Loading...</h2>
          )}
          <SwiperSlide className="slide">
            <img
              src={require("../../../Assets/Images/testimonial.png")}
              alt=""
              className="image"
            />
            <p>
              “Your application system is fantastic, job hunting can be very
              frustrating and you are by far the most friendly and professional
              recruitment business I have worked with.”
            </p>
            <i className=" quote-icon">
              <ImQuotesLeft />
            </i>

            <div className="details mb-5">
              <span className="name">
                <strong>John Doe</strong>
              </span>
              <span className="job">Marketing Manager at flipkart</span>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </section>
  );
}

export default Testimonial;
