// "use client";
// import { useState } from "react";
// import Link from "next/link";

// export default function Slogan_two() {
//   const [showFullMessage, setShowFullMessage] = useState(false);

//   const handleToggleMessage = () => {
//     setShowFullMessage(!showFullMessage);
//   };

//   return (
//     <section
//       className='slogan-one relative'
//       style={{
//         backgroundColor: "#f8f9fa",
//         padding: "60px 20px",
//         position: "relative",
//         zIndex: 1,
//         color: "#1a1a1a",
//         fontFamily: "'Times New Roman', Times, serif",
//       }}
//     >
//       <div className='container relative max-w-6xl mx-auto'>
//         <div className='slogan-one__content'>
//           {/* Title */}
//           <div className='title-box mb-8'>
//             <h2 className='text-3xl md:text-4xl font-bold text-green-600 mb-6'>
//               Message from the Chairperson
//             </h2>
//           </div>

//           {/* Content Layout */}
//           <div className='flex flex-col md:flex-row gap-8 items-start'>
//             {/* Image Container */}
//             <div className='flex-shrink-0'>
//               <div className='w-48 h-64 border border-gray-300 rounded overflow-hidden shadow-md bg-gray-100'>
//                 <img
//                   src='/assets/images/about/malik.jpg'
//                   alt='Chairperson Vidyadhar Mallik'
//                   className='w-full h-full object-cover'
//                 />
//               </div>
//             </div>

//             {/* Text Content */}
//             <div className='flex-1 text-box leading-relaxed text-base text-left' style={{ color: "#333" }}>
//               {showFullMessage ? (
//                 <div style={{ color: "#333" }}>
//                   <p className="mb-4">
//                     <strong className="text-lg">Vidyadhar Mallik, Chairperson, NTTP-I</strong>
//                   </p>
                  
//                   <p className="mb-4">
//                     <strong>Namaskar!</strong><br />
//                     It gives me great pleasure to welcome you to the website of the Nepal Transition to Peace Institute (NTTP-I).
//                   </p>
                  
//                   <p className="mb-4">
//                     NTTP was established in 2005 as a peace initiative by a prominent group of peace enthusiasts, at a critical time in Nepal's history when Maoists' armed struggle was at peak. Quiet dialogues through back-channels were only options available for negotiations among the Maoists and mainstream political parties, who themselves were struggling on urban streets for political freedom and democratic constitutional rule against autocratic rule.
//                   </p>
                  
//                   <p className="mb-4">
//                     Dialogues and negotiated settlements were very much required to bring peace, stability and constitutional rule in the country. The NTTP initiative, which transformed itself later into an organized Institute (NTTP-I) played a unique and trusted role in initiating and supporting inclusive and informed dialogues at various levels and in varied shapes and formulations for political-consensus-building and peaceful democratic transition.
//                   </p>
                  
//                   <p className="mb-4">
//                     The Institute works closely today with political parties, civil society, government institutions and conflict-affected communities to create and widen trusted space for quiet deliberations among them and strengthen informed dialogue in Nepali society to bring lasting peace with deeper roots in principles of respect for human rights and inclusive democratic rule.
//                   </p>
                  
//                   <p className="mb-4">
//                     Our work hovers around the belief that sustainable peace can be achieved only through meaningful participation, mutual respect and inclusive deliberations among the conflicting stakeholders. As an institution, we remain committed to creating safe space for dialogue, nurturing future political leaders, supporting transitional justice, and contributing to national reconciliation.
//                   </p>
                  
//                   <p className="mb-4">
//                     We largely work at national level but listen empathetically the voices from the ground to stay alert to emerging scenarios and achieve objectively the futuristic results of peacebuilding.
//                   </p>
                  
//                   <p className="mb-4">
//                     As we launch this new website, we hope to make our efforts more accessible, transparent, and interactive. Here, you will find updates on our programs, research, publications, and events that shape Nepal's transition to sustained peace and constitutional reforms landscape.
//                   </p>
                  
//                   <p className="mb-4">
//                     I invite you to engage with us, take active interest in our work, and join us in our shared mission of transforming Nepal into an inclusive, righteous, peaceful, fair and democratic nation.
//                   </p>
                  
//                   <p className="mb-4">
//                     With warm regards,<br />
//                     <strong>Vidyadhar Mallik<br />(Chairperson)</strong>
//                   </p>
//                 </div>
//               ) : (
//                 <div style={{ color: "#333" }}>
//                   <p className="mb-4">
//                     NTTP-I is a registered non-profit and non-governmental organization, the Nepal Transition to Peace Institute (NTTP-I). Established in the year 2005, NTTP-I has the mission of ensuring sustainable peace and democratic transition in Nepal by maximizing inclusive dialogue and meaningful participation among conflicting stakeholders.
//                   </p>
                  
