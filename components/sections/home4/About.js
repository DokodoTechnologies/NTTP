"use client";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import CounterUp from "@/components/elements/CounterUp";

export default function About() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/*About Four Start */}
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
                    NTTP-I has facilitated peace dialogues and promoted conflict transformation
                    in Nepal since 2005.
                  </p>
                </div>
                <div className='about-four-img'>
                  <img
                    src='assets/images/resources/about-four-img-1.jpg'
                    alt='Image'
                  />

                  <div className='about-four-video'>
                    <a
                      className='video-popup'
                      title='Video Gallery'
                      onClick={() => setOpen(true)}
                    >
                      <span className='icon-play'></span>
                    </a>
                  </div>
                </div>
                <div className='btn-box'>
                  <Link href='index4' className='thm-btn'>
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
                <div className='text1'>
                  <p>
                    Nepal Transition to Peace Institute (NTTP-I) has been a key player in Nepal’s 
                    peace process since 2005, offering a trusted platform for informal dialogues 
                    among political parties. It helps resolve conflicts and supports peaceful 
                    political transitions.
                  </p>
                </div>
                <div className='text2'>
                  <p>
                    Together, we can create lasting change and bring hope to
                    those who need it most. If you have any questions or would
                    like to discuss our mission further, please do not hesitate
                    to reach out.
                  </p>
                  <p>
                    Please let me know the best way to proceed with my donation,
                    and if there are any specific projects that could benefit
                    from additional support. I would also appreciate any updates
                    on your current programs, as it would be wonderful to see
                    firsthand the impact of our collective efforts.
                  </p>
                </div>

                <div className='about-four__right-counter'>
                  <div className='row'>
                    {/*About Two Counter Single Start*/}
                    <div className='col-xl-4 col-lg-4'>
                      <div className='about-four__right-counter-single text-center'>
                        <div className='icon-box'>
                          <span className='icon-help'></span>
                        </div>
                        <div className='count-box count-box'>
                          <h2>
                            <CounterUp end={25} />
                          </h2>
                          <span>+</span>
                        </div>
                        <div className='title-box'>
                          <h3>Years of Experience</h3>
                        </div>
                      </div>
                    </div>
                    {/*About Two Counter Single End*/}
                    {/*About Two Counter Single Start*/}
                    <div className='col-xl-4 col-lg-4'>
                      <div className='about-four__right-counter-single text-center'>
                        <div className='icon-box'>
                          <span className='icon-dolor'></span>
                        </div>
                        <div className='count-box count-box'>
                          <h2>
                            <CounterUp end={3} />
                          </h2>
                          <span>+</span>
                        </div>
                        <div className='title-box'>
                          <h3>Partners</h3>
                        </div>
                      </div>
                    </div>
                    {/*About Two Counter Single End*/}
                    {/*About Two Counter Single Start*/}
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
                    {/*About Two Counter Single End*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About Four End */}
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='F0GYEj_jhWY'
        onClose={() => setOpen(false)}
      />
    </>
  );
}
