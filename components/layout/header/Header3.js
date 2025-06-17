// import Menu from "../Menu";
// import Link from "next/link";
// import MobileMenu from "../MobileMenu";
// export default function Header3({ scroll, handlePopup, handleMobileMenu }) {
//   return (
//     <>
//       <header className='main-header-three'>
//         <nav className='main-menu main-menu-three'>
//           <div className='main-menu-three__wrapper'>
//             <div className='container'>
//               <div className='main-menu-three__wrapper-inner'>
//                 <div className='main-menu-three__left'>
//                   <div className='main-menu-three__logo'>
//                     <Link href='/'>
//                       <img
//                         src='assets/images/logos/nttp_logo.png'
//                         alt=''
//                         height={80}
//                       />
//                     </Link>
//                   </div>
//                 </div>
//                 <div className='main-menu-three__main-menu-box'>
//                   <Link
//                     href='#'
//                     className='mobile-nav__toggler'
//                     onClick={handleMobileMenu}
//                   >
//                     <i className='fa fa-bars'></i>
//                   </Link>
//                   <Menu />
//                 </div>
//                 <div className='main-menu-three__right'>
//                   {/* <div className='main-menu-three__user-box'>
//                     <Link
//                       href='#'
//                       className='main-menu-three__user icon-user'
//                     ></Link>
//                   </div> */}
//                   <div className='main-menu-three__search-box'>
//                     <Link
//                       href='#'
//                       className='main-menu-three__search search-toggler icon-search'
//                       onClick={handlePopup}
//                     ></Link>
//                   </div>
//                   <div className='main-menu-three__btn-box'>
//                     <Link
//                       href='/contact'
//                       className='main-menu-three__btn thm-btn'
//                     >
//                       Contact Now
//                       <span>
//                         <i className='icon-arrow-right'></i>
//                       </span>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>

//       <div
//         className={`stricky-header stricked-menu main-menu main-menu-three ${
//           scroll ? "stricky-fixed" : ""
//         }`}
//       >
//         <div className='sticky-header__content'>
//           <nav className='main-menu main-menu-three'>
//             <div className='main-menu-three__wrapper'>
//               <div className='container'>
//                 <div className='main-menu-three__wrapper-inner'>
//                   <div className='main-menu-three__left'>
//                     <div className='main-menu-three__logo'>
//                       <Link href='/'>
//                         <img
//                           src='assets/images/logos/nttp_logo.png'
//                           alt=''
//                           height={80}
//                         />
//                       </Link>
//                     </div>
//                   </div>
//                   <div className='main-menu-three__main-menu-box'>
//                     <Link
//                       href='#'
//                       className='mobile-nav__toggler'
//                       onClick={handleMobileMenu}
//                     >
//                       <i className='fa fa-bars'></i>
//                     </Link>
//                     <Menu />
//                   </div>
//                   <div className='main-menu-three__right'>
//                     {/* <div className='main-menu-three__user-box'>
//                       <Link
//                         href='#'
//                         className='main-menu-three__user icon-user'
//                       ></Link>
//                     </div> */}
//                     <div className='main-menu-three__search-box'>
//                       <Link
//                         href='#'
//                         className='main-menu-three__search search-toggler icon-search'
//                         onClick={handlePopup}
//                       ></Link>
//                     </div>
//                     <div className='main-menu-three__btn-box'>
//                       <Link
//                         href='/contact'
//                         className='main-menu-three__btn thm-btn'
//                       >
//                         Contact Now
//                         <span>
//                           <i className='icon-arrow-right'></i>
//                         </span>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </nav>
//         </div>
//         {/*.sticky-header__content */}
//       </div>
//       {/*.stricky-header */}
//       <MobileMenu handleMobileMenu={handleMobileMenu} />
//     </>
//   );
// }