//                   <p className="mb-4">
//                     Our journey for peace building was challenging due to the complex political transition. But we tried our possible way to create a space for working on it. Due to the political instability, the whole peace building sector was in a difficult state including other sectors too. But we try to work in those challenging days due to support from our national and international partners.
//                   </p>
                  
//                   <p className="mb-4">
//                     I would like to express my sincere gratitude to all our national and international partners for their immense support in this field. Also thanks to all the well-wishers and supporters for the continuous support and feedback. We would really appreciate the comments and suggestions from partners and others at any time. That would be very good for our organization.
//                   </p>
                  
//                   <p className="mb-4">
//                     NTTP-I has weathered many challenges, now I look forward to contributing to the longevity of sustainable peace in Nepal.
//                   </p>
                  
//                   <p className="mb-4">
//                     <strong>Vidyadhar Mallik,</strong><br />
//                     <strong>Chairperson, NTTP-I</strong>
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Button */}
//           <div className='btn-box mt-8'>
//             <button
//               onClick={handleToggleMessage}
//               className='bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium'
//               style={{ fontFamily: "'Times New Roman', Times, serif" }}
//             >
//               {showFullMessage ? (
//                 <>
//                   Show Less
//                   <span className='ml-2'>
//                     <i className='icon-arrow-up'></i>
//                   </span>
//                 </>
//               ) : (
//                 <>
//                   Read More
//                   <span className='ml-2'>
//                     <i className='icon-arrow-down'></i>
//                   </span>
//                 </>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useState } from "react";
import Link from "next/link";

