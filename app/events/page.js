"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Linkify from "linkify-react";

export default function Home() {
  const [events, setEvents] = useState([]);
  const [modalOpen, setModalOpen] = useState(null);

  useEffect(() => {
    axios
      .get("https://be.nttpinstitute.org.np/news-events")
      .then((res) => {
        if (res.data.status) {
          setEvents(res.data.data);
        }
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
      });
  }, []);

  const openModal = (id) => setModalOpen(id);
  const closeModal = () => setModalOpen(null);
  const currentEvent = events.find((ev) => ev.id === modalOpen);

  return (
    <>
      <Layout headerStyle={3} footerStyle={3} breadcrumbTitle='News & Events'>
        <section className='events-page'>
          <div className='container'>
            <div className='row g-5'>
              {events.map((event, index) => (
                <div
                  key={event.id}
                  className='col-xl-4 col-lg-4 wow fadeInLeft mt-'
                  data-wow-delay={`${(index + 1) * 100}ms`}
                >
                  <div className='event-one__single equal-card'>
                    <div className='event-one__img-box'>
                      <div className='event-one__img'>
                        <Image
                          src={`https://be.nttpinstitute.org.np${event.photoUrl}`}
                          alt={event.title}
                          width={500}
                          height={300}
                          className='event-img'
                        />
                      </div>
                      <div className='event-one__date'>
                        <p>
                          <span className='icon-clock'></span>
                          {new Date(event.eventDate).toLocaleDateString(
                            "en-GB",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            },
                          )}
                        </p>
                      </div>
                    </div>

                    <div className='event-one__content'>
                      <h4 className='event-one__title'>
                        <Link href='#'>{event.title}</Link>
                      </h4>
                      <p className='event-one__text line-clamp'>
                        {event.smallDescription}
                      </p>
                      <p className='event-one__location'>
                        <span className='icon-pin'></span>
                        {event.location}
                      </p>
                      <div className='event-one__btn-box'>
                        <button
                          onClick={() => openModal(event.id)}
                          className='event-one__btn thm-btn'
                        >
                          Read More
                          <span>
                            <i className='icon-arrow-right'></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {currentEvent && (
          <div className='custom-modal-overlay'>
            <div className='custom-modal-content'>
              <h3>{currentEvent.title}</h3>
              <p style={{ whiteSpace: "pre-line" }}>
                <Linkify
                  options={{
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }}
                >
                  {currentEvent.fullDescription}
                </Linkify>
              </p>
              <button
                onClick={closeModal}
                className='thm-btn'
                style={{ marginTop: "20px" }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Layout>

      <style jsx>{`
        .equal-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
        }
        .event-one__img {
          position: relative;
          width: 100%;
          height: 200px; /* Fixed height for consistency */
        }
        .event-img {
          object-fit: cover;
          border-radius: 6px 6px 0 0;
        }
        .event-one__content {
          flex: 1; /* Make all contents stretch evenly */
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 15px;
        }
        .line-clamp {
          display: -webkit-box;
          -webkit-line-clamp: 2; /* Show max 2 lines */
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .custom-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }
        .custom-modal-content {
          background: #fff;
          padding: 30px;
          border-radius: 10px;
          max-width: 700px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
        }
        .custom-modal-content h3 {
          margin-top: 0;
        }
      `}</style>
    </>
  );
}
