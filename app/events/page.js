'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Events">
                {/*Events Page Start*/}
                <section className="events-page">
                    <div className="container">
                        <div className="row">
                            {/*Event One Single Start*/}
                            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                                <div className="event-one__single">
                                    <div className="event-one__img-box">
                                        <div className="event-one__img">
                                            <img src="assets/images/event/event-1-1.jpg" alt="" />
                                        </div>
                                        <div className="event-one__date">
                                            <p><span className="icon-clock"></span>20th Dec, 2024</p>
                                        </div>
                                    </div>
                                    <div className="event-one__content">
                                        <h4 className="event-one__title"><Link href="event-details">Youth Dialogue Summit</Link></h4>
                                        <p className="event-one__text">Youth summit uniting young political leaders to build understanding and cooperation.</p>
                                        <p className="event-one__location"><span className="icon-pin"></span>Kathmandu, Nepal</p>

                                        <div className="event-one__btn-box">
                                            <Link href="read-more" className="event-one__btn thm-btn">Read More<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Event One Single End*/}
                            {/*Event One Single Start*/}
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                                <div className="event-one__single">
                                    <div className="event-one__img-box">
                                        <div className="event-one__img">
                                            <img src="assets/images/event/event-1-2.jpg" alt="" />
                                        </div>
                                        <div className="event-one__date">
                                            <p><span className="icon-clock"></span>15th nov, 2023</p>
                                        </div>
                                    </div>
                                    <div className="event-one__content">
                                        <h4 className="event-one__title"><Link href="event-details">Women for Peace Workshop</Link></h4>
                                        <p className="event-one__text">A capacity-building workshop for empowering women leaders in peacebuilding processes.</p>
                                        <p className="event-one__location"><span className="icon-pin"></span>Biratnagar, Nepal</p>

                                        <div className="event-one__btn-box">
                                            <Link href="read-more" className="event-one__btn thm-btn">Read More<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Event One Single End*/}
                            {/*Event One Single Start*/}
                            <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="100ms">
                                <div className="event-one__single">
                                    <div className="event-one__img-box">
                                        <div className="event-one__img">
                                            <img src="assets/images/event/event-1-3.jpg" alt="" />
                                        </div>
                                        <div className="event-one__date">
                                            <p><span className="icon-clock"></span>19th Feb, 2024</p>
                                        </div>
                                    </div>
                                    <div className="event-one__content">
                                        <h4 className="event-one__title"><Link href="event-details">Community Healing Dialogue</Link></h4>
                                        <p className="event-one__text">A local-level initiative to address post-conflict trauma and promote social harmony.</p>
                                        <p className="event-one__location"><span className="icon-pin"></span>Gorkha, Nepal</p>

                                        <div className="event-one__btn-box">
                                            <Link href="read-more" className="event-one__btn thm-btn">Read More<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Event One Single End*/}
                            {/*Event One Single Start*/}
                            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="400ms">
                                <div className="event-one__single">
                                    <div className="event-one__img-box">
                                        <div className="event-one__img">
                                            <img src="assets/images/event/event-1-4.jpg" alt="" />
                                        </div>
                                        <div className="event-one__date">
                                            <p><span className="icon-clock"></span>19th Feb, 2024</p>
                                        </div>
                                    </div>
                                    <div className="event-one__content">
                                        <h4 className="event-one__title"><Link href="event-details">Inclusive Policy Roundtable</Link></h4>
                                        <p className="event-one__text">A multi-stakeholder dialogue aimed at informing inclusive governance policies.</p>
                                        <p className="event-one__location"><span className="icon-pin"></span>Lalitpur, Nepal</p>

                                        <div className="event-one__btn-box">
                                            <Link href="read-more" className="event-one__btn thm-btn">Read More<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Event One Single End*/}
                            {/*Event One Single Start*/}
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="500ms">
                                <div className="event-one__single">
                                    <div className="event-one__img-box">
                                        <div className="event-one__img">
                                            <img src="assets/images/event/event-1-5.jpg" alt="" />
                                        </div>
                                        <div className="event-one__date">
                                            <p><span className="icon-clock"></span>19th Feb, 2024</p>
                                        </div>
                                    </div>
                                    <div className="event-one__content">
                                        <h4 className="event-one__title"><Link href="event-details">Dalit Rights Forum</Link></h4>
                                        <p className="event-one__text">A platform for advocating Dalit inclusion in political and social dialogues.</p>
                                        <p className="event-one__location"><span className="icon-pin"></span>Dhangadhi, Nepal</p>

                                        <div className="event-one__btn-box">
                                            <Link href="read-more" className="event-one__btn thm-btn">Read More<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Event One Single End*/}
                            {/*Event One Single Start*/}
                            <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="600ms">
                                <div className="event-one__single">
                                    <div className="event-one__img-box">
                                        <div className="event-one__img">
                                            <img src="assets/images/event/event-1-6.jpg" alt="" />
                                        </div>
                                        <div className="event-one__date">
                                            <p><span className="icon-clock"></span>19th Feb, 2024</p>
                                        </div>
                                    </div>
                                    <div className="event-one__content">
                                        <h4 className="event-one__title"><Link href="event-details">Peace Through Arts Festival</Link></h4>
                                        <p className="event-one__text">A cultural event promoting peace messages through music, theater, and visual arts.</p>
                                        <p className="event-one__location"><span className="icon-pin"></span>Pokhara, Nepal</p>

                                        <div className="event-one__btn-box">
                                            <Link href="read-more" className="event-one__btn thm-btn">Read More<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Event One Single End*/}
                        </div>
                    </div>
                </section>
                {/*Events Page End*/}

            </Layout>
        </>
    )
}