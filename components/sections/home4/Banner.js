// "use client";
// import Link from "next/link";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// const swiperOptions = {
//   modules: [Autoplay, Pagination, Navigation],
//   slidesPerView: 1,
//   spaceBetween: 0,
//   autoplay: {
//     delay: 6000,
//     disableOnInteraction: false,
//   },
//   loop: true,
//   navigation: {
//     nextEl: ".h1n",
//     prevEl: ".h1p",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// };

// export default function Banner() {
//   return (
//     <section className='main-banner'>
//       <Swiper {...swiperOptions}>
//         <SwiperSlide>
//           <div className='banner-slide'>
//             <div className='banner-content'>
//               <h2>
//                  Together for 

//                 <br /> Sustainable Peace:
//               </h2>
//               <p>
//                 We are committed to fostering sustainable peace 
//                 by promoting inclusive and constructive dialogue.

//               </p>
//               <Link href='/about' className='thm-btn'>
//                 Read More <span><i className='icon-arrow-right'></i></span>
//               </Link>
//             </div>
//             <div className='banner-image'>
//               <img src='/assets/images/slider/home.jpg' alt='Slide 1' />
//             </div>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className='banner-slide'>
//             <div className='banner-content'>
//               <h2>
//                 Our Commitment to 
//                 <br /> Inclusive Democracy:
//               </h2>
//               <p>
//                 At the heart of our mission is a steadfast advocacy for impartiality and fairness.
//               </p>
//               <Link href='/about' className='thm-btn'>
//                 Read More <span><i className='icon-arrow-right'></i></span>
//               </Link>
//             </div>
//             <div className='banner-image'>
//               <img src='/assets/images/slider/home2.jpg' alt='Slide 2' />
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>

//       <ul className='banner-slider-nav-four'>
//         <li className='banner-slider-control-four banner-slider-button-prev h1p'>
//           <span><i className='icon-arrow-right-two' aria-hidden='true'></i></span>
//         </li>
//         <li className='banner-slider-control-four banner-slider-button-next h1n'>
//           <span><i className='icon-arrow-right-two' aria-hidden='true'></i></span>
//         </li>
//       </ul>

//       <style jsx>{`
//         .main-banner {
//   width: 100%;
//     background-color: #f1f1f1; /* light grey background */

// }

// .banner-slide {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 400px;
//   gap: 30px;
//   padding: 20px;
// }

// .banner-content {
//   max-width: 500px;
//   padding: 30px;
//   background-color: #e6f4ff;
//   border-radius: 10px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
// }

// .banner-content h2 {
//   font-size: 32px;
//   font-weight: bold;
//   margin-bottom: 15px;
// }

// .banner-content p {
//   font-size: 16px;
//   margin-bottom: 25px;
// }

// .thm-btn {
//   background-color: #2563eb;
//   color: white;
//   padding: 10px 20px;
//   border-radius: 5px;
//   text-decoration: none;
//   display: inline-flex;
//   align-items: center;
//   gap: 5px;
// }

// .banner-image {
//   flex-shrink: 0;
//   max-width: 600px;
// }

// .banner-image img {
//   width: 100%;
//   height: auto;
//   border-radius: 10px;
//   object-fit: contain;
// }

// @media (max-width: 768px) {
//   .banner-slide {
//     flex-direction: column;
//     height: auto;
//   }

//   .banner-content {
//     max-width: 100%;
//     text-align: center;
//     padding: 20px;
//   }

//   .banner-image {
//     max-width: 100%;
//   }
// }

//       `}</style>
//     </section>
//   );
// }

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
              <div className='content-wrapper'>
                <h2>
                  Together for 
                  <br /> Sustainable Peace:
                </h2>
                <p>
                  We are committed to fostering sustainable peace 
                  by promoting inclusive and constructive dialogue.
                </p>
                <Link 
                  href='/about' 
                  className='carousel-btn'
                  style={{
                    background: 'transparent',
                    color: 'white',
                    border: '2px solid white',
                    padding: '15px 30px',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Read More <span><i className='icon-arrow-right'></i></span>
                </Link>
              </div>
            </div>
            <div className='banner-image'>
              <img src='/assets/images/slider/home.jpg' alt='Slide 1' />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='banner-slide'>
            <div className='banner-content'>
              <div className='content-wrapper'>
                <h2>
                  Our Commitment to 
                  <br /> Inclusive Democracy:
                </h2>
                <p>
                  At the heart of our mission is a steadfast advocacy for impartiality and fairness.
                </p>
                <Link 
                  href='/about' 
                  className='carousel-btn'
                  style={{
                    background: 'transparent',
                    color: 'white',
                    border: '2px solid white',
                    padding: '15px 30px',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Read More <span><i className='icon-arrow-right'></i></span>
                </Link>
              </div>
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
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          position: relative;
          overflow: hidden;
        }

        .banner-slide {
          display: flex;
          align-items: stretch;
          min-height: 70vh;
          max-height: 600px;
          position: relative;
        }

        .banner-content {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
          position: relative;
          overflow: hidden;
        }

        .banner-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="1" fill="white" opacity="0.1"/><circle cx="80" cy="80" r="1" fill="white" opacity="0.1"/><circle cx="40" cy="60" r="1" fill="white" opacity="0.1"/><circle cx="60" cy="30" r="1" fill="white" opacity="0.1"/></svg>');
          pointer-events: none;
        }

        .content-wrapper {
          max-width: 500px;
          padding: 40px;
          position: relative;
          z-index: 1;
        }

        .banner-content h2 {
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 700;
          margin-bottom: 20px;
          color: white;
          line-height: 1.2;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .banner-content p {
          font-size: 18px;
          margin-bottom: 30px;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
        }

        .carousel-btn {
          background: transparent;
          color: white !important;
          border: 2px solid white;
          padding: 15px 30px;
          border-radius: 50px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .carousel-btn:hover {
          background: white;
          color: #1e40af !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }

        .banner-image {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f1f5f9 0%, #ffffff 100%);
          position: relative;
          overflow: hidden;
        }

        .banner-image::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .banner-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: relative;
          z-index: 1;
        }

        .banner-slider-nav-four {
          position: absolute;
          right: 30px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 15px;
          z-index: 10;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .banner-slider-control-four {
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .banner-slider-control-four:hover {
          background: white;
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }

        .banner-slider-button-prev {
          transform: rotate(180deg);
        }

        .banner-slider-control-four span {
          color: #1e40af;
          font-size: 16px;
        }

        @media (max-width: 1024px) {
          .banner-slide {
            min-height: 60vh;
          }

          .content-wrapper {
            padding: 30px;
          }

          .banner-slider-nav-four {
            right: 20px;
          }
        }

        @media (max-width: 768px) {
          .banner-slide {
            flex-direction: column;
            min-height: auto;
          }

          .banner-content {
            min-height: 400px;
          }

          .content-wrapper {
            padding: 30px 20px;
            text-align: center;
            max-width: 100%;
          }

          .banner-image {
            min-height: 300px;
          }

          .banner-slider-nav-four {
            bottom: 20px;
            right: 20px;
            top: auto;
            transform: none;
            flex-direction: row;
          }
        }

        @media (max-width: 480px) {
          .banner-content {
            min-height: 350px;
          }

          .content-wrapper {
            padding: 20px 15px;
          }

          .banner-image {
            min-height: 250px;
          }

          .banner-slider-nav-four {
            right: 15px;
          }
        }
      `}</style>
    </section>
  );
}