export default function ChairmanMessage() {
  const [showFullContent, setShowFullContent] = useState(false);

  const shortContent = `NTTP-I is a registered non-profit and non-governmental organization, the Nepal Transition to Peace Institute (NTTP-I). Established in the year 2005, NTTP-I has the mission of ensuring sustainable peace and democratic transition in Nepal by maximizing inclusive dialogue and meaningful participation among conflicting stakeholders.

Our journey for peace building was challenging due to the complex political transition. But we tried our possible way to create a space for working on it.`;

  const fullContent = `NTTP was established in 2005 as a peace initiative by a prominent group of peace enthusiasts, at a critical time in Nepal's history when Maoists' armed struggle was at peak. Quiet dialogues through back-channels were only options available for negotiations among the Maoists and mainstream political parties, who themselves were struggling on urban streets for political freedom and democratic constitutional rule against autocratic rule.

Dialogues and negotiated settlements were very much required to bring peace, stability and constitutional rule in the country. The NTTP initiative, which transformed itself later into an organized Institute (NTTP-I) played a unique and trusted role in initiating and supporting inclusive and informed dialogues at various levels and in varied shapes and formulations for political-consensus-building and peaceful democratic transition.

The Institute works closely today with political parties, civil society, government institutions and conflict-affected communities to create and widen trusted space for quiet deliberations among them and strengthen informed dialogue in Nepali society to bring lasting peace with deeper roots in principles of respect for human rights and inclusive democratic rule.

Our work hovers around the belief that sustainable peace can be achieved only through meaningful participation, mutual respect and inclusive deliberations among the conflicting stakeholders. As an institution, we remain committed to creating safe space for dialogue, nurturing future political leaders, supporting transitional justice, and contributing to national reconciliation.

We largely work at national level but listen empathetically the voices from the ground to stay alert to emerging scenarios and achieve objectively the futuristic results of peacebuilding.

As we launch this new website, we hope to make our efforts more accessible, transparent, and interactive. Here, you will find updates on our programs, research, publications, and events that shape Nepal's transition to sustained peace and constitutional reforms landscape.

I invite you to engage with us, take active interest in our work, and join us in our shared mission of transforming Nepal into an inclusive, righteous, peaceful, fair and democratic nation.

With warm regards,
Vidyadhar Mallik
(Chairperson)`;

  return (
    <>
      <style jsx>{`
        .section-title__tagline {
          font-family: "Times New Roman", Times, serif;
          font-size: 32px;
          font-weight: 700;
          line-height: 1.4;
          color: #177cbe;
          margin-bottom: 20px;
        }
        .chairman-image {
          width: 120px;
          height: 150px;
          border-radius: 8px;
          object-fit: cover;
          border: 3px solid #177cbe;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
      `}</style>
      
      {/*Message from Chairman Start */}
      <section className='who-we-are'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='who-we-are__content'>
                <div className='section-title text-center sec-title-animation animation-style2'>
                  <div className='section-title__tagline-box'>
                    <span className='section-title__tagline'>Message from Chairman</span>
                  </div>
                </div>
                
                <div
                  style={{
                    width: "100%",
                    padding: "0 40px",
                    marginTop: "32px",
                  }}
                >
                  {/* Chairman Info and Image */}
                  <div style={{ 
                    display: "flex", 
                    alignItems: "flex-start", 
                    gap: "30px", 
                    marginBottom: "30px",
                    flexWrap: "wrap"
                  }}>
                    <img
                      src='/assets/images/about/malik.jpg'
                      alt='Chairperson Vidyadhar Mallik'
                      className='chairman-image'
                    />
                    <div style={{ flex: 1, minWidth: "300px" }}>
                      <h3 style={{ 
                        color: "#177cbe", 
                        fontSize: "1.4rem", 
                        fontWeight: "600",
                        marginBottom: "8px",
                        fontFamily: "Times New Roman, Times, serif"
                      }}>
                        Vidyadhar Mallik
                      </h3>
                      <p style={{ 
                        color: "#666", 
                        fontSize: "1rem", 
                        fontStyle: "italic",
                        marginBottom: "20px"
                      }}>
                        Chairperson, NTTP-I
                      </p>
                      <p style={{ 
                        color: "#4a4a4a", 
                        fontSize: "1.1rem", 
                        fontWeight: "500",
                        fontFamily: "Times New Roman, Times, serif"
                      }}>
                        Namaskar!
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      lineHeight: "1.8",
                      color: "#4a4a4a",
                      fontSize: "1.1rem",
                      textAlign: "justify",
                    }}
                    className='home-page__content'
                  >
                    <div style={{ marginBottom: "1.5rem" }}>
                      {shortContent.split('\n\n').map((paragraph, index) => (
                        <p key={index} style={{ marginBottom: "1.5rem" }}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowFullContent(true);
                      }}
                      style={{
                        color: '#177cbe',
                        textDecoration: 'none',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        padding: '8px 20px',
                        border: '2px solid #177cbe',
                        borderRadius: '25px',
                        transition: 'all 0.3s ease',
                        display: 'inline-block',
                        backgroundColor: 'transparent',
                      }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#177cbe';
                        e.target.style.color = 'white';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = '#177cbe';
                      }}
                    >
                      Read More
                    </a>
                  </div>
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
                color: '#177cbe', 
                fontSize: '1.8rem',
                borderBottom: '2px solid #177cbe',
                paddingBottom: '0.5rem',
                fontFamily: "Times New Roman, Times, serif"
              }}>
                Message from Chairman
              </h3>
            </div>

            {/* Chairman Info in Modal */}
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "20px", 
              marginBottom: "20px",
              paddingBottom: "20px",
              borderBottom: "1px solid #eee"
            }}>
              <img
                src='/assets/images/about/malik.jpg'
                alt='Chairperson Vidyadhar Mallik'
                style={{
                  width: "80px",
                  height: "100px",
                  borderRadius: "6px",
                  objectFit: "cover",
                  border: "2px solid #177cbe"
                }}
              />
              <div>
                <h4 style={{ 
                  color: "#177cbe", 
                  fontSize: "1.2rem", 
                  fontWeight: "600",
                  marginBottom: "4px",
                  fontFamily: "Times New Roman, Times, serif"
                }}>
                  Vidyadhar Mallik
                </h4>
                <p style={{ 
                  color: "#666", 
                  fontSize: "0.9rem", 
                  fontStyle: "italic",
                  margin: "0"
                }}>
                  Chairperson, NTTP-I
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div style={{
              lineHeight: '1.6',
              color: '#4a4a4a',
              fontSize: '1rem',
            }}>
              <p style={{ 
                color: "#4a4a4a", 
                fontSize: "1rem", 
                fontWeight: "500",
                marginBottom: "1rem",
                fontFamily: "Times New Roman, Times, serif"
              }}>
                <strong>Namaskar!</strong><br />
                It gives me great pleasure to welcome you to the website of the Nepal Transition to Peace Institute (NTTP-I).
              </p>
              {fullContent.split('\n\n').map((paragraph, index) => (
                <p key={index} style={{ marginBottom: '1rem' }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/*Message from Chairman End */}
    </>
  );
}




 


  





 
