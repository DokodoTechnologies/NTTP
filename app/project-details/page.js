// import Layout from "@/components/layout/Layout"
// import Link from "next/link"
// export default function Home() {

//     return (
//         <>
//         <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Forums">
//         {/*Project Details Start*/}
//         <section className="project-details">
//             <div className="container">
//                 {/* <div className="project-details__img">
//                     <img src="assets/images/project/project-details-img-1.jpg" alt=""/>
//                     <div className="project-details__info-box">
//                         <div className="project-details__info-title-box">
//                             <h3 className="project-details__info-title">Project Details</h3>
//                         </div>
//                         <div className="project-details__info-and-social">
//                             <div className="project-details__info">
//                                 <ul className="project-details__info-list list-unstyled">
//                                     <li>
//                                         <p>Name:<span>Water fundation</span></p>
//                                     </li>
//                                     <li>
//                                         <p>Author:<span>Rajin Saleh</span></p>
//                                     </li>
//                                 </ul>
//                                 <ul className="project-details__info-list list-unstyled">
//                                     <li>
//                                         <p>Date:<span>23 December,2023</span></p>
//                                     </li>
//                                     <li>
//                                         <p>Tags:<span>Water For All</span></p>
//                                     </li>
//                                 </ul>
//                             </div>
//                             <div className="project-details__social">
//                                 <Link href="#"><span className="icon-instagram"></span></Link>
//                                 <Link href="#"><span className="icon-twitter"></span></Link>
//                                 <Link href="#"><span className="icon-facebook"></span></Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div> */}
//                 <div className="row">
//                     <div className="col-xl-8 col-lg-7">
//                         <div className="project-details__left">
//                             <h3 className="project-details__title-1">Supporting Health Initiatives</h3>
//                             <p className="project-details__text-1">Lorem Ipsum is simply dummy text of the printing and
//                                 typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
//                                 the 1500s, when an unknown printer took a galltype and scrambled it to make a type
//                                 specimen book. It has survived not only five centuries tinto electronic typesetting
//                                 remaining essentially unchanged</p>
//                             <p className="project-details__text-2">Lorem Ipsum is simply dummy text of the printing and
//                                 typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
//                                 the 1500s, when an unknown print</p>
//                             <ul className="project-details__points list-unstyled">
//                                 <li>
//                                     <div className="icon">
//                                         <span className="icon-check"></span>
//                                     </div>
//                                     <p>Hope Restoration</p>
//                                 </li>
//                                 <li>
//                                     <div className="icon">
//                                         <span className="icon-check"></span>
//                                     </div>
//                                     <p>Giving Back</p>
//                                 </li>
//                                 <li>
//                                     <div className="icon">
//                                         <span className="icon-check"></span>
//                                     </div>
//                                     <p>Positive Impact</p>
//                                 </li>
//                             </ul>
//                             <h3 className="project-details__title-2">Elevate Your Business with IT Solutions</h3>
//                             <p className="project-details__text-3">Lorem Ipsum is simply dummy text of the printing and
//                                 typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
//                                 the 1500s, when an unknown printer took a galltype and scrambled it to make a type
//                                 specimen book. It has survived not only five centuries tinto electronic typesetting
//                                 remaining essentially unchanged</p>
//                         </div>
//                     </div>
//                     <div className="col-xl-4 col-lg-5">
//                         <div className="project-details__right">
//                             <div className="project-details__right-img-1">
//                                 <img src="assets/images/project/project-details-right-img-1.jpg" alt=""/>
//                             </div>
//                             <div className="project-details__right-img-2">
//                                 <img src="assets/images/project/project-details-right-img-2.jpg" alt=""/>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                  <div className="row">
//                     <div className="col-xl-8 col-lg-7">
//                         <div className="project-details__left">
//                             <h3 className="project-details__title-1">Supporting Health Initiatives</h3>
//                             <p className="project-details__text-1">Lorem Ipsum is simply dummy text of the printing and
//                                 typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
//                                 the 1500s, when an unknown printer took a galltype and scrambled it to make a type
//                                 specimen book. It has survived not only five centuries tinto electronic typesetting
//                                 remaining essentially unchanged</p>
//                             <p className="project-details__text-2">Lorem Ipsum is simply dummy text of the printing and
//                                 typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
//                                 the 1500s, when an unknown print</p>
//                             <ul className="project-details__points list-unstyled">
//                                 <li>
//                                     <div className="icon">
//                                         <span className="icon-check"></span>
//                                     </div>
//                                     <p>Hope Restoration</p>
//                                 </li>
//                                 <li>
//                                     <div className="icon">
//                                         <span className="icon-check"></span>
//                                     </div>
//                                     <p>Giving Back</p>
//                                 </li>
//                                 <li>
//                                     <div className="icon">
//                                         <span className="icon-check"></span>
//                                     </div>
//                                     <p>Positive Impact</p>
//                                 </li>
//                             </ul>
//                             <h3 className="project-details__title-2">Elevate Your Business with IT Solutions</h3>
//                             <p className="project-details__text-3">Lorem Ipsum is simply dummy text of the printing and
//                                 typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
//                                 the 1500s, when an unknown printer took a galltype and scrambled it to make a type
//                                 specimen book. It has survived not only five centuries tinto electronic typesetting
//                                 remaining essentially unchanged</p>
//                         </div>
//                     </div>
//                     <div className="col-xl-4 col-lg-5">
//                         <div className="project-details__right">
//                             <div className="project-details__right-img-1">
//                                 <img src="assets/images/project/project-details-right-img-1.jpg" alt=""/>
//                             </div>
//                             <div className="project-details__right-img-2">
//                                 <img src="assets/images/project/project-details-right-img-2.jpg" alt=""/>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="project-details__pagination">
//                     <ul className="pg-pagination list-unstyled">
//                         <li className="prev">
//                             <Link href="#" aria-label="prev"><i className="icon-right-arrow"></i>Previous</Link>
//                         </li>
//                         <li className="next">
//                             <Link href="#" aria-label="Next">Next<i className="icon-right-arrow"></i></Link>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </section>
//         {/*Project Details End*/}

