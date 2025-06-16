"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"



const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,    
    loop: true,
    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },
    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            
        },
        575: {
            slidesPerView: 1,
            
        },
        767: {
            slidesPerView: 1,
            
        },
        991: {
            slidesPerView: 2,
            
        },
        1199: {
            slidesPerView: 3,
            
        },
        1350: {
            slidesPerView: 3,
            
        },
    }



}


export default function Home() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);

  
  };

  return (
    <>
      <Layout headerStyle={3} footerStyle={3} breadcrumbTitle='About Us'>
        {/*About One Start */}
        <section className='about-One'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-6'>
                <div
                  className='about-One__left  wow slideInLeft'
                  data-wow-delay='100ms'
                  data-wow-duration='2500ms'
                >
                  <div className='about-One__img-box'>
                    <div className='about-One__img'>
                      <img
                        src='assets/images/about/culture_nepal.jpg'
                        alt=''
                      />
                    </div>
                    <div className='about-One__img-2'>
                      <img
                        src='assets/images/about/together.jpg'
                        alt=''
                      />
                    </div>
                    <div
                      className='about-One__provide-box wow zoomIn animated animated'
                      data-wow-delay='500ms'
                      data-wow-duration='2500ms'
                    >
                      <div className='about-One__provide-icon'>
                        <span className='icon-pet-care'></span>
                      </div>
                      <div className='about-One__provide-content'>
                        <div className='about-One__provide-count count-box'>
                          <h3 className='count-text'>3</h3>
                          <span>+</span>
                        </div>
                        <p className='about-One__provide-count-text'>
                          Years Providing Peace
                        </p>
                      </div>
                    </div>
                    <div className='about-One__shape-1'></div>
                  </div>
                </div>
              </div>
              <div className='col-xl-6'>
                <div
                  className='about-One__right wow fadeInRight'
                  data-wow-delay='300ms'
                >
                  <div className='section-title text-left sec-title-animation animation-style2'>
                    <div className='section-title__tagline-box'>
                      <span className='section-title__tagline'>About Us</span>
                    </div>
                    <h2 className='section-title__title title-animation'>
                    Nepal Transition 
                      <br /> To Peace
                    </h2>
                  </div>
                  <div className='about-One__vission-mission'>
                    <div className='about-One__tab-box tabs-box'>
                      <ul className='tab-buttons clearfix list-unstyled'>
                        <li
                          className={
                            activeIndex == 1 ? "tab-btn active-btn" : "tab-btn"
                          }
                          onClick={() => handleOnClick(1)}
                        >
                          <span>Our Mission</span>
                        </li>
                        <li
                          className={
                            activeIndex == 2 ? "tab-btn active-btn" : "tab-btn"
                          }
                          onClick={() => handleOnClick(2)}
                        >
                          <span>Our Vision</span>
                        </li>
                        <li
                          className={
                            activeIndex == 3 ? "tab-btn active-btn" : "tab-btn"
                          }
                          onClick={() => handleOnClick(3)}
                        >
                          <span>Our Goal</span>
                        </li>
                      </ul>
                      <div className='tabs-content'>
                        {/*tab*/}
                        <div
                          className={
                            activeIndex == 1
                              ? "tab fadeInUp animated show active-tab"
                              : "tab fadeInUp animated"
                          }
                        >
                          <div className='tabs-content__inner'>
                            <p>
                              To become a trusted and credible institute to
                              prevent and transform conflict.
                            </p>
                          </div>
                        </div>
                        {/*tab*/}
                        {/*tab*/}
                        <div
                          className={
                            activeIndex == 2
                              ? "tab fadeInUp animated show active-tab"
                              : "tab fadeInUp animated"
                          }
                        >
                          <div className='tabs-content__inner'>
                            <p>
                              Social and political exclusion gradually
                              eliminated in Nepal and South Asia, paving way for
                              peaceful coexistence, good governance and economic
                              prosperity.
                            </p>
                          </div>
                        </div>
                        {/*tab*/}
                        {/*tab*/}
                        <div
                          className={
                            activeIndex == 3
                              ? "tab fadeInUp animated show active-tab"
                              : "tab fadeInUp animated"
                          }
                        >
                          <div className='tabs-content__inner'>
                            <p>
                              To actively reduce social and political exclusion
                              by promoting peacebuilding, inclusive governance,
                              and sustainable development through trusted
                              conflict prevention and transformation practices
                              across Nepal and South Asia.
                            </p>
                          </div>
                        </div>
                        {/*tab*/}
                      </div>
                    </div>
                  </div>
                  <div className='about-One__btn-and-need-help'>
                    <div className='about-One__btn-box'>
                      <Link
                        href='donation-details'
                        className='about-One__btn thm-btn'
                      >
                        Contact Now
                        <span>
                          <i className='icon-arrow-right'></i>
                        </span>
                      </Link>
                    </div>
                    <div className='about-One__need-help'>
                      <div className='icon'>
                        <span className='icon-phone-call'></span>
                      </div>
                      <div className='content'>
                        <p>Need help?</p>
                        <h4>
                          <Link href='tel:3195550115'>
                            (977) 01-4595683/4598908
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* trying  */}


        {/* dfjfad */}


        {/*About One End */}

        {/*Found One Start */}
        {/* <section className='found-one'>
          <div className='found-one__bg'>
            <div className='found-one__shape-1 float-bob-y'>
              <img src='assets/images/shapes/found-one-shape-1.png' alt='' />
            </div>
          </div>
          <div className='container'>
            <div className='section-title text-center sec-title-animation animation-style1'>
              <div className='section-title__tagline-box'>
                <span className='section-title__tagline'>Peace</span>
              </div>
              <h2 className='section-title__title title-animation'>
                Together We Can <br /> <span>Make</span> a Difference
              </h2>
            </div>
            <div className='row'> */}
              {/*Found One Single Start*/}
              {/* <div
                className='col-xl-4 col-lg-4 wow fadeInLeft'
                data-wow-delay='100ms'
              >
                <div className='found-one__single'>
                  <div className='found-one__img-box'>
                    <div className='found-one__img'>
                      <img src='assets/images/resources/found-1-1.jpg' alt='' />
                      <img src='assets/images/resources/found-1-1.jpg' alt='' />
                    </div>
                  </div>
                  <div className='found-one__content'>
                    <h4 className='found-one__title'>
                      <Link href='donation-details'>nttp</Link>
                    </h4>
                    <p className='found-one__text'>
                      lorem ipsam{" "}
                    </p> */}
                    {/* <div className="found-one__goals">
                                    <div className="found-one__raised">
                                        <p>Raised</p>
                                        <span>40,802$</span>
                                    </div>
                                    <div className="found-one__raised">
                                        <p>Goal</p>
                                        <span>100,000$</span>
                                    </div>
                                </div> */}
                    {/* <div className="found-one__progress">
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="75%" style={{ width: '75%' }}>
                                        </div>
                                    </div>
                                </div> */}
                    {/* <div className='found-one__btn-box'>
                      <Link
                        href='/'
                        className='found-one__btn thm-btn'
                      >
                        Read more
                        <span>
                          <i className='icon-arrow-right'></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div> */}
              {/*Found One Single End*/}
              {/*Found One Single Start*/}
              {/* <div
                className='col-xl-4 col-lg-4 wow fadeInUp'
                data-wow-delay='200ms'
              >
                <div className='found-one__single'>
                  <div className='found-one__img-box'>
                    <div className='found-one__img'>
                      <img src='assets/images/resources/found-1-2.jpg' alt='' />
                      <img src='assets/images/resources/found-1-2.jpg' alt='' />
                    </div>
                  </div>
                  <div className='found-one__content'>
                    <h4 className='found-one__title'>
                      <Link href='donation-details'>NTTP</Link>
                    </h4>
                    <p className='found-one__text'>
                      Lorem Ipsum{" "}
                    </p> */}
                    {/* <div className="found-one__goals">
                                    <div className="found-one__raised">
                                        <p>Raised</p>
                                        <span>40,802$</span>
                                    </div>
                                    <div className="found-one__raised">
                                        <p>Goal</p>
                                        <span>100,000$</span>
                                    </div>
                                </div>
                                <div className="found-one__progress">
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="75%" style={{ width: '75%' }}>
                                        </div>
                                    </div>
                                </div> */}
                    {/* <div className='found-one__btn-box'>
                      <Link
                        href='/'
                        className='found-one__btn thm-btn'
                      >
                        Read more
                        <span>
                          <i className='icon-arrow-right'></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div> */}
              {/*Found One Single End*/}
              {/*Found One Single Start*/}
              {/* <div
                className='col-xl-4 col-lg-4 wow fadeInRight'
                data-wow-delay='300ms'
              >
                <div className='found-one__single'>
                  <div className='found-one__img-box'>
                    <div className='found-one__img'>
                      <img src='assets/images/resources/found-1-3.jpg' alt='' />
                      <img src='assets/images/resources/found-1-3.jpg' alt='' />
                    </div>
                  </div>
                  <div className='found-one__content'>
                    <h4 className='found-one__title'>
                      <Link href='donation-details'>nttp</Link>
                    </h4>
                    <p className='found-one__text'>
                      lorem ipsuml{" "}
                    </p> */}
                    {/* <div className="found-one__goals">
                                    <div className="found-one__raised">
                                        <p>Raised</p>
                                        <span>40,802$</span>
                                    </div>
                                    <div className="found-one__raised">
                                        <p>Goal</p>
                                        <span>100,000$</span>
                                    </div>
                                </div>
                                <div className="found-one__progress">
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="75%" style={{ width: '75%' }}>
                                        </div>
                                    </div>
                                </div> */}
                    {/* <div className='found-one__btn-box'>
                      <Link
                        href='/'
                        className='found-one__btn thm-btn'
                      >
                        Read more
                        <span>
                          <i className='icon-arrow-right'></i>
                        </span>
                      </Link>
                    </div> */}
                  {/* </div> */}
                {/* </div>
              </div> */}
              {/*Found One Single End*/}
            {/* </div>
          </div>
        </section> */}
        {/*Found One End */}

        {/* --------------------------------------------------------------------------------------- */}

        {/*Volunteer Carousel Page Start*/}
        <section className="volunteer-carousel-page" style={{ backgroundColor: '#f1f0ec', marginBottom: '8rem' ,paddingBottom:'6rem'
          ,paddingTop: '5rem'
        }}>
    <div className="container">
        {/* Header Section */}
        {/* Header Section */}
