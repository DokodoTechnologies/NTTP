"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Banner() {
  return (
    <section className='main-banner'>
      <Swiper {...swiperOptions}>
        <SwiperSlide>
          <div className='banner-slide'>
            <div className='banner-content'>
              <h2>
                Together We Can Make
                <br /> an Impact
              </h2>
              <p>
                Youth Empowerment, Community Enrichment, Brightening Childhoods,
                Strengthening Futures. Love, Support for Every Child
              </p>
              <Link href='/about' className='thm-btn'>
                Read More <span><i className='icon-arrow-right'></i></span>
              </Link>
            </div>
            <div className='banner-image'>
              <img src='/assets/images/slider/home.jpg' alt='Slide 1' />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='banner-slide'>
            <div className='banner-content'>
              <h2>
                Together We Can Make
                <br /> a Difference
              </h2>
              <p>
                Youth Empowerment, Community Enrichment, Brightening Childhoods,
                Strengthening Futures. Love, Support for Every Child
              </p>
              <Link href='/about' className='thm-btn'>
                Read More <span><i className='icon-arrow-right'></i></span>
              </Link>
            </div>
            <div className='banner-image'>
              <img src='/assets/images/slider/home2.jpg' alt='Slide 2' />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <ul className='banner-slider-nav-four'>
        <li className='banner-slider-control-four banner-slider-button-prev h1p'>
          <span><i className='icon-arrow-right-two' aria-hidden='true'></i></span>
        </li>
        <li className='banner-slider-control-four banner-slider-button-next h1n'>
          <span><i className='icon-arrow-right-two' aria-hidden='true'></i></span>
        </li>
      </ul>

      <style jsx>{`
        .main-banner {
          width: 100%;
        }

        .banner-slide {
          display: flex;
          align-items: stretch;
          height: 500px;
        }

        .banner-content {
          flex: 1;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-color: #e6f4ff;
        }

        .banner-content h2 {
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .banner-content p {
          font-size: 18px;
          margin-bottom: 30px;
        }

        .thm-btn {
          background-color: #2563eb;
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }

        .banner-image {
          flex: 1;
          height: 100%;
          overflow: hidden;
        }

        .banner-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .banner-slide {
            flex-direction: column;
            height: auto;
          }

          .banner-content {
            padding: 20px;
            text-align: center;
          }

          .banner-image {
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
}
