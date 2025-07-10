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
        backgroundColor: "#e6f4ff",
        padding: "60px 20px",
        position: "relative",
        zIndex: 1,
        color: "#1a1a1a",
        fontFamily: "'Times New Roman', Times, serif",
      }}
    >
      <div className='container relative'>
        

        <div className='slogan-one__content text-center max-w-4xl mx-auto'>
          <div className='title-box mb-6'>
            <h2 className='text-3xl md:text-4xl font-bold' style={{ color: "#1a1a1a" }}>
              Message from Chairperson
            </h2>
             {showFullMessage && (
          <div
            className='absolute right-0 top-0 m-4 w-24 h-32 border border-gray-300 rounded overflow-hidden shadow-md'
            style={{ zIndex: 10 }}
          >
            <img
              src='/assets/images/about/malik.jpg'
              alt='Chairperson Vidyadhar Mallik'
              className='w-full h-full object-cover'
            />
          </div>
        )}
          </div>

          <div className='text-box leading-relaxed text-lg text-left' style={{ color: "#0d1117" }}>
            {showFullMessage ? (
              <p style={{ color: "#0d1117" }}>
                <strong style={{ color: "#0d1117" }}>Vidyadhar Mallik, Chairperson, NTTP-I</strong>
                <br /><br />
                Namaskar!<br />
                It gives me great pleasure to welcome you to the website of the Nepal Transition to Peace Institute (NTTP-I).<br /><br />
                NTTP was established in 2005 as a peace initiative by a prominent group of peace enthusiasts, at a critical time in Nepal's history when Maoists' armed struggle was at peak. Quiet dialogues through back-channels were only options available for negotiations among the Maoists and mainstream political parties, who themselves were struggling on urban streets for political freedom and democratic constitutional rule against autocratic rule.
                <br /><br />
                Dialogues and negotiated settlements were very much required to bring peace, stability and constitutional rule in the country. The NTTP initiative, which transformed itself later into an organized Institute (NTTP-I) played a unique and trusted role in initiating and supporting inclusive and informed dialogues at various levels and in varied shapes and formulations for political-consensus-building and peaceful democratic transition.
                <br /><br />
                The Institute works closely today with political parties, civil society, government institutions and conflict-affected communities to create and widen trusted space for quiet deliberations among them and strengthen informed dialogue in Nepali society to bring lasting peace with deeper roots in principles of respect for human rights and inclusive democratic rule.
                <br /><br />
                Our work hovers around the belief that sustainable peace can be achieved only through meaningful participation, mutual respect and inclusive deliberations among the conflicting stakeholders. As an institution, we remain committed to creating safe space for dialogue, nurturing future political leaders, supporting transitional justice, and contributing to national reconciliation.
                <br /><br />
                We largely work at national level but listen empathetically the voices from the ground to stay alert to emerging scenarios and achieve objectively the futuristic results of peacebuilding.
                <br /><br />
                As we launch this new website, we hope to make our efforts more accessible, transparent, and interactive. Here, you will find updates on our programs, research, publications, and events that shape Nepal's transition to sustained peace and constitutional reforms landscape.
                <br /><br />
                I invite you to engage with us, take active interest in our work, and join us in our shared mission of transforming Nepal into an inclusive, righteous, peaceful, fair and democratic nation.
                <br /><br />
                With warm regards,<br />
                <strong style={{ color: "#0d1117" }}>Vidyadhar Mallik<br />(Chairperson)</strong>
              </p>
            ) : (
              <p style={{ color: "#0d1117" }}>
                Namaskar!<br />
                It gives me great pleasure to welcome you to the website of the Nepal Transition to Peace Institute (NTTP-I).
              </p>
            )}
          </div>

          <div className='btn-box mt-8'>
            <button
              onClick={handleToggleMessage}
              className='thm-btn px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300'
              style={{ fontFamily: "'Times New Roman', Times, serif", color: "#0d1117" }}
            >
              {showFullMessage ? (
                <>
                  Show Less
                  <span className='ml-2'>
                    <i className='icon-arrow-left'></i>
                  </span>
                </>
              ) : (
                <>
                  Learn More
                  <span className='ml-2'>
                    <i className='icon-arrow-right'></i>
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