<div className="section-header" style={{textAlign: 'left', marginBottom: '3rem'}}>
    <p style={{
        fontSize: '0.9rem',
        color: '#5ba4d4',
        fontWeight: '600',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        marginBottom: '0.5rem',
        margin: '0 0 0.5rem 0'
    }}>Our Executive Committee</p>
    <h2 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#4a4a4a',
        lineHeight: '1.2',
        margin: '0'
    }}>Meet The Dedicated Leaders <br /></h2>
</div>
        
        <Swiper {...swiperOptions} className="volunteer-carousel-style owl-carousel owl-theme carousel-dot-style ">
            <SwiperSlide>
            {/*Volunteer Page Single Start*/}
            <div className="item">
                <div className="team-one__single">
                    <div className="team-one__img-box">
                        <div className="team-one__img">
                            <img src="assets/images/about/stella.png" alt=""/>
                        </div>
                    </div>
                    <div className="team-one__content">
                        <div className="team-one__name-box">
                            <h4 className="team-one__name"><Link href="volunteer-details">Ms.Stella Tamang</Link>
                            </h4>
                            <p className="team-one__sub-title">is Chairperson at NTTP-I. She is the Founding Chair and currently Advisor of the National Indigenous...</p>
                        </div>
                        <div className="team-one__share-and-social">
                            <div className="team-one__social">
                                <Link href="volunteer-details"><span className="icon-facebook"></span></Link>
                                <Link href="volunteer-details"><span className="icon-instagram"></span></Link>
                                <Link href="volunteer-details"><span className="icon-twitter"></span></Link>
                                <Link href="volunteer-details"><span className="icon-link-in"></span></Link>
                            </div>
                            <div className="team-one__share">
                                <Link href="volunteer-details"><span className="icon-share"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Volunteer Page Single End*/}
            </SwiperSlide>
            <SwiperSlide>
            {/*Volunteer Page Single Start*/}
            <div className="item">
                <div className="team-one__single">
                    <div className="team-one__img-box">
                        <div className="team-one__img">
                            <img src="assets/images/about/sagar.png" alt=""/>
                        </div>
                    </div>
                    <div className="team-one__content">
                        <div className="team-one__name-box">
                            <h4 className="team-one__name"><Link href="volunteer-details">Mr.Sagar Prasai</Link>
                            </h4>
                            <p className="team-one__sub-title">Is treasurer of NTTP Institute. He has worked for The Asia Foundation for more than 12 years includi...</p>
                        </div>
                        <div className="team-one__share-and-social">
                            <div className="team-one__social">
                                <Link href="volunteer-details"><span className="icon-facebook"></span></Link>
                                <Link href="volunteer-details"><span className="icon-instagram"></span></Link>
                                <Link href="volunteer-details"><span className="icon-twitter"></span></Link>
                                <Link href="volunteer-details"><span className="icon-link-in"></span></Link>
                            </div>
                            <div className="team-one__share">
                                <Link href="volunteer-details"><span className="icon-share"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Volunteer Page Single End*/}
            </SwiperSlide>
            <SwiperSlide>
            {/*Volunteer Page Single Start*/}
            <div className="item">
                <div className="team-one__single">
                    <div className="team-one__img-box">
                        <div className="team-one__img">
                            <img src="assets/images/about/malik.png" alt=""/>
                        </div>
                    </div>
                    <div className="team-one__content">
                        <div className="team-one__name-box">
                            <h4 className="team-one__name"><Link href="volunteer-details">Mr.Vidyadhar Malik</Link>
                            </h4>
                            <p className="team-one__sub-title">a former Minister, is one of the NTTP facilitators. With a former career in in civil service and gov...
