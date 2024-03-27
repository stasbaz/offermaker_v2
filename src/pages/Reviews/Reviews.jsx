import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import customer from "../../images/customer.png";
import "./Review.css";

function Reviews() {
  return (
    <div className="reviews_section">
      <div className="start_container">
        <svg
          className="swiper_button buttonPrev"
          width="92"
          height="92"
          viewBox="0 0 92 92"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="45.7021"
            y="91.4031"
            width="64.6317"
            height="64.6317"
            rx="8"
            transform="rotate(-135 45.7021 91.4031)"
            fill="#2FDF84"
          />
          <rect
            x="45.7021"
            y="91.4031"
            width="64.6317"
            height="64.6317"
            rx="8"
            transform="rotate(-135 45.7021 91.4031)"
            stroke="white"
          />
          <path
            d="M47.9571 58.3718L46.4174 59.8446C46.1049 60.157 45.7256 60.3132 45.2793 60.3132C44.833 60.3132 44.4536 60.157 44.1412 59.8446L31.1537 46.8572C30.8413 46.5447 30.6851 46.1654 30.6851 45.7191C30.6851 45.2728 30.8413 44.8934 31.1537 44.581L44.1412 31.5935C44.4536 31.2811 44.833 31.1249 45.2793 31.1249C45.7256 31.1249 46.1049 31.2811 46.4174 31.5935L47.9571 33.0663C48.2695 33.3788 48.4146 33.7581 48.3923 34.2044C48.3699 34.6507 48.2026 35.0301 47.8902 35.3425L39.8567 43.0412L59.0701 43.0412C59.5164 43.0412 59.8957 43.1974 60.2081 43.5099C60.5206 43.8223 60.6768 44.2016 60.6768 44.6479L60.6768 46.7902C60.6768 47.2365 60.5206 47.6159 60.2081 47.9283C59.8957 48.2407 59.5164 48.3969 59.0701 48.3969L39.8567 48.3969L47.8902 56.0956C48.2026 56.408 48.3699 56.7874 48.3923 57.2337C48.4146 57.68 48.2695 58.0594 47.9571 58.3718L47.9571 58.3718Z"
            fill="black"
          />
        </svg>

        <h2 className="reviews_title">What Clients Say</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".buttonPrev",
            nextEl: ".buttonNext",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <div className="reviews_block">
              <img src={customer} alt="customer" className="customer_img" />
              <div className="review_info">
                <h3 className="cuctomer_title">Tim Fong</h3>
                <p className="cuctomer_subtitle">TFS Project manager </p>
                <p className="customer_text">
                  Our client, a UK perfume retailer, has over 200 offline stores
                  and an online presence introduced with the main website.
                  Perfume retailer, has over 200 offline stores and an online
                  presence introduced with the main website.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="reviews_block">
              <img src={customer} alt="customer" className="customer_img" />
              <div className="review_info">
                <h3 className="cuctomer_title">Tim Fong</h3>
                <p className="cuctomer_subtitle">TFS Project manager </p>
                <p className="customer_text">
                  Our client, a UK perfume retailer, has over 200 offline stores
                  and an online presence introduced with the main website.
                  Perfume retailer, has over 200 offline stores and an online
                  presence introduced with the main website.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="reviews_block">
              <img src={customer} alt="customer" className="customer_img" />
              <div className="review_info">
                <h3 className="cuctomer_title">Tim Fong</h3>
                <p className="cuctomer_subtitle">TFS Project manager </p>
                <p className="customer_text">
                  Our client, a UK perfume retailer, has over 200 offline stores
                  and an online presence introduced with the main website.
                  Perfume retailer, has over 200 offline stores and an online
                  presence introduced with the main website.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <svg
          className="swiper_button buttonNext"
          width="92"
          height="92"
          viewBox="0 0 92 92"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="45.7012"
            width="64.6317"
            height="64.6317"
            rx="8"
            transform="rotate(45 45.7012 0)"
          />
          <rect
            x="45.7012"
            width="64.6317"
            height="64.6317"
            rx="8"
            transform="rotate(45 45.7012 0)"
            stroke="white"
          />
          <path d="M43.4462 33.0313L44.986 31.5585C45.2984 31.2461 45.6777 31.0898 46.124 31.0898C46.5703 31.0898 46.9497 31.2461 47.2621 31.5585L60.2496 44.5459C60.562 44.8583 60.7182 45.2377 60.7182 45.684C60.7182 46.1303 60.562 46.5097 60.2496 46.8221L47.2621 59.8095C46.9497 60.1219 46.5703 60.2781 46.124 60.2781C45.6777 60.2781 45.2984 60.1219 44.986 59.8095L43.4462 58.3367C43.1338 58.0243 42.9888 57.645 43.0111 57.1987C43.0334 56.7524 43.2007 56.373 43.5132 56.0606L51.5466 48.3618H32.3333C31.887 48.3618 31.5076 48.2056 31.1952 47.8932C30.8828 47.5808 30.7266 47.2015 30.7266 46.7551V44.6129C30.7266 44.1666 30.8828 43.7872 31.1952 43.4748C31.5076 43.1624 31.887 43.0062 32.3333 43.0062H51.5466L43.5132 35.3075C43.2007 34.995 43.0334 34.6157 43.0111 34.1694C42.9888 33.7231 43.1338 33.3437 43.4462 33.0313V33.0313Z" />
        </svg>
      </div>
    </div>
  );
}

export default Reviews;
