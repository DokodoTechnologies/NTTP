'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const lateMembers = [
  {
    id: 'daman',
    name: 'Late Mr. Daman Nath Dhungana',
    shortDescription:
      'was a senior NTTP facilitator, Executive Committee Member and former Chairperson at NTTP-I.',
    image: 'assets/images/about/daman.jpg',
    fullDescription: `Late Daman Nath Dhungana was a senior NTTP facilitator, Executive Committee Member and former Chairperson at NTTP-I. He served as the Speaker of the House after restoration of parliamentary democracy in 1990 and was asked to facilitate official peace talks between the government and the Maoists in 2001 and 2003. He is a senior advocate and a human rights defender who has continuously engaged with Nepal's peace process as an insider for the last 18 years. He is renowned for advocacy of democratic process and constitutionalism.`
  },
  {
    id: 'padma',
    name: 'Late Padma Ratna Tuladhar',
    shortDescription:
      'was a senior NTTP facilitator, Executive Committee Member and former Chairperson at NTTP-I.',
    image: 'assets/images/about/padma.png',
    fullDescription: `Late Padma Ratna Tuladhar (1940–2018) was a senior NTTP facilitator, Executive Committee Member and former Chairperson at NTTP-I. He was a distinguished Nepali politician, human rights defender, and advocate for indigenous rights. Elected to the Rastriya Panchayat in 1986, he boldly championed democracy from within the autocratic system. Following the 1990 democratic movement, he served as Minister for Labour and Health in the 1994 CPN-UML-led government. Tuladhar played a pivotal role in Nepal's peace process, facilitating dialogue between the government and Maoist rebels during the civil war. His unwavering commitment to justice and inclusion made him a revered figure in Nepal's democratic evolution.`
  }
];