</p>
                        </div>
                        <div className="team-one__share-and-social">
                            <div className="team-one__social">
                                <Link href="volunteer-details"><span className="icon-facebook"></span></Link>
                                <Link href="volunteer-details"><span className="icon-instagram"></span></Link>
                                <Link href="volunteer-details"><span className="icon-twitter"></span></Link>
                                <Link href="volunteer-details"><span className="icon-link-in"></span></Link>
                            </div>
                            <div className="team-one__share">
                                <Link href="volunteer-details"><span className="icon-share"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Volunteer Page Single End*/}
            </SwiperSlide>
            <SwiperSlide>
            {/*Volunteer Page Single Start*/}
            <div className="item">
                <div className="team-one__single">
                    <div className="team-one__img-box">
                        <div className="team-one__img">
                            <img src="assets/images/about/youba.png" alt=""/>
                        </div>
                    </div>
                    <div className="team-one__content">
                        <div className="team-one__name-box">
                            <h4 className="team-one__name"><Link href="volunteer-details">Mr.Youba Raj Acharya</Link>
                            </h4>
                            <p className="team-one__sub-title">is Executive Director at NTTP-I.  He has more than 19 years of professional experience in the field...</p>
                        </div>
                        <div className="team-one__share-and-social">
                            <div className="team-one__social">
                                <Link href="volunteer-details"><span className="icon-facebook"></span></Link>
                                <Link href="volunteer-details"><span className="icon-instagram"></span></Link>
                                <Link href="volunteer-details"><span className="icon-twitter"></span></Link>
                                <Link href="volunteer-details"><span className="icon-link-in"></span></Link>
                            </div>
                            <div className="team-one__share">
                                <Link href="volunteer-details"><span className="icon-share"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Volunteer Page Single End*/}
            </SwiperSlide>
            <SwiperSlide>
            {/*Volunteer Page Single Start*/}
            <div className="item">
                <div className="team-one__single">
                    <div className="team-one__img-box">
                        <div className="team-one__img">
                            <img src="assets/images/about/daman.png" alt=""/>
                        </div>
                    </div>
                    <div className="team-one__content">
                        <div className="team-one__name-box">
                            <h4 className="team-one__name"><Link href="volunteer-details">Mr.Daman Nath Dhungana</Link>
                            </h4>
                            <p className="team-one__sub-title">is a senior NTTP facilitator and Chairperson at NTTP-I. He served as the Speaker of the House after ...</p>
                        </div>
                        <div className="team-one__share-and-social">
                            <div className="team-one__social">
                                <Link href="volunteer-details"><span className="icon-facebook"></span></Link>
                                <Link href="volunteer-details"><span className="icon-instagram"></span></Link>
                                <Link href="volunteer-details"><span className="icon-twitter"></span></Link>
                                <Link href="volunteer-details"><span className="icon-link-in"></span></Link>
                            </div>
                            <div className="team-one__share">
                                <Link href="volunteer-details"><span className="icon-share"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Volunteer Page Single End*/}
            </SwiperSlide>
            <SwiperSlide>
            {/*Volunteer Page Single Start*/}
            <div className="item">
                <div className="team-one__single">
                    <div className="team-one__img-box">
                        <div className="team-one__img">
                            <img src="assets/images/about/birendra.png" alt=""/>
                        </div>
                    </div>
                    <div className="team-one__content">
                        <div className="team-one__name-box">
                            <h4 className="team-one__name"><Link href="volunteer-details">Mr.Birendra P Mishra</Link>
                            </h4>
                            <p className="team-one__sub-title">is an eminent member of Nepal's civil society and a regular contributor of opinion pieces in major n...</p>
                        </div>
                        <div className="team-one__share-and-social">
                            <div className="team-one__social">
                                <Link href="volunteer-details"><span className="icon-facebook"></span></Link>
                                <Link href="volunteer-details"><span className="icon-instagram"></span></Link>
                                <Link href="volunteer-details"><span className="icon-twitter"></span></Link>
                                <Link href="volunteer-details"><span className="icon-link-in"></span></Link>
                            </div>
                            <div className="team-one__share">
                                <Link href="volunteer-details"><span className="icon-share"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Volunteer Page Single End*/}
            </SwiperSlide>
            <SwiperSlide>
            {/*Volunteer Page Single Start*/}
            <div className="item">
                <div className="team-one__single">
                    <div className="team-one__img-box">
                        <div className="team-one__img">
                            <img src="assets/images/about/sajana.png" alt=""/>
                        </div>
                    </div>
                    <div className="team-one__content">
                        <div className="team-one__name-box">
                            <h4 className="team-one__name"><Link href="volunteer-details">Ms.Sajana Maharjan</Link>
                            </h4>
                            <p className="team-one__sub-title">is one of the founding members of NTTP-I and is currently one of the members of executive committee ...</p>
                        </div>
                        <div className="team-one__share-and-social">
                            <div className="team-one__social">
                                <Link href="volunteer-details"><span className="icon-facebook"></span></Link>
                                <Link href="volunteer-details"><span className="icon-instagram"></span></Link>
                                <Link href="volunteer-details"><span className="icon-twitter"></span></Link>
                                <Link href="volunteer-details"><span className="icon-link-in"></span></Link>
                            </div>
                            <div className="team-one__share">
                                <Link href="volunteer-details"><span className="icon-share"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Volunteer Page Single End*/}
            </SwiperSlide>
           
        </Swiper>
       
    </div>
