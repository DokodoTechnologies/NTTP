'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
    const [modalOpen, setModalOpen] = useState(null);

    const openModal = (id) => setModalOpen(id);
    const closeModal = () => setModalOpen(null);

    const modalContents = {
        1: {
            title: "Interaction Program with CPCS",
            content: `An interaction program between the Centre for Peace and Conflict Studies (CPCS), Siem Reap,Cambodia, and the Nepal Transition to Peace Institute (NTTP-I) was held on 13 April 2025.The program brought together 21 peace practitioners from Cambodia, Sri Lanka, and Nepal.Distinguished attendees included Mr. Vidyadhar Mallik, Chairperson of NTTP-I; Ms. StellaTamang, Member of the NTTP-I Executive Board; Ms. Betchak Padilla, Senior Peace Trainerand ACTS Coordinator; Dr. Soth Plai Ngarm; and Ms. Nikki Singer from CPCS, Cambodia.The interaction proved fruitful in fostering the exchange of knowledge and experiences otransitional justice, human rights mechanisms, religious harmony, grassroots reconciliationperspectives, and the issue of enforced disappearances in the region.`
        },
        2: {
            title: "Consultation Meeting on NTTP-I Documentation",
            content: `On Sunday, 11 May 2025, a consultation meeting on the documentation of the NTTP-I peaceinitiative was organized by the Nepal Transition to Peace Institute (NTTP-I). The meeting aimto systematically document NTTP-I’s peace initiatives to ensure continuity, promote learning,and build a long-term organizational legacy.The event brought together NTTP-I members, including those from the NTTP-I Political Leader Forum and Advisory Committee, as well as peace experts and representatives from organizations working in the field of peace and conflict transformation. The consultation sought to gather feed-forward inputs to enhance the quality, accessibility, and relevance of the documentation process.`
        },
        3: {
            title: "Interaction on Transitional Justice Mechanism",
            content: `An Interaction Program on the Challenges and Opportunities in Expediting Nepal’s Peace Process and Transitional Justice Mechanism was successfully organized on Tuesday, April 16, 2025, bringing together a diverse and influential group of stakeholders. The program featured the participation of senior political leaders from various political parties, the Secretary of the Ministry of Law, Justice and Parliamentary Affairs of the Federal Government, peace activists, legal and transitional justice experts, human rights defenders, and seasoned peace practitioners. The interaction served as a significant platform for dialogue, fostering a shared understanding among key actors involved in Nepal’s peace and transitional justice landscape. By convening such a wide spectrum of expertise and authority, the program provided a rare opportunity for collaborative reflection on the ongoing challenges and untapped opportunities in the process.This forum proved fruitful in generating valuable insights, innovative ideas, and actionable recommendations aimed at revitalizing and accelerating the transitional justice process. It is expected that the outcomes of the discussion will contribute meaningfully to shaping a more inclusive, accountable, and timely implementation of Nepal’s peace commitments.NTTP-I is always thankful with all the participants of the program.`
        }
    }

    return (
        <>
            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Events">
                <section className="events-page">
                    <div className="container">
                        <div className="row">
                            {/*Event 1*/}
                            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                                <div className="event-one__single">
                                    <div className="event-one__img-box">
                                        <div className="event-one__img">
                                            <img src="assets/images/event/event2.jpeg" alt="" />
                                        </div>
                                        <div className="event-one__date">
                                            <p><span className="icon-clock"></span>13th April, 2025</p>
                                        </div>
                                    </div>
                                    <div className="event-one__content">
                                        <h4 className="event-one__title"><Link href="#">CPCS Interaction Program</Link></h4>
                                        <p className="event-one__text">Interaction with CPCS and NTTP-I featuring peace practitioners from South Asia.</p>
                                        <p className="event-one__location"><span className="icon-pin"></span>Kathmandu, Nepal</p>
                                        <div className="event-one__btn-box">
                                            <button onClick={() => openModal(1)} className="event-one__btn thm-btn">Read More<span><i className="icon-arrow-right"></i></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Event 2*/}
                            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="200ms">
                                <div className="event-one__single">
                                    <div className="event-one__img-box">
                                        <div className="event-one__img">
                                            <img src="assets/images/event/event1.jpg" alt="" />
                                        </div>
                                        <div className="event-one__date">
                                            <p><span className="icon-clock"></span>11th May, 2025</p>
                                        </div>
                                    </div>
                                    <div className="event-one__content">
                                        <h4 className="event-one__title"><Link href="#">Consultation on Documentation</Link></h4>
                                        <p className="event-one__text">Meeting to document NTTP-I’s peace initiatives for continuity and learning.</p>
                                        <p className="event-one__location"><span className="icon-pin"></span>Kathmandu, Nepal</p>
                                        <div className="event-one__btn-box">
                                            <button onClick={() => openModal(2)} className="event-one__btn thm-btn">Read More<span><i className="icon-arrow-right"></i></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Event 3*/}
                            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="300ms">
                                <div className="event-one__single">
                                    <div className="event-one__img-box">
                                        <div className="event-one__img">
                                            <img src="assets/images/event/event2.jpeg" alt="" />
                                        </div>
                                        <div className="event-one__date">
                                            <p><span className="icon-clock"></span>16th April, 2025</p>
                                        </div>
                                    </div>
                                    <div className="event-one__content">
                                        <h4 className="event-one__title"><Link href="#">Challenges in Peace Process</Link></h4>
                                        <p className="event-one__text">Dialogue on Nepal’s peace and transitional justice with high-level stakeholders.</p>
                                        <p className="event-one__location"><span className="icon-pin"></span>Kathmandu, Nepal</p>
                                        <div className="event-one__btn-box">
                                            <button onClick={() => openModal(3)} className="event-one__btn thm-btn">Read More<span><i className="icon-arrow-right"></i></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Event 1*/}
                            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                                <div className="event-one__single">
                                    <div className="event-one__img-box">
                                        <div className="event-one__img">
                                            <img src="assets/images/event/event2.jpeg" alt="" />
                                        </div>
                                        <div className="event-one__date">
                                            <p><span className="icon-clock"></span>13th April, 2025</p>
                                        </div>
                                    </div>
                                    <div className="event-one__content">
                                        <h4 className="event-one__title"><Link href="#">CPCS Interaction Program</Link></h4>
                                        <p className="event-one__text">Interaction with CPCS and NTTP-I featuring peace practitioners from South Asia.</p>
                                        <p className="event-one__location"><span className="icon-pin"></span>Kathmandu, Nepal</p>
                                        <div className="event-one__btn-box">
                                            <button onClick={() => openModal(1)} className="event-one__btn thm-btn">Read More<span><i className="icon-arrow-right"></i></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Event 2*/}
                            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="200ms">
                                <div className="event-one__single">
                                    <div className="event-one__img-box">
                                        <div className="event-one__img">
                                            <img src="assets/images/event/event1.jpg" alt="" />
                                        </div>
                                        <div className="event-one__date">
                                            <p><span className="icon-clock"></span>11th May, 2025</p>
                                        </div>
                                    </div>
                                    <div className="event-one__content">
                                        <h4 className="event-one__title"><Link href="#">Consultation on Documentation</Link></h4>
                                        <p className="event-one__text">Meeting to document NTTP-I’s peace initiatives for continuity and learning.</p>
                                        <p className="event-one__location"><span className="icon-pin"></span>Kathmandu, Nepal</p>
                                        <div className="event-one__btn-box">
                                            <button onClick={() => openModal(2)} className="event-one__btn thm-btn">Read More<span><i className="icon-arrow-right"></i></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Event 3*/}
                            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="300ms">
                                <div className="event-one__single">
                                    <div className="event-one__img-box">
                                        <div className="event-one__img">
                                            <img src="assets/images/event/event2.jpeg" alt="" />
                                        </div>
                                        <div className="event-one__date">
                                            <p><span className="icon-clock"></span>16th April, 2025</p>
                                        </div>
                                    </div>
                                    <div className="event-one__content">
                                        <h4 className="event-one__title"><Link href="#">Challenges in Peace Process</Link></h4>
                                        <p className="event-one__text">Dialogue on Nepal’s peace and transitional justice with high-level stakeholders.</p>
                                        <p className="event-one__location"><span className="icon-pin"></span>Kathmandu, Nepal</p>
                                        <div className="event-one__btn-box">
                                            <button onClick={() => openModal(3)} className="event-one__btn thm-btn">Read More<span><i className="icon-arrow-right"></i></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                
                
                </section>

                {modalOpen && (
                    <div className="custom-modal-overlay">
                        <div className="custom-modal-content">
                            <h3>{modalContents[modalOpen].title}</h3>
                            <p style={{ whiteSpace: 'pre-line' }}>{modalContents[modalOpen].content}</p>
                            <button onClick={closeModal} className="thm-btn" style={{ marginTop: "20px" }}>Close</button>
                        </div>
                    </div>
                )}
            </Layout>

            <style jsx>{`
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
    )
}