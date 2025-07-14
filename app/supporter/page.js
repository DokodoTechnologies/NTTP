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
    title: "KURVE Wustrow - Nepal Office",
    image: 'assets/images/about/kurvewustrow.png',
    summary: "Enhancing social cohesiveness and sustainable peace and development",
    details: "March 2025 - December 2027\nTo promote the positive and sensitive handling of history.",
  },
  {
    title: "Asia Foundation",
    image: 'assets/images/about/asian.png',
    summary: "",
    details: "May-July 2023\nTo foster trust and collaboration among political parties for achieving a shared goal.",
  },
  {
    title: "UNDP Nepal",
    image: 'assets/images/about/UNDP.jpg',
    summary: "Social Cohesion and Democratic Participation (SCDP) Program and Electoral Support Project",
    details: "UNDP Nepal\nSocial Cohesion and Democratic Participation (SCDP) Program and Electoral Support Project.",
  },
  {
    title: "US Agency for International Development/Nepal",
    image: 'assets/images/about/USAID.png',
    summary: "Inclusive Dialogue for Political Transition (IDPT) project",
    details: "NTTP-I is currently implementing Inclusive Dialogue for Political Transition (IDPT) project with support from USAID/Nepal. IDPT project supports the activities of the NTTP Forum and NTTP Thematic Groups, researches and capacity building activities of NTTP Institute.\n\nFor details: https://www.usaid.gov/nepal",
  },
  {
    title: "Embassy of Switzerland in Nepal",
    image: 'assets/images/about/swiss.jpeg',
    summary: "Supporting Inclusive Dialogues (SID) project",
    details: "NTTP-I is implementing Supporting Inclusive Dialogues (SID) project with support from the Embassy of Switzerland in Nepal. SID project also supports the activities of the NTTP Forum and NTTP Thematic Groups, researches and capacity building activities of NTTP Institute.\n\nFor details: https://www.eda.admin.ch/kathmandu",
  },
  {
    title: "UNDP/Parliamentary Support Program Nepal",
    image: 'assets/images/about/UNDP.jpg',
    summary: "Dialogue among the Party Whips and Leaders on Parliamentary Issues",
    details: "May-July 2023\nTo foster trust and collaboration among political parties for achieving a shared goal.",
  },
  {
    title: "British Embassy in Kathmandu",
    image: 'assets/images/about/british.jpg',
    summary: "",
    details: "May-July 2023\nTo foster trust and collaboration among political parties for achieving a shared goal.",
  },
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
      <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Partners">
        <section className="found-one">
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">Our Partners</span>
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
                  <div
                    className="found-one__single flex flex-col h-96 cursor-pointer border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    onClick={() => openModal(supporter)}
                  >
                    <div className="found-one__img-box">
                      <div className="found-one__img w-full h-48 overflow-hidden rounded-lg border border-gray-200 bg-white flex items-center justify-center p-4">
                        <img
                          src={supporter.image}
                          alt={supporter.title}
                          className="max-w-full max-h-full object-contain"
                          style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}
                        />
                      </div>
                    </div>
                    <div className="found-one__content flex-grow flex flex-col justify-between p-4 min-h-0">
                      <div className="flex-grow">
                        <h4 className="found-one__title text-lg font-semibold mb-2 line-clamp-2">{supporter.title}</h4>
                        {supporter.summary && (
                          <p className="found-one__text text-sm text-gray-600 line-clamp-3">{supporter.summary}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed z-50 inset-0 overflow-y-auto">
              <div className="flex items-center justify-center min-h-screen px-4">
                <Dialog.Panel className="bg-white p-6 rounded-lg max-w-lg w-full shadow-xl">
                  <Dialog.Title className="text-lg font-bold mb-4">
                    {selectedSupporter?.title}
                  </Dialog.Title>
                  <p className="text-sm whitespace-pre-line">
                    {selectedSupporter?.details}
                  </p>
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