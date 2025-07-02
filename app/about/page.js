"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  // Autoplay configuration (optional, if you want automatic slide transitions)
  autoplay: {
    delay: 5000, // 5 seconds
    disableOnInteraction: false,
  },
  // Navigation
  navigation: {
    nextEl: '.swiper-button-next', // Swiper's default class for next button
    prevEl: '.swiper-button-prev', // Swiper's default class for prev button
  },
  // Pagination
  pagination: {
    el: '.swiper-pagination', // Swiper's default class for pagination bullets
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 1,
    },
    991: {
      slidesPerView: 2,
    },
    1199: {
      slidesPerView: 3,
    },
    1350: {
      slidesPerView: 3,
    },
  }
}

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [selectedMember, setSelectedMember] = useState(null); // State for the popup
  const [openModal, setOpenModal] = useState(null); // State for modals

  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const handleClosePopup = () => {
    setSelectedMember(null);
  };

  
  // Define handleOpen and handleClose
  const handleOpen = (modalId) => setOpenModal(modalId);
  const handleClose = () => setOpenModal(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
const openPopup = () => setIsModalOpen(true);
const closePopup = () => setIsModalOpen(false);

  // Modal content
  const shortText1 = `(NTTP-I) is a peace research institute founded upon the history of decade-long engagement in Nepal's political transition as a credible and Track 1.5 peace process for mediation, facilitation, and dialogue among the political parties of Nepal since 2005. thaw stalemates and promote peaceful engagement among the political parties even in critical times in a low key and trusted setting.`;

  const fullText1 = `Nepal Transition to Peace Institute (NTTP-I) is a peace research institute founded upon the history of decade-long engagement in Nepal's political transition as a credible and Track 1.5 peace process for mediation, facilitation, and dialogue among the political parties of Nepal since 2005.

As a trusted forum for informal dialogues among the political parties, NTTP Forum has been functioning to resolve political standoffs, thaw stalemates and promote peaceful engagement among the political parties even in critical times in a low key and trusted setting.

NTTP-I has the capacity for local, sub-national, national, and regional dialogue process design and facilitation. Dialogues are supported by evidences generated from quality researches and analyses conducted by NTTP Peace Research Units as well as independent experts. Our research spans the issues concerning peace and conflict in Nepal with the mission to prevent and transform conflict.

Envisioning a wider role in Nepal's conflict transformation processes as a peace institute, NTTP Institute conducts evidence-based, non-partial and informal dialogues at the NTTP Forum. In addition to the NTTP Forum, NTTP-I conducts dialogues at thematic level of five thematic groups: NTTP Young Political Leaders Group, NTTP Women Group, NTTP Madhesh Group, NTTP Janajati Group and NTTP Dalit Group.`;

  const shortText2 = `Nepal Transition to Peace (NTTP) Initiative was implemented since August 2005 at the request of Nepali polity and with the support of USAID and the Swiss government. At the end of its first phase in 2009, the Ministry of Peace and Reconstruction and other stakeholders requested the USAID and the Swiss Government to continue to provide support to the peace building process.`;

  const fullText2 = `Nepal Transition to Peace (NTTP) Initiative was implemented as an informal peace initiative supported by various partners and friends of Nepal. A peace support project to this aim was initiated in August 2005 at the request of Nepali stakeholders with the support of USAID and the Swiss government.

At the end this project in 2009, the Ministry of Peace and Reconstruction and other stakeholders requested the USAID and the Swiss Government to continue to provide support to the peace building process. From 2009, The Asia Foundation (TAF) succeeded the Academy for Education and Development (AED) as the implementation partner for Nepal Peace Support Project (NPSP) until early 2015.

With the institutionalization of the NTTP program, NTTP Institute (NTTP-I) has been implementing the NTTP processes independently from February 2015. NTTP-I is currently implementing the USAID-supported Inclusive Dialogue for Political Transition (IDPT, 2015-18) project and Supporting Inclusive Dialogues (SID, 2015-17) project supported by the Swiss government.

Recognition, ownership and desire to carry on the legacy of the significant role played by the NTTP Forum in Nepal's political transition in the stakeholders led to the establishment of NTTP Institute in February 2015. The trusted convening ability of its senior facilitators, who were the official facilitators during the formal negotiations between the then governments and the CPN (Maoist) at the advent of the peace process, has enabled and entrusted the NTTP Forum to get recognition as a core institution for high level political dialogues aimed at conflict resolution and peace building.`;


  const committeeMembers = [
    {
      id: 'stella',
      name: 'Ms.Stella Tamang',
      shortDescription:
        'is immediate-past chairperson at NTTP-I. She is the Founding Chair and currently Advisor of the National...',
      image: 'assets/images/about/stella.png',
      fullDescription: `Mrs. Stella Tamang is immediate-past chairperson at NTTP-I. She is the Founding Chair and currently Advisor of the National Indigenous Women Federation of Nepal (NIWF). She is also the convener and Chairperson of the South Asia Indigenous Women Forum. An educationist by profession, Ms. Tamang has received numerous awards including the Presidential Award for Education and ASHOKA Fellowship for her innovative work for social change through Bikalpa Gyan Tatha Bikas Kendra.Committed to advancing the rights of women, indigenous peoples, and religious minorities, Ms. Tamang coordinates the NTTP Women Group.`,
    },
    {
      id: 'sagar',
      name: 'Mr.Sagar Prasai',
      shortDescription:
        'Is treasurer of NTTP Institute. He has worked for The Asia Foundation for more than 12 years includi...',
      image: 'assets/images/about/sagar.png',
      fullDescription: `Mr. Sagar Prasai Is treasurer of NTTP Institute. He has worked for The Asia Foundation for more than 12 years including four-and-half years in the capacity of country representative in India.  He has worked for UNDP as District Development Adviser for two years before studying Masters’ Degree in Urban Planning from University of Hawaii in USA and obtaining Doctor of Philosophy (PhD) Degree in Regional Planning from University of Illinois is USA. `,
    },
    {
      id: 'malik',
      name: 'Mr.Vidyadhar Malik',
      shortDescription:
        'a former Minister, is one of the NTTP facilitators and Executive Committee Member and Chairperson at NTTP-I. ...',
      image: 'assets/images/about/malik.jpg',
      fullDescription: `Mr.Vidyadhar Malik a former Minister, is one of the NTTP facilitators and Executive Committee Member and Chairperson at NTTP-I. With a former career as Peace Secretary and with expertise in trusted peace dialogue, conflict resolution and governance, he played a significant role in negotiating with the CPN-Maoist and later, holding the Constituent Assembly election as a Minister in the Election Government formed under the Chairmanship of Chief Justice Khilaraj Regmi in 2013. As a minister, he led negotiations with political parties and rebel groups for their active participation in Constituent Assembly-II election. Also a former advisor to the President, his civil service stints included Education Secretary and Finance Secretary. `,
    },
    {
      id: 'youba',
      name: 'Mr.Youba Raj Acharya',
      shortDescription:
        'is General Secretary at NTTP-I.  He has more than 19 years of professional experience in the field of professional experience in the field of media,...',
      image: 'assets/images/about/youba.png',
      fullDescription: `Mr. Youba Raj Acharya is General Secretary at NTTP-I.  He has more than 19 years of professional experience in the field of media, political analysis, peacebuilding, conflict transformation and electoral affairs. He has worked for 8 years in UN carrying out various responsibilities related to conflict prevention, peace building, political analysis and political coordination and dialogue facilitation. His experience includes Coordination and Liaison Officer with Peacebuilding and Recovery Unit, Political
Affairs Officer with UNMIN and media and outreach consultant with UNDP’s SKILLS Program. Before joining the UN, Mr Acharya was a journalist with leading media organizations.`,
    },
    {
      id: 'birendra',
      name: 'Mr.Birendra P Mishra',
      shortDescription:
        'is an eminent member of Nepal\'s civil society and a regular contributor of opinion pieces in major n...',
      image: 'assets/images/about/birendra.png',
      fullDescription: `Mr. Birendra P. Mishra is an eminent member of Nepal’s civil society and a regular contributor of opinion pieces in major national dailies. After two decades of experience as a Professor of Philosophy in Tribhuvan University, he was appointed as Commissioner of the Election Commission, Nepal (1994-2000) where he oversaw two parliamentary elections. He also served as the Coordinator of the National Monitoring Committee on Code of Conduct for Ceasefire (NMCC)formed to monitor the ceasefire arrangements between the Government of Nepal and the Maoists until the Comprehensive Peace Accord (CPA) was signed in November, 2006. Currently, Dr. Mishra is one of the core facilitators in NTTP Forum meetings and dialogues related to constitutional reforms and electoral system reforms. `,
    },
    {
      id: 'sajana',
      name: 'Ms.Sajana Maharjan',
      shortDescription:
        'is one of the founding members of NTTP-I and is currently one of the members of executive committee ...',
      image: 'assets/images/about/sajana.png',
      fullDescription: `Ms. Sajana Maharjan is one of the founding members of NTTP-I and is currently one of the members of executive committee of NTTP-I. She has served NTTP-I in the capacity of Executive Director until April 30, 2016. She has served as the Deputy Chief of Party for FHI360 implemented USAID Civil Society Mutual Accountability Project (CS:MAP). She has extensive experiences working with civil society groups, political actors, government officials, media and women both at national and sub-national levels. She has extensive experience of working in various sectors of peace and governance. `,
    },
    {
      id: 'nitika',
      name: 'Ms. Nitika Dhungana',
      shortDescription:
        'is one of the executive board members of the NTTP-I. Ms. Dhungana is an advocate at the Supreme Court...',
      image: 'assets/images/about/Nitika.png', // Placeholder, ensure image exists
      fullDescription: `Ms. Nitika Dhungana  is one of the executive board members of the NTTP-I. Ms. Dhungana is an advocate at the Supreme Court Bar Association of Nepal and social activist committed to empowering women and underserved communities. She champions women’s leadership and economic participation. She is also involved in various national and international initiatives promoting legal literacy, social justice, and community development. Through her work, Ms. Dhungana continues to inspire young leaders and contribute meaningfully to Nepal’s social transformation.`,
    },
    {
      id: 'tseten',
      name: 'Dr. Tseten Yonjen Tamang',
      shortDescription:
        'is one of the members of the Executive Board of the NTTP-I. She is a renowned Nepali general surgeon...',
      image: 'assets/images/about/tseten.png', // Placeholder, ensure image exists
      fullDescription: `Dr. Tseten Yonjen Tamang  is one of the members of the Executive Board of the NTTP-I. She is a renowned Nepali general surgeon specializing in hepatobiliary and liver transplant surgery. Alongside her medical career, she is deeply committed to social transformation through her work in girls’ education, women’s skill development, and peace-building. A strong advocate for inclusive development, she actively promotes access to health and education for marginalized communities.`,
    },
    // {
    //   id: 'padma',
    //   name: 'Late Padma Ratna Tuladhar',
    //   shortDescription:
    //     'was a senior NTTP facilitator, Executive Committee Member and former Chairperson at NTTP-I...',
    //   image: 'assets/images/about/padma.png', // Placeholder, ensure image exists
    //   fullDescription: `Late Padma Ratna Tuladhar (1940–2018) was a senior NTTP facilitator, Executive Committee Member and former Chairperson at NTTP-I. He was a distinguished Nepali politician, human rights defender, and advocate for indigenous rights. Elected to the Rastriya Panchayat in 1986, he boldly championed democracy from within the autocratic system. Following the 1990 democratic movement, he served as Minister for Labour and Health in the 1994 CPN-UML-led government. Tuladhar played a pivotal role in Nepal’s peace process, facilitating dialogue between the government and Maoist rebels during the civil war. His unwavering commitment to justice and inclusion made him a revered figure in Nepal’s democratic evolution.`,
    // },
  ];
  const internationalExperts = [
    {
      id: 'lederach',
      name: 'Professor John Paul Lederach',
      shortDescription:
        'is an international advisor to NTTP-I and a Professor of International Peace Building at the University of Notre Dame...',
      image: 'assets/images/about/lederach.jpg',
      fullDescription: `Professor John Paul Lederach is an international advisor to NTTP-I. He is a Professor of International Peace Building and Director of Peace Accords Matrix, Kroc Institute for International Peace Studies at University of Notre dame and Distinguished Scholar at Eastern Mennonite University, USA. Peace Accords Matrix is Kroc Institute’s unique source of comparable data on all comprehensive peace agreements that have been signed since 1989.
He was the founding director for the Center for Justice and Peacebuilding at Eastern Mennonite University in 1994. Widely known for his pioneering work in conflict transformation, he is involved in conciliation work in Colombia, the Philippines, and Nepal, in addition to countries in East and West Africa. He has helped design and conduct training programs in 25 countries across five continents. Prof Lederach is the author of 22 books, including When Blood and Bones Cry Out: Journeys Through the Soundscape of Healing and Reconciliation (University of Queensland Press, 2010), The Moral Imagination: The Art and Soul of Building Peace (Oxford University Press, 2005), The Journey Toward Reconciliation (Herald Press, 1999), Building Peace: Sustainable Reconciliation in Divided Societies (USIP, 1997), and Preparing for Peace: Confliction Transformation Across Cultures (Syracuse University Press, 1995). He holds a Ph.D. in Sociology from the University of Colorado (1988).
`,
    },
    {
      id: 'odendaal',
      name: 'Andries Odendaal',
      shortDescription:
        'is an international advisor to NTTP-I and Senior Associate at the Centre for Mediation in Africa, University of Pretoria...',
      image: 'assets/images/about/odendaal.jpg',
      fullDescription: `Andries Odendaal is an international advisor to NTTP-I. He is a Senior Associate at the Centre for Mediation in Africa at the University of Pretoria. He was a regional coordinator of the Western Cape Peace Committee in 1993–1994 during South Africa’s political transition, responsible for establishing and supporting local peace committees. During 1995–1998, he continued experimenting with local peace committees in post-apartheid South Africa and Lesotho under the auspices of the Centre for Conflict Resolution at the University of Cape Town. From 1999 to 2004, he coordinated projects of the Centre for Conflict Resolution in other African countries, and since 2005 provided freelancing support to peace-building initiatives of the UN and international organisations in Africa and elsewhere. Contracted by the Nepal Transition to Peace Initiative (NTTP) during 2006–2007, in collaboration with the Ministry of Peace and Reconstruction, he assisted with the conceptualization and implementation of local peace committees.
He has authored several articles on local peace building and was a Jennings Randolph Senior Fellow at the US Institute of Peace (USIP) in 2009–2010. His study on local peace committees, A Crucial Link: Local Peace Committees and National Peacebuilding, was published in 2013 by USIP.
`,
    },
    {
      id: 'spies',
      name: 'Chris Spies',
      shortDescription:
        'is a South African conflict transformation expert and international advisor to NTTP-I, supporting UNDP and Asia Foundation projects in Nepal...',
      image: 'assets/images/about/spies.jpg',
      fullDescription: `Chris Spies is an international advisor to NTTP-I. He is a Senior Research Fellow of the Institute for Justice and Reconciliation in South Africa and the lead trainer of the Swedish Folke Bernadotte Academy’s courses on dialogue and mediation. In Nepal, he is supporting the UNDP’s efforts to promote collaboration and dialogue as well as the community mediation project of the Asia Foundation. He is a South African conflict transformation practitioner with many years of experience in dialogue and mediation in South Africa and various international settings. He was the Regional Organiser of the National Peace Accord structure in the Western Cape and later served as the first full-time UN Peace and Development Advisor in Guyana.`,
    },
    {
      id: 'joshi',
      name: 'Dr. Madhav Joshi',
      shortDescription:
        'is an international advisor to NTTP-I and Associate Director at the Kroc Institute, University of Notre Dame...',
      image: 'assets/images/about/joshi.jpg',
      fullDescription: `Dr. Madhav Joshi is an international advisor to NTTP-I. He is Research Assistant Professor and Associate Director of the Peace Accords Matric (PAM) at the Kroc Institute of International Peace Studies, University of Notre Dame, USA. The PAM provides reliable and comparable online data on more than 30 recent peace accords and their implementation.
Dr. Joshi holds a Ph.D. from University of North Texas, USA (2010). His research focuses on civil wars, post-civil war transition and survival of democracy, post-civil war peacebuilding, the role of third parties in the conflict process, and the Maoist insurgency in Nepal. His articles have appeared in International Studies Quarterly, Social Science Quarterly, Democratization, the Journal of Peace Research, and Asian Survey.

`,
    },
  ];

  // Updated Data for Core Staff Members (reflecting deletions and additions)
  const coreStaffMembers = [
    {
      id: 'rajendra',
      name: 'Mr. Rajendra Bahadur Singh',
      shortDescription:
        'Singh is a dedicated development and peacebuilding professional with over 16 years of experience in governance, education,...',
      image: 'assets/images/about/rajendra.jpg', // Placeholder, ensure image exists
      fullDescription: `Mr. Rajendra Bahadur Singh is a dedicated development and peacebuilding professional with over 16 years of experience in governance, education, and community engagement across Nepal. He currently serves as Associate Director at NTTP-I, coordinating initiatives in dialogue, transitional justice, and political engagement. He also served as an Assistant Professor of Law at the Central Campus of Far-western University. Known for his commitment to grassroots empowerment and conflict transformation, Rajendra brings a strong academic and field-based background, with extensive experience working in remote regions of the country.`,
    },
    {
      id: 'baidyanath',
      name: 'Mr. Baidyanath Mishra',
      shortDescription:
        'is an experienced Admin and Finance Officer at NTTP-I, with over 10 years of expertise in accountancy and internal auditing...',
      image: 'assets/images/about/baidyanath.jpg', // Placeholder, ensure image exists
      fullDescription: `Mr. Baidyanath Mishra is an experienced Admin and Finance Officer at NTTP-I, with over 10 years of expertise in accountancy and internal auditing. Prior to this, he served in a similar role at Samjhauta Nepal, an NGO. Known for his precision, integrity, and strong financial management skills, Mr. Mishra has played a key role in ensuring transparent and efficient financial operations in the development sector.`,
    },
    {
      id: 'apsara',
      name: 'Ms. Apsara Dhakal',
      shortDescription:
        'is a proactive and energetic Operations Assistant at NTTP-I, known for her efficiency in managing organizational data and information...',
      image: 'assets/images/about/apsara.jpg', // Placeholder, ensure image exists
      fullDescription: `Ms. Apsara Dhakal is a proactive and energetic Operations Assistant at NTTP-I, known for her efficiency in managing organizational data and information. She actively supports program activities with strong coordination skills, contributing to the smooth execution of day-to-day operations within the organization.`,
    },
    // Supporting Staffs integrated into Core Staff for display purposes in the same carousel
    {
      id: 'sarita',
      name: 'Ms. Sarita Giri',
      shortDescription:
        'is an Office Assistant at NTTP-I. She manages office equipment, sets up meeting venues, and maintains the vehicle and library logbooks...',
      image: 'assets/images/about/sarita.jpg', // Placeholder, ensure image exists
      fullDescription: `Ms. Sarita Giri is an Office Assistant at NTTP-I. She manages office equipment, sets up meeting venues, and maintains the vehicle and library logbooks, ensuring smooth day-to-day operations with efficiency and dedication.`,
    },
    {
      id: 'driver',
      name: 'Mr. Office Vehicle Driver', // Changed name based on updated content
      shortDescription:
        'driver at NTTP-I. with more than 15 years of experience in driving four wheelers. He ....',
      image: 'assets/images/about/driver.jpg', // Placeholder, ensure image exists
      fullDescription: `Mr. Office Vehicle Driver at NTTP-I. with more than 15 years of experience in driving four wheelers. He associated with NTTP-I since 2025.`,
    },
  ];


  // Popup Component (moved inside Home for simplicity, can be external)
  const MemberPopup = ({ member, onClose }) => {
    if (!member) return null; // Don't render if no member is selected

    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000, // Ensure popup is on top of other content
          padding: '1rem', // Added padding for smaller screens
          boxSizing: 'border-box', // Ensure padding is included in element's total width and height
        }}
      >
        <div
          style={{
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            maxWidth: '600px',
            width: '90%', // Make it responsive
            maxHeight: '80vh', // Limit height to prevent overflow on small screens
            overflowY: 'auto', // Allow scrolling within the popup itself
            position: 'relative',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            textAlign: 'left',
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: '#4a4a4a',
            }}
          >
            &times;
          </button>
          <h3
            style={{
              fontSize: '1.8rem',
              marginBottom: '1rem',
              color: '#4a4a4a',
            }}
          >
            {member.name}
          </h3>
          <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#666', whiteSpace: 'pre-wrap' }}>
            {member.fullDescription}
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <Layout headerStyle={3} footerStyle={3} breadcrumbTitle='About Us'>
        {/*About One Start */}
        <section className='about-One'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-6'>
                <div
                  className='about-One__left  wow slideInLeft'
                  data-wow-delay='100ms'
                  data-wow-duration='2500ms'
                >
                  <div className='about-One__img-box'>
                    <div className='about-One__img'>
                      <img
                        src='assets/images/about/2.jpg'
                        alt=''
                      />
                    </div>
                    <div className='about-One__img-2'>
                      <img
                        src='assets/images/about/3.jpg'
                        alt=''
                      />
                    </div>
                    <div
                      className='about-One__provide-box wow zoomIn animated animated'
                      data-wow-delay='500ms'
                      data-wow-duration='2500ms'
                    >
                      <div className='about-One__provide-icon'>
                        <span className='icon-pet-care'></span>
                      </div>
                      <div className='about-One__provide-content'>
                        <div className='about-One__provide-count count-box'>
                          <h3 className='count-text'>3</h3>
                          <span>+</span>
                        </div>
                        <p className='about-One__provide-count-text'>
                          Years Providing Peace
                        </p>
                      </div>
                    </div>
                    <div className='about-One__shape-1'></div>
                  </div>
                </div>
              </div>
              <div className='col-xl-6'>
                <div
                  className='about-One__right wow fadeInRight'
                  data-wow-delay='300ms'
                >
                  <div className='section-title text-left sec-title-animation animation-style2'>
                    <div className='section-title__tagline-box'>
                      <span className='section-title__tagline'>About Us</span>
                    </div>
                    <h2 className='section-title__title title-animation'>
                      Nepal Transition
                      <br /> To Peace
                    </h2>
                  </div>
                  <div className='about-One__vission-mission'>
                    <div className='about-One__tab-box tabs-box'>
                      <ul className='tab-buttons clearfix list-unstyled'>
                        <li
                          className={
                            activeIndex == 1 ? "tab-btn active-btn" : "tab-btn"
                          }
                          onClick={() => handleOnClick(1)}
                        >
                          <span>Our Mission</span>
                        </li>
                        <li
                          className={
                            activeIndex == 2 ? "tab-btn active-btn" : "tab-btn"
                          }
                          onClick={() => handleOnClick(2)}
                        >
                          <span>Our Vision</span>
                        </li>
                        <li
                          className={
                            activeIndex == 3 ? "tab-btn active-btn" : "tab-btn"
                          }
                          onClick={() => handleOnClick(3)}
                        >
                          <span>Our Values</span>
                        </li>
                      </ul>
                      <div className='tabs-content'>
                        {/*tab*/}
                        <div
                          className={
                            activeIndex == 1
                              ? "tab fadeInUp animated show active-tab"
                              : "tab fadeInUp animated"
                          }
                        >
                          <div className='tabs-content__inner'>
                            <p>
                              To become a trusted and credible institute to prevent and transform conflict through inclusive dialogues and high quality resources. 
                            </p>
                          </div>
                        </div>
                        {/*tab*/}
                        {/*tab*/}
                        <div
                          className={
                            activeIndex == 2
                              ? "tab fadeInUp animated show active-tab"
                              : "tab fadeInUp animated"
                          }
                        >
                          <div className='tabs-content__inner'>
                            <p>
                              Address root causes of conflict in the country through promotion of dialogue at different layers as a tool for mitigating social, political and economic injustices; and promote inclusive democracy, peaceful coexistence with dignity for all citizens and good governance. 
                            </p>
                          </div>
                        </div>
                        {/*tab*/}
                        {/*tab*/}
                        <div
                          className={
                            activeIndex == 3
                              ? "tab fadeInUp animated show active-tab"
                              : "tab fadeInUp animated"
                          }
                        >
                          <div className='tabs-content__inner'>
                            <p>
                              NTTP highly values the legacy and contributions of the two legendary founding facilitators (Late D. N. Dhungana, and Late P. R. Tuladhar) and the capacity of present facilitators. NTTP-I aims to integrate their philosophy and principles into the values of the institute.
                            </p>
                          </div>
                        </div>
                        {/*tab*/}
                      </div>
                    </div>
                  </div>
                  <div className='about-One__btn-and-need-help'>
                    <div className='about-One__btn-box'>
                      <Link
                        href='donation-details'
                        className='about-One__btn thm-btn'
                      >
                        Contact Now
                        <span>
                          <i className='icon-arrow-right'></i>
                        </span>
                      </Link>
                    </div>
                    <div className='about-One__need-help'>
                      <div className='icon'>
                        <span className='icon-phone-call'></span>
                      </div>
                      <div className='content'>
                        <p>Need help?</p>
                        <h4>
                          <Link href='tel:3195550115'>
                            (977) 01-4595683/4598908
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/*Volunteer Carousel Page Start - Executive Committee*/}
        {/* backgroundColor: '#e8f1f5', marginBottom: '8rem', paddingBottom: '6rem', paddingTop: '5rem' */}
        <section className="volunteer-carousel-page" style={{
          backgroundColor: '#f1f0ec', paddingBottom: '6rem'
          , paddingTop: '5rem', marginBottom: '8rem'
        }}>
          <div className="container">
            {/* Header Section */}
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '3rem' }}>
              <p style={{
                fontSize: '0.9rem',
                color: '#5ba4d4',
                fontWeight: '600',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
                margin: '0 0 0.5rem 0'
              }}>Our Executive Committe</p>
              <h2 style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#4a4a4a',
                lineHeight: '1.2',
                margin: '0'
              }}>Meet The Dedicated Leaders <br /></h2>
            </div>

            <Swiper {...swiperOptions} className="volunteer-carousel-style owl-carousel owl-theme carousel-dot-style ">
              {committeeMembers.map((member) => (
                <SwiperSlide key={member.id}>
                  {/*Volunteer Page Single Start*/}
                  <div className="item">
                    <div className="team-one__single">
                      <div className="team-one__img-box">
                        <div className="team-one__img">
                          <img src={member.image} alt={member.name} />
                        </div>
                      </div>
                      <div className="team-one__content">
                        <div className="team-one__name-box">
                          {/* Changed Link to a clickable div for popup trigger */}
                          <h4 className="team-one__name">
                            <div
                              onClick={() => handleMemberClick(member)}
                              style={{ cursor: 'pointer' }}
                            >
                              {member.name}
                            </div>
                          </h4>
                          <p className="team-one__sub-title">{member.shortDescription}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Volunteer Page Single End*/}
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </section>
        {/*Volunteer Carousel Page End - Executive Committee*/}





        {/*detail One Start */}
        {/* Section Start */}
        <section className='donate-one'>
          <div className='container'>
            <div className='row'>
              {/* First Box */}
              <div
                className='col-xl-6 col-lg-6 wow slideInLeft'
                data-wow-delay='100ms'
                data-wow-duration='2500ms'
              >
                <div className='donate-one__single'>
                  <div
                    className='donate-one__single-bg'
                    style={{ backgroundImage: 'url(assets/images/about/flag.jpg)' }}
                  ></div>
                  <h3 className='donate-one__title'>
                    <Link href='donation-details'>Nepal Transition To Peace</Link>
                  </h3>
                  <p className='donate-one__text'>{shortText1}</p>
                  <div className='donate-one__btn-box'>
                    <button onClick={() => handleOpen('modal1')} className='donate-one__btn thm-btn'>
                      Read more <span><i className='icon-arrow-right'></i></span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Second Box */}
              <div
                className='col-xl-6 col-lg-6 wow slideInRight'
                data-wow-delay='100ms'
                data-wow-duration='2500ms'
              >
                <div className='donate-one__single donate-one__single-2'>
                  <div
                    className='donate-one__single-bg'
                    style={{ backgroundImage: 'url(assets/images/about/history.jpg)' }}
                  ></div>
                  <h3 className='donate-one__title'>
                    <Link href='become-volunteer'>Our History</Link>
                  </h3>
                  <p className='donate-one__text'>{shortText2}</p>
                  <div className='donate-one__btn-box'>
                    <button onClick={() => handleOpen('modal2')} className='donate-one__btn thm-btn'>
                      Read more <span><i className='icon-arrow-right'></i></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modal 1 */}
        {openModal === 'modal1' && (
          <div className='modal-overlay' onClick={handleClose}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
              <button className='close-btn' onClick={handleClose}>&times;</button>
              <h4>About NTTP Institute</h4>
              <p style={{ whiteSpace: 'pre-line' }}>{fullText1}</p>
            </div>
          </div>
        )}

        {/* Modal 2 */}
        {openModal === 'modal2' && (
          <div className='modal-overlay' onClick={handleClose}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
              <button className='close-btn' onClick={handleClose}>&times;</button>
              <h4>Our History</h4>
              <p style={{ whiteSpace: 'pre-line' }}>{fullText2}</p>
            </div>
          </div>
        )}

        {/* Styles */}
        <style jsx>{`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }
  .modal-content {
    background: #fff;
    padding: 2rem;
    max-width: 700px;
    width: 90%;
    border-radius: 10px;
    position: relative;
    max-height: 80vh;
    overflow-y: auto;
  }
  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
`}</style>

        {/*detail One End */}

        {/*Volunteer Carousel Page Start - International Experts*/}
        <section className="volunteer-carousel-page" style={{ backgroundColor: '#e8f1f5', paddingBottom: '6rem', paddingTop: '5rem' }}>
          <div className="container">
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '3rem' }}>
              <p style={{
                fontSize: '0.9rem',
                color: '#5ba4d4',
                fontWeight: '600',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '0.5rem'
              }}>International Experts</p>
              <h2 style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#4a4a4a',
                lineHeight: '1.2',
                margin: '0'
              }}>Global Expertise Guiding Our Mission</h2>
            </div>

            <Swiper {...swiperOptions} className="volunteer-carousel-style owl-carousel owl-theme carousel-dot-style">
              {internationalExperts.map((expert) => (
                <SwiperSlide key={expert.id}>
                  <div className="item">
                    <div className="team-one__single">
                      <div className="team-one__img-box">
                        <div className="team-one__img">
                          <img src={expert.image} alt={expert.name} />
                        </div>
                      </div>
                      <div className="team-one__content">
                        <div className="team-one__name-box">
                          <h4 className="team-one__name">
                            <div
                              onClick={() => handleMemberClick(expert)}
                              style={{ cursor: 'pointer' }}
                            >
                              {expert.name}
                            </div>
                          </h4>
                          <p className="team-one__sub-title">{expert.shortDescription}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        {/*Volunteer Carousel Page End - International Experts*/}

        {/* Who We Are Start */}
<section className='who-we-are' style={{ paddingBottom: '5rem', paddingTop: '5rem' }}>
  <div className='who-we-are__shape-3 float-bob-y'>
    <img src='assets/images/shapes/who-we-are-shape-3.png' alt='' />
  </div>
  <div className='who-we-are__shape-4 float-bob-x'>
    <img src='assets/images/shapes/who-we-are-shape-4.png' alt='' />
  </div>
  <div className='container'>
    <div className='row'>
      <div className='col-xl-6 wow fadeInLeft' data-wow-delay='300ms'>
        <div className='who-we-are__left'>
          <div className='section-title text-left sec-title-animation animation-style2'>
            <div className='section-title__tagline-box'>
              <span className='section-title__tagline'>Who We Are</span>
            </div>
            <h2 className='section-title__title title-animation'>
              A Trusted Peace Dialogue Platform
            </h2>
          </div>
          <p className='who-we-are__text'>
            The Nepal Transition to Peace Institute (NTTP-I) is a trusted peace research and dialogue institute dedicated to fostering peaceful political engagement in Nepal. Since 2005, we have facilitated informal, evidence-based dialogues among political parties and diverse groups to resolve conflicts and support Nepal’s transition to peace.
          </p>
          <div className='who-we-are__btn-box'>
            <button onClick={openPopup} className='who-we-are__btn thm-btn'>
              Read more <span><i className='icon-arrow-right'></i></span>
            </button>
          </div>
        </div>
      </div>
      <div className='col-xl-6 wow slideInRight' data-wow-delay='100ms' data-wow-duration='2500ms'>
        <div className='who-we-are__right'>
          <div className='who-we-are__img-box'>
            <div className='who-we-are__img'>
              <img src='assets/images/slider/banner_image_3.png' alt='' />
            </div>
            <div className='who-we-are__img-2'>
              <img src='assets/images/slider/banner_img_2.png' alt='' />
            </div>
            <div className='who-we-are__shape-1 img-bounce'></div>
            <div className='who-we-are__shape-2'></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Who We Are End */}

{/* Modal Popup */}
{isModalOpen && (
  <div className='modal-overlay' onClick={closePopup}>
    <div className='modal-content' onClick={(e) => e.stopPropagation()}>
      <button className='close-btn' onClick={closePopup}>&times;</button>
      <h2>About NTTP-I</h2>
      <p>
        Nepal Transition to Peace Institute (NTTP-I) is a peace institute with trusted space for dialogue among multi-stakeholders for conflict resolution and specializes in research work to generate evidence-based and informed choices for peacebuilders in Nepal. It was founded as a peace initiative with supports from various friends of Nepal in 2005 when Maoist’s armed struggle was at peak and a negotiated peaceful settlement was sought by all stakeholders. It has a history of decade-long engagement in Nepal’s political transition as a credible track 1.5 dialogue - space for mediation, facilitation, and quiet deliberations (in a Chatham House setting) among the rebel groups and political forces of Nepal before this peace initiative was transformed into the Institute (NTTP-I) in 2015 through its charter.
        <br /><br />
        NTTP-I continues to run the forum for dialogue at national level, named NTTP Forum, which was initiated in 2005. This is a trusted forum for informal dialogues among the political forces and actively supports resolving political standoffs and constitutional stalemates while promoting peaceful engagement among the political parties in a quiet trusted setting.
        <br /><br />
        NTTP-I has the capacity to sense emerging conflicts and design processes for sub-national and national dialogues and facilitation to resolve such conflicts. It specializes in conflict sensitivity analyses, scenario building exercises and research activities to raise alarms and seek evidence-based choices to mitigate emerging conflicts at both national and sub-national levels. Dialogues are supported by evidence generated from quality research and analyses conducted by NTTP Peace Research Units as well as independent experts.
        <br /><br />
        In addition to the NTTP Forum, NTTP-I conducts dialogues at thematic level of five thematic groups: NTTP Young Political Leaders Group, NTTP Women Group, NTTP Madhesh Group, NTTP Janajati Group and NTTP Dalit Group.
      </p>
    </div>
  </div>
)}

{/* Modal CSS */}
<style jsx>{`
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    overflow-y: auto;
    padding: 2rem;
  }
  .modal-content {
    background: white;
    padding: 2rem 2.5rem;
    border-radius: 10px;
    max-width: 900px;
    width: 100%;
    color: #333;
    font-family: 'Georgia', serif;
    position: relative;
    max-height: 90vh;
    overflow-y: auto;
  }
  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
  }
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1rem;
    line-height: 1.7;
  }
`}</style>

        {/*Who We Are End */}

        {/*Volunteer Carousel Page Start - Core Staff*/}
        <section className="volunteer-carousel-page" style={{
          backgroundColor: '#ffff',

          paddingBottom: '6rem',
          paddingTop: '5rem'
        }}>
          <div className="container">
            {/* Header Section */}
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '3rem' }}>
              <p style={{
                fontSize: '0.9rem',
                color: '#5ba4d4',
                fontWeight: '600',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
                margin: '0 0 0.5rem 0'
              }}>Core Staffs </p>
              <h2 style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#4a4a4a',
                lineHeight: '1.2',
                margin: '0'
              }}>Dedicated Team Behind the Vision <br /></h2>
            </div>

            <Swiper {...swiperOptions} className="volunteer-carousel-style owl-carousel owl-theme carousel-dot-style ">
              {coreStaffMembers.map((member) => (
                <SwiperSlide key={member.id}>
                  {/*Volunteer Page Single Start*/}
                  <div className="item">
                    <div className="team-one__single">
                      <div className="team-one__img-box">
                        <div className="team-one__img">
                          <img src={member.image} alt={member.name} />
                        </div>
                      </div>
                      <div className="team-one__content">
                        <div className="team-one__name-box">
                          {/* Changed Link to a clickable div for popup trigger */}
                          <h4 className="team-one__name">
                            <div
                              onClick={() => handleMemberClick(member)}
                              style={{ cursor: 'pointer' }}
                            >
                              {member.name}
                            </div>
                          </h4>
                          <p className="team-one__sub-title">{member.shortDescription}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Volunteer Page Single End*/}
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </section>
        {/*Volunteer Carousel Page End - Core Staff*/}

        {/* Render the Popup component here */}
        <MemberPopup member={selectedMember} onClose={handleClosePopup} />

      </Layout>
    </>
  );
}