</section>
        {/*Volunteer Carousel Page End*/}

        

        {/*Donate One Start */}
        <section className='donate-one'>
          <div className='container'>
            <div className='row'>
              <div
                className='col-xl-6 col-lg-6 wow slideInLeft'
                data-wow-delay='100ms'
                data-wow-duration='2500ms'
              >
                <div className='donate-one__single'>
                  <div
                    className='donate-one__single-bg'
                    style={{
                      backgroundImage:
                        " url(assets/images/about/flag.jpg)",
                    }}
                  ></div>
                  <h3 className='donate-one__title'>
                    <Link href='donation-details'>Neapal Transition To Peace</Link>
                  </h3>
                  <p className='donate-one__text'>
                   (NTTP-I) is a peace research institute founded upon the history of decade-long engagement in Nepal’s political transition as a credible and Track 1.5 peace process for mediation, facilitation, and dialogue among the political parties of Nepal since 2005.
                   thaw stalemates and promote peaceful engagement among the political parties even in critical times in a low key and trusted setting.
                    <br /> 
                    <br /> 
                  </p>
                  <div className='donate-one__btn-box'>
                    <Link
                      href='/'
                      className='donate-one__btn thm-btn'
                    >
                      Read more
                      <span>
                        <i className='icon-arrow-right'></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className='col-xl-6 col-lg-6 wow slideInRight'
                data-wow-delay='100ms'
                data-wow-duration='2500ms'
              >
                <div className='donate-one__single donate-one__single-2'>
                  <div
                    className='donate-one__single-bg'
                    style={{
                      backgroundImage:
                        " url(assets/images/about/history.jpg)",
                    }}
                  ></div>
                  <h3 className='donate-one__title'>
                    <Link href='become-volunteer'>
                      Our History
                    </Link>
                  </h3>
                  <p className='donate-one__text'>
                  Nepal Transition to Peace (NTTP) Initiative was implemented since August 2005 at the request of Nepali polity and with the support of USAID and the Swiss government. At the end of its first phase in 2009, the Ministry of Peace and Reconstruction and other stakeholders requested the USAID and the Swiss Government to continue to provide support to the peace building process. 
                    <br /> 
                    <br />
                  </p>
                  <div className='donate-one__btn-box'>
                    <Link
                      href='/'
                      className='donate-one__btn thm-btn'
                    >
                      Read
                      <span>
                        <i className='icon-arrow-right'></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Donate One End */}

        {/*Who We Are Start */}
        <section className='who-we-are' style={{  paddingBottom: '5rem',paddingTop: '5rem' }}>
          <div className='who-we-are__shape-3 float-bob-y'>
            <img src='assets/images/shapes/who-we-are-shape-3.png' alt='' />
          </div>
          <div className='who-we-are__shape-4 float-bob-x'>
            <img src='assets/images/shapes/who-we-are-shape-4.png' alt='' />
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-6 wow fadeInLeft' data-wow-delay='300ms'>
                <div className='who-we-are__left'>
                  <div className='section-title text-left sec-title-animation animation-style2'>
                    <div className='section-title__tagline-box'>
                      <span className='section-title__tagline'>Who We Are</span>
                    </div>
                    <h2 className='section-title__title title-animation'>
                     A Trusted Peace Dialogue Platform
                    </h2>
                  </div>
                  <p className='who-we-are__text'>
                    The Nepal Transition to Peace Institute (NTTP-I) is a trusted peace research and dialogue institute dedicated to fostering peaceful political engagement in Nepal. Since 2005, we have facilitated informal, evidence-based dialogues among political parties and diverse groups to resolve conflicts and support Nepal’s transition to peace. Through credible research and inclusive forums, we work to prevent and transform conflict at local, national, and regional levels.
                  </p>
                  <div className='who-we-are__progress-box'>
                    {/* <ul className="who-we-are__progress-list list-unstyled">
                                    <li>
                                        <div className="who-we-are__progress-single">
                                            <p>Total Fund Worth: <span>450,896,070$</span></p>
                                            <div className="who-we-are__progress">
                                                <div className="bar">
                                                    <div className="bar-inner count-bar" data-percent="75%" style={{ width: '75%' }}>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="who-we-are__progress-single">
                                            <p>Total Cases Helped: <span>200+</span></p>
                                            <div className="who-we-are__progress">
                                                <div className="bar">
                                                    <div className="bar-inner count-bar" data-percent="80%" style={{ width: '80%' }}>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul> */}
                  </div>
                  <div className='who-we-are__btn-box'>
                    <Link
                      href='/'
                      className='who-we-are__btn thm-btn'
                    >
                      Read more
                      <span>
                        <i className='icon-arrow-right'></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className='col-xl-6 wow slideInRight'
                data-wow-delay='100ms'
                data-wow-duration='2500ms'
              >
                <div className='who-we-are__right'>
                  <div className='who-we-are__img-box'>
                    <div className='who-we-are__img'>
                      <img
                        src='assets/images/slider/banner_image_3.png'
                        alt=''
                      />
                    </div>
                    <div className='who-we-are__img-2'>
                      <img
                        src='assets/images/slider/banner_img_2.png'
                        alt=''
                      />
                    </div>
                    <div className='who-we-are__shape-1 img-bounce'></div>
                    <div className='who-we-are__shape-2'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Who We Are End */}
        
        {/*Volunteer Carousel Page Start*/}
        <section className="volunteer-carousel-page" style={{ backgroundColor: '#f1f0ec', marginBottom: '8rem' ,paddingBottom:'6rem'
          ,paddingTop: '5rem'
        }}>
    <div className="container">
        {/* Header Section */}
        {/* Header Section */}
