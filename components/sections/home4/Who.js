"use client";
import Link from "next/link";
import { useState } from "react";

export default function Who() {
  const [showFullContent, setShowFullContent] = useState(false);

  const shortContent = "Nepal Transition to Peace (NTTP) began in 2005 as a confidential dialogue forum between CPN UML (Maoist) and political forces in response to Nepal's internal demand for peace, with support from national and international originations. After the initial project concluded in 2009, the Government of Nepal, Ministry of Peace and Reconstruction and other stakeholders requested to continue national and international support for concluding the peace process.";

  const fullContent = `Nepal Transition to Peace (NTTP) began in 2005 as a confidential dialogue forum between CPN UML (Maoist) and political forces in response to Nepal's internal demand for peace, with support from national and international originations. After the initial project concluded in 2009, the Government of Nepal, Ministry of Peace and Reconstruction and other stakeholders requested to continue national and international support for concluding the peace process. The Asia Foundation took over implementation from the Academy for Educational Development, running the Nepal Peace Support Project until early 2015. That same year, NTTP-Institute was formally established as an independent entity, registered with the Ministry of Home and the Social Welfare Council. It successfully implemented major peacebuilding projects supported by both the USAID and the Swiss government, earning recognition as a key institution for political dialogue and conflict resolution. This recognition was largely due to the credibility and experience of its founding facilitators, Late Mr. Daman Nath Dhungana and Late Mr. Padma Ratna Tuladhar, who had played crucial roles during Nepal's early peace negotiations.

NTTP-Institute envisions a peaceful society that addresses the root causes of conflict through dialogue at multiple levels and promotes inclusive democracy, social justice, and good governance. Its mission is to be a trusted and credible institution for conflict prevention and transformation through inclusive dialogue and the provision of high-quality resources. The institute honors the legacy of its founding facilitators and integrates their values into its principles, which emphasize inclusive and equitable peace processes, impartiality in conflict transformation, and strong ethical conduct. NTTP-I is committed to professionalism, collaboration with like-minded organizations, and advocacy for inclusive democratic values. It applies evidence-based approaches and continually seeks innovative ways to sustain lasting peace in Nepal.`;

  return (
    <>
      <style jsx>{`
        .section-title__tagline {
          font-family: "Times New Roman", Times, serif;
          font-size: 20px; /* slightly bigger text */
          line-height: 1.6;
          color: #333;
        }
      `}</style>
      {/*Who We Are Start */}
      <section className='who-we-are'>
        <div className='who-we-are__shape-3 float-bob-y'>
          <img src='assets/images/shapes/who-we-are-shap.png' alt='' />
        </div>
        <div className='who-we-are__shape-4 float-bob-x'>
          <img src='assets/images/shapes/who-we-are--2.jpg' alt='' />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-6 wow fadeInLeft' data-wow-delay='300ms'>
              <div className='who-we-are__left'>
                <div className='section-title text-left sec-title-animation animation-style2'>
                  <div className='section-title__tagline-box'>
                    <span className='section-title__tagline'>Who We Are?</span>
                  </div>
                </div>
                
                <div
                  style={{
                    paddingLeft: "32px",
                    marginBottom: "32px",
                  }}
                >
                  <div
                    style={{
                      lineHeight: "1.6",
                      color: "#4a4a4a",
                      fontSize: "1rem",
                    }}
                    className='home-page__content'
                  >
                    <p style={{ marginBottom: "1rem" }}>
                      {shortContent}
                    </p>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowFullContent(true);
                      }}
                      style={{
                        color: '#5ba4d4',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        cursor: 'pointer',
                      }}
                    >
                      Show More
                    </a>
                  </div>
                </div>
                
                {/* <div className='who-we-are__btn-box'>
                  <Link
                    href='/testimonials'
                    className='who-we-are__btn thm-btn'
                  >
                    See More11
                    <span>
                      <i className='icon-arrow-right'></i>
                    </span>
                  </Link>
                </div> */}
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
                    <img src='assets/images/nttp/2.jpg' alt='' />
                  </div>
                  <div className='who-we-are__img-2'>
                    <img
                      src='assets/images/shapes/1.jpg'
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

      {/* Full Content Modal */}
      {showFullContent && (
        <div 
          className="content-modal-overlay" 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={() => setShowFullContent(false)}
        >
          <div 
            className="content-modal"
            style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '12px',
              maxWidth: '800px',
              width: '90%',
              maxHeight: '80vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowFullContent(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#666',
                padding: '0.5rem',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ×
            </button>

            {/* Modal Header */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ 
                margin: '0', 
                color: '#4a4a4a', 
                fontSize: '1.8rem',
                borderBottom: '2px solid #5ba4d4',
                paddingBottom: '0.5rem',
              }}>
                Who We Are
              </h3>
            </div>

            {/* Modal Content */}
            <div style={{
              lineHeight: '1.6',
              color: '#4a4a4a',
              fontSize: '1rem',
            }}>
              {fullContent.split('\n\n').map((paragraph, index) => (
                <p key={index} style={{ marginBottom: '1rem' }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/*Who We Are End */}
    </>
  );
} 