export default function ContactSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setIsOpen(true);
  };

  return (
    <>
      {/* In Memory Carousel Section */}
      <section
        className="volunteer-carousel-page"
        style={{
          backgroundColor: '#ffffff',
          paddingBottom: '6rem',
          paddingTop: '5rem',
          marginBottom: '0'
        }}
      >
        <div className="container">
          <div
            className="section-header"
            style={{ textAlign: 'left', marginBottom: '3rem' }}
          >
            <p
              style={{
                fontSize: '0.9rem',
                color: '#5ba4d4',
                fontWeight: '600',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '0.5rem'
              }}
            >
              In Memory
            </p>
            <h2
              style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#4a4a4a',
                lineHeight: '1.2',
                margin: '0'
              }}
            >
              Remembering Our Visionary Leaders
            </h2>
          </div>

          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 }
            }}
          >
            {lateMembers.map((member) => (
              <SwiperSlide key={member.id}>
                <div className="item">
                  <div className="team-one__single" style={{ backgroundColor: '#ffffff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
                    <div className="team-one__img-box">
                      <div className="team-one__img">
                        <img src={member.image} alt={member.name} />
                      </div>
                    </div>
                    <div className="team-one__content" style={{ backgroundColor: '#ffffff', padding: '1.5rem' }}>
                      <div className="team-one__name-box">
                        <h4 className="team-one__name">
                          <button
                            onClick={() => handleMemberClick(member)}
                            style={{ 
                              cursor: 'pointer', 
                              color: '#4a4a4a',
                              background: 'none',
                              border: 'none',
                              fontSize: 'inherit',
                              fontWeight: 'inherit',
                              textAlign: 'left',
                              padding: '0',
                              textDecoration: 'underline'
                            }}
                          >
                            {member.name}
                          </button>
                        </h4>
                        <p className="team-one__sub-title" style={{ color: '#666666' }}>
                          {member.shortDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Modal - Alternative Method using state and conditional rendering */}
        {isOpen && selectedMember && (
          <div 
            className="modal-overlay"
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'fadeIn 0.3s ease-in-out'
            }}
          >
            <div 
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '12px',
                maxWidth: '600px',
                width: '90%',
                maxHeight: '80vh',
                overflowY: 'auto',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                position: 'relative',
                animation: 'slideIn 0.3s ease-out'
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: '#f1f1f1',
                  border: 'none',
                  borderRadius: '50%',
                  width: '35px',
                  height: '35px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  color: '#666',
                  transition: 'all 0.2s ease'
                }}
                className="close-btn"
              >
                ×
              </button>
              
              {/* Modal content */}
              <div style={{ marginTop: '1rem' }}>
                <h2 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  marginBottom: '1rem',
                  color: '#333',
                  paddingRight: '40px'
                }}>
                  {selectedMember.name}
                </h2>
                <p style={{ 
                  fontSize: '1rem', 
                  color: '#555',
                  lineHeight: '1.6',
                  whiteSpace: 'pre-line'
                }}>
                  {selectedMember.fullDescription}
                </p>
                <div style={{ marginTop: '2rem', textAlign: 'right' }}>
                  <button
                    onClick={() => setIsOpen(false)}
                    style={{
                      backgroundColor: '#5ba4d4',
                      color: 'white',
                      border: 'none',
                      padding: '10px 20px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: '500',
                      transition: 'background-color 0.2s ease'
                    }}
                    className="close-modal-btn"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Contact Form Section */}
       {/* Contact Form Section */}
      <section className="contact-four">
        <div
          className="contact-four__bg"
          style={{ backgroundImage: 'url(assets/images/shapes/pattern-1.jpg)' }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="section-title text-center sec-title-animation animation-style1">
              <h2 className="section-title__title title-animation">
                Drop a Line, Stay in Touch
              </h2>
            </div>
          </div>

          <div className="contact-info-one">
            <div className="row">
              <div className="info-column col-lg-4">
                <div className="inner-box">
                  <div className="icon">
                    <span className="icon-pin-two"></span>
                  </div>
                  <h4>Address</h4>
                  <p>Ram Mandir Marga, Battishputali</p>
                  <p>Kathmandu Metropolitan City, Ward No. 09</p>
                </div>
              </div>

              <div className="info-column col-lg-4">
                <div className="inner-box">
                  <div className="icon">
                    <span className="icon-call"></span>
                  </div>
                  <h4>Phone</h4>
                  <p>
                    <Link href="tel:01-4595683">01-4595683</Link>
                    <br />
                    <Link href="tel:01-4598908">01-4598908</Link>
                  </p>
                </div>
              </div>

              <div className="info-column col-lg-4">
                <div className="inner-box">
                  <div className="icon">
                    <span className="icon-envelope"></span>
                  </div>
                  <h4>Email</h4>
                  <p>
                    <Link href="mailto:contact@nttpinstitute.org.np">
                      contact@nttpinstitute.org.np
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className="contact-info-one__form">
                  <form
                    id="contact-info-one-form"
                    name="contact-info-one_form"
                    className="default-form2"
                    action="#"
                    method="post"
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="form-group">
                          <div className="input-box">
                            <input
                              type="text"
                              name="form_name"
                              placeholder="Name...."
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-box">
                            <input
                              type="email"
                              name="form_email"
                              placeholder="Email...."
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-box">
                            <input
                              type="text"
                              name="form_phone"
                              placeholder="Phone...."
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="form-group">
                          <div className="input-box">
                            <textarea
                              name="form_message"
                              placeholder="Write here..."
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="form-group form-group--1 text-center">
                        <button type="submit" className="thm-btn">
                          Send Message
                          <span>
                            <i className="icon-arrow-right"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* Custom CSS for placeholder colors and hover effects */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .close-btn:hover {
          background-color: #e0e0e0 !important;
          transform: scale(1.1);
        }
        
        .close-modal-btn:hover {
          background-color: #4a90c2 !important;
        }
        
        input::placeholder,
        textarea::placeholder {
          color: #bdc3c7 !important;
          opacity: 1;
        }
        
        input:focus,
        textarea:focus {
          outline: none;
          border-color: #f39c12 !important;
          box-shadow: 0 0 0 2px rgba(243, 156, 18, 0.2);
        }
        
        .thm-btn:hover {
          background-color: #e67e22 !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        
        .info-column .inner-box:hover {
          transform: translateY(-5px);
          transition: all 0.3s ease;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        
        .team-one__single:hover {
          transform: translateY(-5px);
          transition: all 0.3s ease;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15) !important;
        }
        
        .team-one__name button:hover {
          color: #5ba4d4 !important;
          transition: color 0.3s ease;
        }
      `}</style>
    </>
  );
}