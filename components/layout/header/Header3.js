import Menu from "../Menu"
import Link from "next/link"
import MobileMenu from "../MobileMenu"
export default function Header3({ scroll, handlePopup, handleMobileMenu  }) {
    return (
        <>
        

        <header className="main-header-three">
            <nav className="main-menu main-menu-three">
                <div className="main-menu-three__wrapper">
                    <div className="container">
                        <div className="main-menu-three__wrapper-inner">
                            <div className="main-menu-three__left">
                                <div className="main-menu-three__logo">
                                    <Link href="/"><img src="assets/images/resources/logo-1.png" alt=""/></Link>
                                </div>
                            </div>
                            <div className="main-menu-three__main-menu-box">
                                <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                <Menu />
                            </div>
                            <div className="main-menu-three__right">
                                <div className="main-menu-three__user-box">
                                    <Link href="#" className="main-menu-three__user icon-user"></Link>
                                </div>
                                <div className="main-menu-three__search-box">
                                    <Link href="#" className="main-menu-three__search search-toggler icon-search" onClick={handlePopup}></Link>
                                </div>
                                <div className="main-menu-three__btn-box">
                                    <Link href="donation-details" className="main-menu-three__btn thm-btn">Donate
                                        Now<span><i className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <div className={`stricky-header stricked-menu main-menu main-menu-three ${scroll ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">
                <nav className="main-menu main-menu-three">
                    <div className="main-menu-three__wrapper">
                        <div className="container">
                            <div className="main-menu-three__wrapper-inner">
                                <div className="main-menu-three__left">
                                    <div className="main-menu-three__logo">
                                        <Link href="/"><img src="assets/images/resources/logo-1.png" alt=""/></Link>
                                    </div>
                                </div>
                                <div className="main-menu-three__main-menu-box">
                                    <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                    <Menu />
                                </div>
                                <div className="main-menu-three__right">
                                    <div className="main-menu-three__user-box">
                                        <Link href="#" className="main-menu-three__user icon-user"></Link>
                                    </div>
                                    <div className="main-menu-three__search-box">
                                        <Link href="#" className="main-menu-three__search search-toggler icon-search" onClick={handlePopup}></Link>
                                    </div>
                                    <div className="main-menu-three__btn-box">
                                        <Link href="donation-details" className="main-menu-three__btn thm-btn">Donate
                                            Now<span><i className="icon-arrow-right"></i></span></Link>
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