<div className="section-header" style={{textAlign: 'left', marginBottom: '3rem'}}>
    <p style={{
        fontSize: '0.9rem',
        color: '#5ba4d4',
        fontWeight: '600',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        marginBottom: '0.5rem',
        margin: '0 0 0.5rem 0'
    }}>Core Staffs </p>
    <h2 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#4a4a4a',
        lineHeight: '1.2',
        margin: '0'
    }}>Dedicated Team Behind the Vision <br /></h2>
</div>
        
        <Swiper {...swiperOptions} className="volunteer-carousel-style owl-carousel owl-theme carousel-dot-style ">
            <SwiperSlide>
            {/*Volunteer Page Single Start*/}
            <div className="item">
                <div className="team-one__single">
                    <div className="team-one__img-box">
                        <div className="team-one__img">
                            <img src="assets/images/about/stella.png" alt=""/>
                        </div>
                    </div>
                    <div className="team-one__content">
                        <div className="team-one__name-box">
                            <h4 className="team-one__name"><Link href="volunteer-details">Mr. Rajendra Bahadur Singh</Link>
                            </h4>
                            <p className="team-one__sub-title">Singh is a dedicated development and peacebuilding professional with over 16 years of experience in governance,...</p>
                        </div>
                        <div className="team-one__share-and-social">
                            <div className="team-one__social">
                                <Link href="volunteer-details"><span className="icon-facebook"></span></Link>
                                <Link href="volunteer-details"><span className="icon-instagram"></span></Link>
                                <Link href="volunteer-details"><span className="icon-twitter"></span></Link>
                                <Link href="volunteer-details"><span className="icon-link-in"></span></Link>
                            </div>
                            <div className="team-one__share">
                                <Link href="volunteer-details"><span className="icon-share"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Volunteer Page Single End*/}
            </SwiperSlide>
            <SwiperSlide>
            {/*Volunteer Page Single Start*/}
            <div className="item">
                <div className="team-one__single">
                    <div className="team-one__img-box">
                        <div className="team-one__img">
                            <img src="assets/images/about/sagar.png" alt=""/>
                        </div>
                    </div>
                    <div className="team-one__content">
                        <div className="team-one__name-box">
                            <h4 className="team-one__name"><Link href="volunteer-details">Mr. Baidyanath Mishra </Link>
                            </h4>
                            <p className="team-one__sub-title">is an experienced Admin and Finance Officer at NTTP-I, with over 10 years of expertise in accountancy ...</p>
                        </div>
                        <div className="team-one__share-and-social">
                            <div className="team-one__social">
                                <Link href="volunteer-details"><span className="icon-facebook"></span></Link>
                                <Link href="volunteer-details"><span className="icon-instagram"></span></Link>
                                <Link href="volunteer-details"><span className="icon-twitter"></span></Link>
                                <Link href="volunteer-details"><span className="icon-link-in"></span></Link>
                            </div>
                            <div className="team-one__share">
                                <Link href="volunteer-details"><span className="icon-share"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Volunteer Page Single End*/}
            </SwiperSlide>
            <SwiperSlide>
            {/*Volunteer Page Single Start*/}
            <div className="item">
                <div className="team-one__single">
                    <div className="team-one__img-box">
                        <div className="team-one__img">
                            <img src="assets/images/about/malik.png" alt=""/>
                        </div>
                    </div>
                    <div className="team-one__content">
                        <div className="team-one__name-box">
                            <h4 className="team-one__name"><Link href="volunteer-details">Ms. Apsara Dhakal </Link>
                            </h4>
                            <p className="team-one__sub-title">is a proactive and energetic Operations Assistant at NTTP-I, known for her efficiency in managing organizational data ...
