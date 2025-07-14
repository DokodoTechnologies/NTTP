"use client";
import Link from "next/link";
import { useState } from "react";
import CounterUp from "@/components/elements/CounterUp";

export default function About() {
  const currentYear = new Date().getFullYear();
  const yearsOfPeace = currentYear - 2005;

  return (
    <>
      <style jsx>{`
        .about-four {
          padding-top: 80px !important;
          margin-top: 0 !important;
        }

        .about-four__left .text {
          margin-top: 40px;
        }

        .about-four__left .text p {
          font-size: 18px;
          line-height: 1.7;
          color: #333;
        }

        .text2 p {
          font-size: 18px;
          line-height: 1.7;
          color: #333;
        }
      `}</style>

      <section className='about-four'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-4'>
              <div className='about-four__left'>
                <div className='section-title text-left sec-title-animation animation-style2'>
                  <div className='section-title__tagline-box'>
                    <span className='section-title__tagline'>About Us</span>
                  </div>
                  <h2 className='section-title__title title-animation'>
                    Nepal Transition <br />
                    to Peace
                  </h2>
                </div>

                <div className='text'>
                  <p>
                    We have been dedicated to making a positive impact in our
                    community.
                  </p>
                </div>

                <div className='about-four-img'>
                  <img
                    src='assets/images/resources/cna.jpg'
                    alt='Image'
                  />
                  <div className='about-four-video'>
                    <a
                      className='video-popup'
                      title='Watch Video'
                      onClick={() =>
                        window.open(
                          "https://www.channelnewsasia.com/watch/peacemakers/solving-nepals-deadly-conflict-4620256",
                          "_blank"
                        )
                      }
                    >
                      <span className='icon-play'></span>
                    </a>
                  </div>
                </div>

                <div className='btn-box'>
                  <Link href='about' className='thm-btn'>
                    About More
                    <span>
                      <i className='icon-arrow-right'></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className='col-xl-8'>
              <div className='about-four__right'>
                <div className='text1'></div>

                <div className='text2'>
                  <p>
                    Nepal Transition to Peace Institute (NTTP-I) is a peace
                    institute with trusted space for dialogue among
                    multi-stakeholders for conflict resolution and specializes
                    in research work to generate evidence-based and informed
                    choices for peacebuilders in Nepal.
                  </p>
                </div>

                <div className='about-four__right-counter'>
                  <div className='row'>
                    <div className='col-xl-4 col-lg-4'>
                      <div className='about-four__right-counter-single text-center'>
                        <div className='icon-box'>
                          <span className='icon-help'></span>
                        </div>
                        <div className='count-box count-box'>
                          <h2>
                            <CounterUp end={yearsOfPeace} />
                          </h2>
                          <span>+</span>
                        </div>
                        <div className='title-box'>
                          <h3>Years of Experience</h3>
                        </div>
                      </div>
                    </div>

                    <div className='col-xl-4 col-lg-4'>
                      <div className='about-four__right-counter-single text-center'>
                        <div className='icon-box'>
                          <span className='icon-dolor'></span>
                        </div>
                        <div className='count-box count-box'>
                          <h2>
                            <CounterUp end={4} />
                          </h2>
                          <span>+</span>
                        </div>
                        <div className='title-box'>
                          <h3>Partners</h3>
                        </div>
                      </div>
                    </div>

                    <div className='col-xl-4 col-lg-4'>
                      <div className='about-four__right-counter-single text-center'>
                        <div className='icon-box'>
                          <span className='icon-support'></span>
                        </div>
                        <div className='count-box count-box'>
                          <h2>
                            <CounterUp end={5} />
                          </h2>
                          <span className='plus'>+</span>
                        </div>
                        <div className='title-box'>
                          <h3>Thematic Groups</h3>
                        </div>
                      </div>
                    </div>
                    {/* End Counters */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
