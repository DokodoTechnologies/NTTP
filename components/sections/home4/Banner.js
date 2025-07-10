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
                 Together for 

                <br /> Sustainable Peace:
              </h2>
              <p>
                We are committed to fostering sustainable peace 
                by promoting inclusive and constructive dialogue.

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
                Our Commitment to 
                <br /> Inclusive Democracy:
              </h2>
              <p>
                At the heart of our mission is a steadfast advocacy for impartiality and fairness.
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
    background-color: #f1f1f1; /* light grey background */

}

.banner-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  gap: 30px;
  padding: 20px;
}

.banner-content {
  max-width: 500px;
  padding: 30px;
  background-color: #e6f4ff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.banner-content h2 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 15px;
}

.banner-content p {
  font-size: 16px;
  margin-bottom: 25px;
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
  flex-shrink: 0;
  max-width: 600px;
}

.banner-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: contain;
}

@media (max-width: 768px) {
  .banner-slide {
    flex-direction: column;
    height: auto;
  }

  .banner-content {
    max-width: 100%;
    text-align: center;
    padding: 20px;
  }

  .banner-image {
    max-width: 100%;
  }
}

      `}</style>
    </section>
  );
}