//             </Layout>
//         </>
//     )
// }

"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
    // Content data - add more content sections here
    const contentSections = [
        {
            id: 1,
            leftContent: {
                title1: "Supporting Health Initiatives",
                text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galltype and scrambled it to make a type specimen book. It has survived not only five centuries tinto electronic typesetting remaining essentially unchanged",
                text2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print",
                points: ["Hope Restoration", "Giving Back", "Positive Impact"],
                title2: "Elevate Your Business with IT Solutions",
                text3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galltype and scrambled it to make a type specimen book. It has survived not only five centuries tinto electronic typesetting remaining essentially unchanged"
            },
            rightImages: {
                img1: "assets/images/project/project-details-right-img-1.jpg",
                img2: "assets/images/project/project-details-right-img-2.jpg"
            }
        },
        {
            id: 2,
            leftContent: {
                title1: "Educational Programs",
                text1: "Our educational initiatives focus on providing quality learning opportunities for underserved communities. We believe that education is the foundation for lasting change and empowerment.",
                text2: "Through partnerships with local schools and organizations, we're making education accessible to everyone.",
                points: ["Scholarship Programs", "Digital Literacy", "Vocational Training"],
                title2: "Building Tomorrow's Leaders",
                text3: "Every child deserves the opportunity to learn and grow. Our programs are designed to nurture potential and create pathways to success for students of all backgrounds."
            },
            rightImages: {
                img1: "assets/images/project/project-details-right-img-1.jpg",
                img2: "assets/images/project/project-details-right-img-2.jpg"
            }
        },
        {
            id: 3,
            leftContent: {
                title1: "Environmental Conservation",
                text1: "Protecting our planet for future generations through sustainable practices and environmental awareness programs. We work with communities to implement eco-friendly solutions.",
                text2: "Climate change is real, and we're taking action to combat its effects through innovative green initiatives.",
                points: ["Tree Planting", "Waste Reduction", "Clean Energy"],
                title2: "Green Future Initiative",
                text3: "Small actions lead to big changes. Our environmental programs focus on creating sustainable habits that benefit both communities and the planet."
            },
            rightImages: {
                img1: "assets/images/project/project-details-right-img-1.jpg",
                img2: "assets/images/project/project-details-right-img-2.jpg"
            }
        }
    ];

    const [currentPage, setCurrentPage] = useState(0);

    const handlePrevious = () => {
        setCurrentPage(prev => prev > 0 ? prev - 1 : contentSections.length - 1);
    };

    const handleNext = () => {
        setCurrentPage(prev => prev < contentSections.length - 1 ? prev + 1 : 0);
    };

    const currentContent = contentSections[currentPage];

    return (
        <>
        <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Forums">
        {/*Project Details Start*/}
        <section className="project-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="project-details__left">
                            <h3 className="project-details__title-1">{currentContent.leftContent.title1}</h3>
                            <p className="project-details__text-1">{currentContent.leftContent.text1}</p>
                            <p className="project-details__text-2">{currentContent.leftContent.text2}</p>
                            <ul className="project-details__points list-unstyled">
                                {currentContent.leftContent.points.map((point, index) => (
                                    <li key={index}>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>{point}</p>
                                    </li>
                                ))}
                            </ul>
                            <h3 className="project-details__title-2">{currentContent.leftContent.title2}</h3>
                            <p className="project-details__text-3">{currentContent.leftContent.text3}</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="project-details__right">
                            <div className="project-details__right-img-1">
                                <img src={currentContent.rightImages.img1} alt=""/>
                            </div>
                            <div className="project-details__right-img-2">
                                <img src={currentContent.rightImages.img2} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Page indicator */}
                <div className="project-details__page-indicator">
                    <div className="page-dots">
                        {contentSections.map((_, index) => (
                            <span 
                                key={index}
                                className={`dot ${index === currentPage ? 'active' : ''}`}
                                onClick={() => setCurrentPage(index)}
                            ></span>
                        ))}
                    </div>
                    <p className="page-info">Page {currentPage + 1} of {contentSections.length}</p>
                </div>

                <div className="project-details__pagination">
                    <ul className="pg-pagination list-unstyled">
                        <li className="prev">
                            <button 
                                onClick={handlePrevious}
                                aria-label="prev"
                                className="pagination-btn"
                            >
                                <i className="icon-right-arrow"></i>Previous
                            </button>
                        </li>
                        <li className="next">
                            <button 
                                onClick={handleNext}
                                aria-label="Next"
                                className="pagination-btn"
                            >
                                Next<i className="icon-right-arrow"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        {/*Project Details End*/}

        <style jsx>{`
            .project-details__page-indicator {
                text-align: center;
                margin: 30px 0;
            }
            
            .page-dots {
                margin-bottom: 10px;
            }
            
            .dot {
                display: inline-block;
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background-color: #ddd;
                margin: 0 5px;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }
            
            .dot.active {
                background-color: #007bff;
            }
            
            .dot:hover {
                background-color: #007bff;
                opacity: 0.7;
            }
            
            .page-info {
                margin: 0;
                color: #666;
                font-size: 14px;
            }
            
            .pagination-btn {
                background: none;
                border: none;
                cursor: pointer;
                color: inherit;
                font: inherit;
                text-decoration: none;
                display: inline-flex;
                align-items: center;
                gap: 8px;
            }
            
            .pagination-btn:hover {
                opacity: 0.8;
            }
        `}</style>

        </Layout>
        </>
    )
}