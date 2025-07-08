'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import { useState } from "react"
import { Dialog } from '@headlessui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

const supporters = [
  {
    title: "UNDP Nepal",
    image: 'assets/images/about/UNDP.jpg',
    summary: "Social Cohesion and Democratic Participation (SCDP) Program and Electoral Support Project",
    details: `UNDP Nepal\nSocial Cohesion and Democratic Participation (SCDP) Program and Electoral Support Project`,
  },
  {
    title: "US Agency for International Development/Nepal",
    image: 'assets/images/about/USAID.png',
    summary: "Inclusive Dialogue for Political Transition (IDPT) project",
    details: `NTTP-I is currently implementing Inclusive Dialogue for Political Transition (IDPT) project with support from USAID/Nepal. IDPT project supports the activities of the NTTP Forum and NTTP Thematic Groups, researches and capacity building activities of NTTP Institute.\n\nFor details: https://www.usaid.gov/nepal`,
  },
  {
    title: "Embassy of Switzerland in Nepal",
    image: 'assets/images/about/swiss.jpeg',
    summary: "Supporting Inclusive Dialogues (SID) project",
    details: `NTTP-I is implementing Supporting Inclusive Dialogues (SID) project with support from the Embassy of Switzerland in Nepal. SID project also supports the activities of the NTTP Forum and NTTP Thematic Groups, researches and capacity building activities of NTTP Institute.\n\nFor details: https://www.eda.admin.ch/kathmandu`,
  },
  {
    title: "UNDP/Parliamentary Support Program Nepal",
    image: 'assets/images/about/UNDP.jpg',
    summary: "Dialogue among the Party Whips and Leaders on Parliamentary Issues",
    details: `May-July 2023\nTo foster trust and collaboration among political parties for achieving a shared goal`,
  },
  {
    title: "KURVE Wustrow - Nepal Office",
    image: 'assets/images/about/kurvewustrow.png',
    summary: "Enhancing social cohesiveness and sustainable peace and development",
    details: `March 2025 - December 2027\nTo promote the positive and sensitive handling of history`,
  }
]

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedSupporter, setSelectedSupporter] = useState(null)

  const openModal = (supporter) => {
    setSelectedSupporter(supporter)
    setIsOpen(true)
  }

  return (
    <>
      <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Supporters">
        <section className="found-one">
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">Our Supporters</span>
              <h2 className="section-title__title">Partners Behind Our Initiatives</h2>
            </div>

            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              className="mySwiper"
            >
              {supporters.map((supporter, index) => (
                <SwiperSlide key={index}>
                  {/* Added flex, flex-col, and h-full to found-one__single */}
                  <div className="found-one__single flex flex-col h-full">
                    <div className="found-one__img-box">
                      {/* Added h-48 for fixed image height */}
                      <div className="found-one__img h-48">
                        {/* Added w-full and object-cover for image sizing */}
                        <img src={supporter.image} alt={supporter.title} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    {/* Added flex-grow, flex, flex-col, and justify-between to found-one__content */}
                    <div className="found-one__content flex-grow flex flex-col justify-between">
                      <div>
                        <h4 className="found-one__title">{supporter.title}</h4>
                        <p className="found-one__text">{supporter.summary}</p>
                      </div>
                      
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed z-50 inset-0 overflow-y-auto">
              <div className="flex items-center justify-center min-h-screen px-4">
                <Dialog.Panel className="bg-white p-6 rounded-lg max-w-lg w-full shadow-xl">
                  <Dialog.Title className="text-lg font-bold mb-4">{selectedSupporter?.title}</Dialog.Title>
                  <p className="text-sm whitespace-pre-line">{selectedSupporter?.details}</p>
                  <div className="mt-4 text-right">
                    <button onClick={() => setIsOpen(false)} className="text-blue-600 hover:underline">
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </div>
            </Dialog>

          </div>
        </section>
      </Layout>
    </>
  )
}