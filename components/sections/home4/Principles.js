"use client";
import Link from "next/link";
import { useState } from "react";

export default function Principles() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [showAllPrinciples, setShowAllPrinciples] = useState(false);
  
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      {/*Donation One Start */}
      <section className='donation-one'>
        <div className='donation-one__wrapper'>
          <div className='donation-one__right'>
            <div className='donation-one__content-box'>
              <div className='section-title-two text-left sec-title-animation animation-style2'>
                <div className='section-title-two__tagline-box'>
                  <span className='section-title-two__tagline'>
                    Our Core Principles
                  </span>
                </div>
                <h2 className='section-title-two__title title-animation'>
                  Guiding Values for <br /> Sustainable Peace
                </h2>
              </div>
              <div className='donation-one__donate-box'>
                <div
                  style={{
                    paddingLeft: "32px",
                    marginBottom: "32px",
                  }}
                  className='home-page__list'
                >
                  <div style={{ lineHeight: "1.6", color: "#ffffff" }}>
                    <div style={{ marginBottom: "1.5rem" }}>
                      <h4 style={{ color: "#5ba4d4", fontWeight: "600", marginBottom: "0.5rem" }}>
                        Diversity, inclusion and equity:
                      </h4>
                      <p style={{ fontSize: "0.95rem", marginBottom: "0" }}>
                        We believe in inclusive and equitable peace process outcomes. We work to contribute to non-violence, democracy, respect for human rights, and life with dignity.
                      </p>
                    </div>
                    
                    <div style={{ marginBottom: "1.5rem" }}>
                      <h4 style={{ color: "#5ba4d4", fontWeight: "600", marginBottom: "0.5rem" }}>
                        Impartiality and democratic values:
                      </h4>
                      <p style={{ fontSize: "0.95rem", marginBottom: "0" }}>
                        We ensure that our approaches to conflict resolution and transformation are impartial, democratic and unbiased.
                      </p>
                    </div>
                    
                    {showAllPrinciples && (
                      <>
                        <div style={{ marginBottom: "1.5rem" }}>
                          <h4 style={{ color: "#5ba4d4", fontWeight: "600", marginBottom: "0.5rem" }}>
                            Passion, professionalism and partnership:
                          </h4>
                          <p style={{ fontSize: "0.95rem", marginBottom: "0" }}>
                            We are committed to our mission with passion, professionalism, and accountability. We build trusted and respectful relationships with our stakeholders. We collaborate and partner with like-minded organizations to build synergy.
                          </p>
                        </div>
                        
                        <div style={{ marginBottom: "1.5rem" }}>
                          <h4 style={{ color: "#5ba4d4", fontWeight: "600", marginBottom: "0.5rem" }}>
                            Integrity and ethics:
                          </h4>
                          <p style={{ fontSize: "0.95rem", marginBottom: "0" }}>
                            We promote a culture of integrity and ethics in our work environment and remain transparent in our words and actions but maintain confidentiality on sensitive issues.
                          </p>
                        </div>
                        
                        <div style={{ marginBottom: "1.5rem" }}>
                          <h4 style={{ color: "#5ba4d4", fontWeight: "600", marginBottom: "0.5rem" }}>
                            Advocacy:
                          </h4>
                          <p style={{ fontSize: "0.95rem", marginBottom: "0" }}>
                            We advocate inclusive democratic values and implementation of peace agreements with evidence-based sincerity.
                          </p>
                        </div>
                      </>
                    )}
                    
                    <div style={{ marginTop: "1rem" }}>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowAllPrinciples(!showAllPrinciples);
                        }}
                        style={{
                          color: '#5ba4d4',
                          textDecoration: 'none',
                          fontSize: '0.9rem',
                          fontWeight: '500',
                          cursor: 'pointer',
                        }}
                      >
                        {showAllPrinciples ? 'Show Less' : 'Learn More'}
                      </a>
                    </div>
                  </div>
                </div>
                {/* <div className='donate-now wow fadeInUp' data-wow-delay='.7s'>
                  <div className='donation-one__btn-box'>
                    <Link href='about' className='donation-one__btn thm-btn'>
                      Learn more
                      <span>
                        <i className='icon-arrow-right'></i>
                      </span>
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className='donation-one__left'>
            <div
              className='donation-one__left-bg'
              style={{
                backgroundImage:
                  " url(assets/images/project/gallery/3.jpg)",
              }}
            ></div>
          </div>
        </div>
      </section>
      {/*Donation One End */}
    </>
  );
}