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
      title1: "NTTP Forum",
      text1: "The national dialogue process takes place through the NTTP Forum and the inter-party dialogue forums convened by senior facilitators.",
      text2: "NTTP Forum consists of key negotiators from major political parties of Nepal and usually meets once a month or as per the need to discuss political developments, develop an understanding about each other’s positions, and find solutions to disputed issues related to Nepal’s peace process, constitution-drafting process and political transition.",
      points: [
        "Facilitated by senior political figures",
        "Monthly or need-based meetings",
        "Focus on peace and constitution drafting"
      ],
      title2: "Strengthening National Dialogue",
      text3: "NTTP Forum plays a key role in fostering understanding among political parties, addressing disputes, and ensuring inclusive discussions during Nepal’s political transition and peacebuilding process."
    },
    rightImages: {
      img1: "assets/images/project/project-details-right-img-1.jpg",
      img2: "assets/images/project/project-details-right-img-2.jpg"
    }
  },
         {
    id: 2,
    leftContent: {
      title1: "Young Political Leaders’ Group (YPLG)",
      text1: "NTTP-I currently has a Young Political Leaders’ Group (YPLG) whose members are influential young leaders in major political parties of Nepal. The meeting is convened by NTTP-I, with facilitation rotating among members.",
      text2: "YPLG focuses on constitutional content, resolving inter-party conflicts, and cultivating a culture of constructive and issue-based dialogue. At the end of each session, members provide actionable proposals to resolve national challenges.",
      points: [
        "Constitution Drafting & Implementation",
        "Peace Process & Transitional Justice",
        "State Restructuring & Federalism",
        "Conflict Mitigation & Dialogue Facilitation",
        "Political Party Reforms & Democratization"
      ],
      title2: "Shaping the Future of Democratic Leadership",
      text3: "NTTP-I supports YPLG to bring innovative, cooperative approaches into the political space. This helps bridge the leadership gap and promotes inclusive and youth-led contributions to Nepal’s peace and political transformation."
    },
    rightImages: {
      img1: "assets/images/project/project-details-right-img-1.jpg",
      img2: "assets/images/project/project-details-right-img-2.jpg"
    }
  },
         {
    id: 3,
    leftContent: {
      title1: "NTTP Women Group (WG)",
      text1: "The Women’s Group (WG) is composed of representatives from across party lines, civil society, and diverse women’s networks. NTTP-I provides a unique platform that connects these networks and promotes inclusive dialogue on gender-sensitive issues.",
      text2: "The group plays a vital role in addressing tensions between mainstream political structures and women’s organizations by promoting gender equity in political processes and legal frameworks.",
      points: [
        "Gender-Friendly Constitution Drafting",
        "Policy Formulation & Legislative Reforms",
        "Implementation of Gender Policies",
        "Leadership & Political Representation"
      ],
      title2: "Empowering Women for Inclusive Governance",
      text3: "NTTP-I supports the WG in amplifying women’s voices in governance and policy-making. Through collaborative action and institutional engagement, WG advances the cause of gender justice and addresses the leadership gap in Nepal's political landscape."
    },
    rightImages: {
      img1: "assets/images/project/project-details-right-img-1.jpg",
      img2: "assets/images/project/project-details-right-img-2.jpg"
    }
  },{
    id: 4,
    leftContent: {
      title1: "NTTP Madhesh Group (MG)",
      text1: "Although national-level political issues are addressed in the NTTP Forum, the Madhesh Group focuses on connecting Terai-based political leaders with Madhesh-based civil society. The group meets regularly to discuss, strategize, and implement initiatives related to the concerns of the Madhesh region and its people.",
      text2: "Guided by consultations like the 2014 national gathering, the Madhesh Group has prioritized strategic actions to ensure representation, inclusion, and informed decision-making in Nepal’s political processes.",
      points: [
        "Policy Research on Inclusion & Federalism",
        "Consensus Building through Action Research",
        "Public Hearings on Constitution & Governance"
      ],
      title2: "Bridging Dialogue for Regional Inclusion",
      text3: "Through research, reflective dialogue, and direct engagement with lawmakers, the Madhesh Group works to make Nepal’s constitution-making and governance more responsive to the needs and aspirations of Madheshi communities."
    },
    rightImages: {
      img1: "assets/images/project/project-details-right-img-1.jpg",
      img2: "assets/images/project/project-details-right-img-2.jpg"
    }
  },
  {
    id: 5,
    leftContent: {
      title1: "NTTP Janajati Group (JG)",
      text1: "The Janajati Group brings together Janajati leaders from major political parties, civil society, and activist circles. Regular meetings are held to address key themes such as federalism, identity and rights, governance structures, and social inclusion.",
      text2: "Through dialogue, research, and expert consultation, the group fosters understanding, reduces inter-group tensions, and promotes inclusive policy processes that reflect the aspirations of Janajati communities.",
      points: [
        "Clarity on Rights & Governance Through Research",
        "Mediation on Identity-Based Political Differences",
        "Linking Networks for Collective Problem Solving"
      ],
      title2: "Advancing Equity Through Inclusive Dialogue",
      text3: "By fostering collaboration and reducing conflict, the NTTP Janajati Group plays a vital role in shaping a governance model that recognizes Nepal’s ethnic diversity and builds bridges across communities."
    },
    rightImages: {
      img1: "assets/images/project/project-details-right-img-1.jpg",
      img2: "assets/images/project/project-details-right-img-2.jpg"
    }
  },
   {
    id: 6,
    leftContent: {
      title1: "NTTP Dalit Group (DG)",
      text1: "The NTTP Dalit Group is a cross-party coalition of political leaders, civil society representatives, and Dalit activists committed to addressing caste-based discrimination and enhancing political representation.",
      text2: "The group’s efforts focus on transforming political systems, advocating legislative reform, ensuring inclusive budgeting, and facilitating conflict resolution in Dalit communities.",
      points: [
        "Raising Political & Public Awareness",
        "Institutional Reform for Equitable Representation",
        "Budget Monitoring for Dalit Inclusion",
        "Conflict Mitigation Through Dialogue"
      ],
      title2: "Fighting Caste Discrimination with Dialogue and Action",
      text3: "By challenging systemic exclusion and mobilizing action across sectors, the NTTP Dalit Group works to ensure the voices and rights of the Dalit community are recognized and respected within Nepal’s political and social landscape."
    },
    rightImages: {
      img1: "assets/images/project/project-details-right-img-1.jpg",
      img2: "assets/images/project/project-details-right-img-2.jpg"
    }
  },
  {
    id: 7,
    leftContent: {
      title1: "Sub-national Dialogue Groups",
      text1: "NTTP-I continues to support sub-national dialogue groups in conflict-prone regions of Nepal. These groups, like the Sambad Samuha in Dang, Kailali, and Jhapa, have effectively resolved local disputes, facilitated political dialogue, and promoted peace through community engagement.",
      text2: "With strong linkages to national-level forums like the NTTP Forum and thematic groups, sub-national dialogue groups play a critical role in preventing and mitigating regional crises, serving as early responders and peace facilitators.",
      points: [
        "Mitigating Regional Conflicts via Dialogue",
        "Creating Strong Vertical Linkages with National Forums",
        "Conducting Regular Regional Consultations"
      ],
      title2: "Local Peacebuilding Through Inclusive Dialogues",
      text3: "These groups are instrumental in deepening understanding between regional and national actors, ensuring that local perspectives shape the broader peace and policy discourse. NTTP-I aims to expand this successful model to more conflict-sensitive areas across Nepal."
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