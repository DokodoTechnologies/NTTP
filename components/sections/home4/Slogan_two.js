"use client";
import { useState } from "react";
import Link from "next/link";

export default function Slogan_two() {
  const [showFullMessage, setShowFullMessage] = useState(false);

  const handleToggleMessage = () => {
    setShowFullMessage(!showFullMessage);
  };

  return (
    <section
      className='slogan-one relative'
      style={{
        backgroundColor: "#f8f9fa",
        padding: "60px 20px",
        position: "relative",
        zIndex: 1,
        color: "#1a1a1a",
        fontFamily: "'Times New Roman', Times, serif",
      }}
    >
      <div className='container relative max-w-6xl mx-auto'>
        <div className='slogan-one__content'>
          {/* Title */}
          <div className='title-box mb-8'>
            <h2 className='text-3xl md:text-4xl font-bold text-green-600 mb-6'>
              Message from the Chairperson
            </h2>
          </div>

          {/* Content Layout */}
          <div className='flex flex-col md:flex-row gap-8 items-start'>
            {/* Image Container */}
            <div className='flex-shrink-0'>
              <div className='w-48 h-64 border border-gray-300 rounded overflow-hidden shadow-md bg-gray-100'>
                <img
                  src='/assets/images/about/malik.jpg'
                  alt='Chairperson Vidyadhar Mallik'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>

            {/* Text Content */}
            <div className='flex-1 text-box leading-relaxed text-base text-left' style={{ color: "#333" }}>
              {showFullMessage ? (
                <div style={{ color: "#333" }}>
                  <p className="mb-4">
                    <strong className="text-lg">Vidyadhar Mallik, Chairperson, NTTP-I</strong>
                  </p>
                  
                  <p className="mb-4">
                    <strong>Namaskar!</strong><br />
                    It gives me great pleasure to welcome you to the website of the Nepal Transition to Peace Institute (NTTP-I).
                  </p>
                  
                  <p className="mb-4">
                    NTTP was established in 2005 as a peace initiative by a prominent group of peace enthusiasts, at a critical time in Nepal's history when Maoists' armed struggle was at peak. Quiet dialogues through back-channels were only options available for negotiations among the Maoists and mainstream political parties, who themselves were struggling on urban streets for political freedom and democratic constitutional rule against autocratic rule.
                  </p>
                  
                  <p className="mb-4">
                    Dialogues and negotiated settlements were very much required to bring peace, stability and constitutional rule in the country. The NTTP initiative, which transformed itself later into an organized Institute (NTTP-I) played a unique and trusted role in initiating and supporting inclusive and informed dialogues at various levels and in varied shapes and formulations for political-consensus-building and peaceful democratic transition.
                  </p>
                  
                  <p className="mb-4">
                    The Institute works closely today with political parties, civil society, government institutions and conflict-affected communities to create and widen trusted space for quiet deliberations among them and strengthen informed dialogue in Nepali society to bring lasting peace with deeper roots in principles of respect for human rights and inclusive democratic rule.
                  </p>
                  
                  <p className="mb-4">
                    Our work hovers around the belief that sustainable peace can be achieved only through meaningful participation, mutual respect and inclusive deliberations among the conflicting stakeholders. As an institution, we remain committed to creating safe space for dialogue, nurturing future political leaders, supporting transitional justice, and contributing to national reconciliation.
                  </p>
                  
                  <p className="mb-4">
                    We largely work at national level but listen empathetically the voices from the ground to stay alert to emerging scenarios and achieve objectively the futuristic results of peacebuilding.
                  </p>
                  
                  <p className="mb-4">
                    As we launch this new website, we hope to make our efforts more accessible, transparent, and interactive. Here, you will find updates on our programs, research, publications, and events that shape Nepal's transition to sustained peace and constitutional reforms landscape.
                  </p>
                  
                  <p className="mb-4">
                    I invite you to engage with us, take active interest in our work, and join us in our shared mission of transforming Nepal into an inclusive, righteous, peaceful, fair and democratic nation.
                  </p>
                  
                  <p className="mb-4">
                    With warm regards,<br />
                    <strong>Vidyadhar Mallik<br />(Chairperson)</strong>
                  </p>
                </div>
              ) : (
                <div style={{ color: "#333" }}>
                  <p className="mb-4">
                    NTTP-I is a registered non-profit and non-governmental organization, the Nepal Transition to Peace Institute (NTTP-I). Established in the year 2005, NTTP-I has the mission of ensuring sustainable peace and democratic transition in Nepal by maximizing inclusive dialogue and meaningful participation among conflicting stakeholders.
                  </p>
                  
                  <p className="mb-4">
                    Our journey for peace building was challenging due to the complex political transition. But we tried our possible way to create a space for working on it. Due to the political instability, the whole peace building sector was in a difficult state including other sectors too. But we try to work in those challenging days due to support from our national and international partners.
                  </p>
                  
                  <p className="mb-4">
                    I would like to express my sincere gratitude to all our national and international partners for their immense support in this field. Also thanks to all the well-wishers and supporters for the continuous support and feedback. We would really appreciate the comments and suggestions from partners and others at any time. That would be very good for our organization.
                  </p>
                  
                  <p className="mb-4">
                    NTTP-I has weathered many challenges, now I look forward to contributing to the longevity of sustainable peace in Nepal.
                  </p>
                  
                  <p className="mb-4">
                    <strong>Vidyadhar Mallik,</strong><br />
                    <strong>Chairperson, NTTP-I</strong>
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Button */}
          <div className='btn-box mt-8'>
            <button
              onClick={handleToggleMessage}
              className='bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium'
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              {showFullMessage ? (
                <>
                  Show Less
                  <span className='ml-2'>
                    <i className='icon-arrow-up'></i>
                  </span>
                </>
              ) : (
                <>
                  Read More
                  <span className='ml-2'>
                    <i className='icon-arrow-down'></i>
                  </span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}