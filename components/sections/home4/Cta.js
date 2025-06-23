'use client'

import { useState } from "react"
import { Dialog } from '@headlessui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

const lateMembers = [
  {
    id: 'daman',
    name: 'Late Mr. Daman Nath Dhungana',
    shortDescription:
      'was a senior NTTP facilitator, Executive Committee Member and former Chairperson at NTTP-I.',
    image: 'assets/images/about/daman.png',
    fullDescription: `Late Daman Nath Dhungana was a senior NTTP facilitator, Executive Committee Member and former Chairperson at NTTP-I. He served as the Speaker of the House after restoration of parliamentary democracy in 1990 and was asked to facilitate official peace talks between the government and the Maoists in 2001 and 2003. He is a senior advocate and a human rights defender who has continuously engaged with Nepal’s peace process as an insider for the last 18 years. He is renowned for advocacy of democratic process and constitutionalism.`
  },
  {
    id: 'padma',
    name: 'Late Padma Ratna Tuladhar',
    shortDescription:
      'was a senior NTTP facilitator, Executive Committee Member and former Chairperson at NTTP-I.',
    image: 'assets/images/about/padma.png',
    fullDescription: `Late Padma Ratna Tuladhar (1940–2018) was a senior NTTP facilitator, Executive Committee Member and former Chairperson at NTTP-I. He was a distinguished Nepali politician, human rights defender, and advocate for indigenous rights. Elected to the Rastriya Panchayat in 1986, he boldly championed democracy from within the autocratic system. Following the 1990 democratic movement, he served as Minister for Labour and Health in the 1994 CPN-UML-led government. Tuladhar played a pivotal role in Nepal’s peace process, facilitating dialogue between the government and Maoist rebels during the civil war. His unwavering commitment to justice and inclusion made him a revered figure in Nepal’s democratic evolution.`
  }
]

export default function Cta() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedMember, setSelectedMember] = useState(null)

  const handleMemberClick = (member) => {
    setSelectedMember(member)
    setIsOpen(true)
  }

  return (
    <section
      className="volunteer-carousel-page"
      style={{
        backgroundColor: '#f1f0ec',
        paddingBottom: '6rem',
        paddingTop: '5rem',
        marginBottom: '8rem'
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
          className="volunteer-carousel-style"
        >
          {lateMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="item">
                <div className="team-one__single">
                  <div className="team-one__img-box">
                    <div className="team-one__img">
                      <img src={member.image} alt={member.name} />
                    </div>
                  </div>
                  <div className="team-one__content">
                    <div className="team-one__name-box">
                      <h4 className="team-one__name">
                        <div
                          onClick={() => handleMemberClick(member)}
                          style={{ cursor: 'pointer' }}
                        >
                          {member.name}
                        </div>
                      </h4>
                      <p className="team-one__sub-title">
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

      {/* Modal for full description */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed z-50 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen px-4">
          <Dialog.Panel className="bg-white p-6 rounded-lg max-w-xl w-full shadow-xl">
            <Dialog.Title className="text-xl font-semibold mb-4 text-gray-800">
              {selectedMember?.name}
            </Dialog.Title>
            <p className="text-sm text-gray-700 whitespace-pre-line">
              {selectedMember?.fullDescription}
            </p>
            <div className="mt-4 text-right">
              <button
                onClick={() => setIsOpen(false)}
                className="text-blue-600 hover:underline"
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  )
}
