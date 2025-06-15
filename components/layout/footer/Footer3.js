import Link from "next/link";

export default function Footer3() {
  return (
    <>
      <footer className='site-footer-two'>
        <div className='site-footer-two__shape float-bob-y-2'>
          <img src='assets/images/shapes/site-footer-two-shape.png' alt='' />
        </div>
        <div className='site-footer-two__top'>
          <div className='container'>
            <div className='site-footer-two__top-inner'>
              <div className='site-footer-two__top-logo'>
                <Link href='#'>
                  <img src='assets/images/logos/nttp_logo.png' alt='' />
                </Link>
              </div>
              <div className='row'>
                <div
                  className='col-xl-5 col-lg-6 col-md-6 wow fadeInUp'
                  data-wow-delay='100ms'
                >
                  <div className='footer-widget-two__about'>
                    <h2 className='footer-widget-two__about-title'>
                      Nepal Transition To Peace
                    </h2>
                    <p className='footer-widget-two__about-text'>
                      An organization dedicated to
                      <br /> facilitate and mediate peace through various means
                    </p>
                    <div className='footer-widget-two__btn-box'>
                      <Link
                        href='/'
                        className='footer-widget-two__btn thm-btn'
                      >
                        Contact Now
                        <span>
                          <i className='icon-arrow-right'></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className='col-xl-2 col-lg-6 col-md-6 wow fadeInUp'
                  data-wow-delay='200ms'
                >
                  <div className='footer-widget-two__services'>
                    <h4 className='footer-widget-two__title'>Donors</h4>
                    <ul className='footer-widget-two__services-list list-unstyled'>
                      <li>
                        <Link href='about'>UNDP Nepal</Link>
                      </li>
                      <li>
                        <Link href='about'>
                          US Agency for International Development/Nepal
                        </Link>
                      </li>
                      <li>
                        <Link href='about'>
                          Embassy of Switzerland in Nepal
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className='col-xl-2 col-lg-6 col-md-6 wow fadeInUp'
                  data-wow-delay='300ms'
                >
                  <div className='footer-widget-two__links'>
                    <h4 className='footer-widget-two__title'>Links</h4>
                    <ul className='footer-widget-two__services-list list-unstyled'>
                      <li>
                        <Link href='about'>Food to individuals</Link>
                      </li>
                      <li>
                        <Link href='about'>Temporary housing</Link>
                      </li>
                      <li>
                        <Link href='about'>Local shelters</Link>
                      </li>
                      <li>
                        <Link href='about'>Natural disasters</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className='col-xl-3 col-lg-6 col-md-6 wow fadeInUp'
                  data-wow-delay='400ms'
                >
                  <div className='footer-widget-two__contact'>
                    <h3 className='footer-widget-two__title'>Contact Info</h3>
                    <ul className='footer-widget-two__contact-list list-unstyled'>
                      <li>
                        <div className='icon'>
                          <span className='icon-call'></span>
                        </div>
                        <p>
                          <Link href='tel:01-4595683'>
                            +977 01-4595683/4598908
                          </Link>
                        </p>
                      </li>
                      <li>
                        <div className='icon'>
                          <span className='icon-envelope'></span>
                        </div>
                        <p>
                          <Link href='mailto:contact@nttpinstitute.org.np'>
                            contact@nttpinstitute.org.np
                          </Link>
                        </p>
                      </li>
                    </ul>
                    <div className='site-footer-two__social'>
                      <Link href='#'>
                        <i className='icon-facebook'></i>
                      </Link>
                      <Link href='#'>
                        <i className='icon-twitter'></i>
                      </Link>
                      <Link href='#'>
                        <i className='icon-instagram'></i>
                      </Link>
                      <Link href='#'>
                        <i className='icon-pintarest'></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='site-footer-two__bottom'>
            <div className='container'>
              <div className='row'>
                <div className='col-xl-12'>
                  <div className='site-footer-two__bottom-inner'>
                    <div className='site-footer-two__copyright'>
                      <p className='site-footer-two__copyright-text'>
                        Copywright 2024 by <Link href='#'>Dokodo</Link>. All
                        Rights Reserved.
                      </p>
                    </div>
                    <div className='site-footer-two__bottom-menu-box'>
                      <ul className='list-unstyled site-footer-two__bottom-menu'>
                        <li>
                          <Link href='about'>Privacy Policy</Link>
                        </li>
                        <li>
                          <Link href='about'>Terms of Service</Link>
                        </li>
                        <li>
                          <Link href='about'>Cookies Settings</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