</p>
                        </div>
                        <div className="team-one__share-and-social">
                            <div className="team-one__social">
                                <Link href="volunteer-details"><span className="icon-facebook"></span></Link>
                                <Link href="volunteer-details"><span className="icon-instagram"></span></Link>
                                <Link href="volunteer-details"><span className="icon-twitter"></span></Link>
                                <Link href="volunteer-details"><span className="icon-link-in"></span></Link>
                            </div>
                            <div className="team-one__share">
                                <Link href="volunteer-details"><span className="icon-share"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Volunteer Page Single End*/}
            </SwiperSlide>
            <SwiperSlide>
            {/*Volunteer Page Single Start*/}
            <div className="item">
                <div className="team-one__single">
                    <div className="team-one__img-box">
                        <div className="team-one__img">
                            <img src="assets/images/about/youba.png" alt=""/>
                        </div>
                    </div>
                    <div className="team-one__content">
                        <div className="team-one__name-box">
                            <h4 className="team-one__name"><Link href="volunteer-details">Ms. Sarita Giri</Link>
                            </h4>
                            <p className="team-one__sub-title">Giri is an Office Assistant at NTTP-I. She manages office equipment, sets up meeting venues, and maintains the vehicle ...</p>
                        </div>
                        <div className="team-one__share-and-social">
                            <div className="team-one__social">
                                <Link href="volunteer-details"><span className="icon-facebook"></span></Link>
                                <Link href="volunteer-details"><span className="icon-instagram"></span></Link>
                                <Link href="volunteer-details"><span className="icon-twitter"></span></Link>
                                <Link href="volunteer-details"><span className="icon-link-in"></span></Link>
                            </div>
                            <div className="team-one__share">
                                <Link href="volunteer-details"><span className="icon-share"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Volunteer Page Single End*/}
            </SwiperSlide>
            <SwiperSlide>
            {/*Volunteer Page Single Start*/}
            <div className="item">
                <div className="team-one__single">
                    <div className="team-one__img-box">
                        <div className="team-one__img">
                            <img src="assets/images/about/daman.png" alt=""/>
                        </div>
                    </div>
                    <div className="team-one__content">
                        <div className="team-one__name-box">
                            <h4 className="team-one__name"><Link href="volunteer-details">Mr.Driver</Link>
                            </h4>
                            <p className="team-one__sub-title">driver at NTTP-I. with more than 15 years of experience  in driving four wheelers. He associated with NTTP-I since 2025.</p>
                        </div>
                        <div className="team-one__share-and-social">
                            <div className="team-one__social">
                                <Link href="volunteer-details"><span className="icon-facebook"></span></Link>
                                <Link href="volunteer-details"><span className="icon-instagram"></span></Link>
                                <Link href="volunteer-details"><span className="icon-twitter"></span></Link>
                                <Link href="volunteer-details"><span className="icon-link-in"></span></Link>
                            </div>
                            <div className="team-one__share">
                                <Link href="volunteer-details"><span className="icon-share"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </SwiperSlide>
           
        </Swiper>
       
    </div>
</section>
        {/*Volunteer Carousel Page End*/}
        
      </Layout>
    </>
  );
}