import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, handlePopup, handleMobileMenu }) {
    return (
        <>
            
        <header className="main-header">
            <div className="main-menu__top">
                <div className="container">
                    <div className="main-menu__top-inner">
                        <ul className="list-unstyled main-menu__contact-list">
                            <li>
                                <div className="icon">
                                    <i className="icon-envelope"></i>
                                </div>
                                <div className="text">
                                    <p><Link href="mailto:example@gamil.com">contact@nttpinstitute.org.np</Link>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="icon-pin-two"></i>
                                </div>
                                <div className="text">
                                    <p>Battisputali, Kathmandu</p>
                                </div>
                            </li>
                        </ul>
                        <div className="main-menu__top-right">
                            <div className="main-menu__social-box">
                                <p className="main-menu__social-title">Follow Us On:</p>
                                <div className="main-menu__social">
                                    <Link href="#"><i className="icon-facebook"></i></Link>
                                    <Link href="#"><i className="icon-twitter"></i></Link>
                                    <Link href="#"><i className="icon-link-in"></i></Link>
                                    <Link href="#"><i className="icon-instagram"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="main-menu">
                <div className="main-menu__wrapper">
                    <div className="container">
                        <div className="main-menu__wrapper-inner">
                            <div className="main-menu__left">
                                <div className="main-menu__logo">
    <Link href="/">
        <img 
            src="assets/images/logos/nttp_logo.png" 
            alt="NTTP Logo"
            style={{
                height: '50px',
                width: 'auto',
                maxWidth: '180px'
            }}
        />
    </Link>
</div>
                                <div className="main-menu__main-menu-box">
                                    <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                    <Menu />
                                </div>
                            </div>
                            <div className="main-menu__right">
                                <div className="main-menu__call">
                                    <div className="main-menu__call-icon">
                                        <i className="icon-call"></i>
                                    </div>
                                    <div className="main-menu__call-content">
                                        <p className="main-menu__call-sub-title">Call Anytime</p>
                                        <h5 className="main-menu__call-number"><Link href="tel:9288006780">(+977) 01-4595683</Link></h5>
                                    </div>
                                </div>
                                <div className="main-menu__search-box">
                                    <Link href="#" className="main-menu__search search-toggler icon-search" onClick={handlePopup}></Link>
                                </div>
                                <div className="main-menu__btn-box">
                                    <Link href="/contact" className="main-menu__btn thm-btn">Contact Now<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <div className={`stricky-header stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">
                <nav className="main-menu">
                    <div className="main-menu__wrapper">
                        <div className="container">
                            <div className="main-menu__wrapper-inner">
                                <div className="main-menu__left">
                                    <div className="main-menu__logo">
                                          <Link href="/">
        <img 
            src="assets/images/logos/nttp_logo.png" 
            alt="NTTP Logo"
            style={{
                height: '50px',
                width: 'auto',
                maxWidth: '180px'
            }}
        />
    </Link>
                                    </div>
                                    <div className="main-menu__main-menu-box">
                                        <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                        <Menu />
                                    </div>
                                </div>
                                <div className="main-menu__right">
                                    <div className="main-menu__call">
                                        <div className="main-menu__call-icon">
                                            <i className="icon-call"></i>
                                        </div>
                                        <div className="main-menu__call-content">
                                            <p className="main-menu__call-sub-title">Call Anytime</p>
                                            <h5 className="main-menu__call-number"><Link href="tel:9288006780">+977 01-4595683</Link></h5>
                                        </div>
                                    </div>
                                    <div className="main-menu__search-box">
                                        <Link href="#" className="main-menu__search search-toggler icon-search" onClick={handlePopup}></Link>
                                    </div>
                                    <div className="main-menu__btn-box">
                                        <Link href="contact" className="main-menu__btn thm-btn">Contact Now<span><i
                                                    className="icon-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>{/*.sticky-header__content */}
        </div>{/*.stricky-header */}
        <MobileMenu handleMobileMenu={handleMobileMenu} />

        </>
    )
}
