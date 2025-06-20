import Link from "next/link";
export default function Blog() {
  return (
    <>
      {/*Blog One Start */}
      <section className='blog-one blog-one--style2'>
        <div className='container'>
          <div className='section-title text-center sec-title-animation animation-style1'>
            <div className='section-title__tagline-box'>
              <span className='section-title__tagline'>News And Blogs</span>
            </div>
            <h2 className='section-title__title title-animation'>
              Read our news and blogs
            </h2>
          </div>
          <div className='row'>
            {/*Blog One Single Start*/}
            <div
              className='col-xl-4 col-lg-4 wow fadeInLeft'
              data-wow-delay='100ms'
            >
              <div className='blog-one__single'>
                <div className='blog-one__img-box'>
                  <div className='blog-one__img'>
                    <img src='assets/images/blog/blogpic1.png' alt='' />
                  </div>
                  <div className='blog-one__date'>
                    <p>
                      20
                      <span>
                        <br />
                        feb
                      </span>
                    </p>
                  </div>
                </div>
                <div className='blog-one__content'>
                  <h4 className='blog-one__title'>
                    <Link href='blog-details'>
                      Our Goal is to provide and maintain peace in the country
                    </Link>
                  </h4>
                  <div className='blog-one__btn-box'>
                    <Link href='blog-details' className='blog-one__btn thm-btn'>
                      rEAD mORe
                      <span>
                        <i className='icon-arrow-right'></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*Blog One Single End*/}
            {/*Blog One Single Start*/}
            <div
              className='col-xl-4 col-lg-4 wow fadeInUp'
              data-wow-delay='200ms'
            >
              <div className='blog-one__single'>
                <div className='blog-one__img-box'>
                  <div className='blog-one__img'>
                    <img src='assets/images/blog/blogpic2.png' alt='' />
                  </div>
                  <div className='blog-one__date'>
                    <p>
                      15
                      <span>
                        <br />
                        Nov
                      </span>
                    </p>
                  </div>
                </div>
                <div className='blog-one__content'>
                  <h4 className='blog-one__title'>
                    <Link href='blog-details'>
                      Our Goal is to provide and maintain peace in the country
                    </Link>
                  </h4>
                  <div className='blog-one__btn-box'>
                    <Link href='blog-details' className='blog-one__btn thm-btn'>
                      rEAD mORe
                      <span>
                        <i className='icon-arrow-right'></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*Blog One Single End*/}
            {/*Blog One Single Start*/}
            <div
              className='col-xl-4 col-lg-4 wow fadeInRight'
              data-wow-delay='300ms'
            >
              <div className='blog-one__single'>
                <div className='blog-one__img-box'>
                  <div className='blog-one__img'>
                    <img src='assets/images/blog/blogpic1.png' alt='' />
                  </div>
                  <div className='blog-one__date'>
                    <p>
                      25
                      <span>
                        <br />
                        Jun
                      </span>
                    </p>
                  </div>
                </div>
                <div className='blog-one__content'>
                  <h4 className='blog-one__title'>
                    <Link href='blog-details'>
                      Our Goal is to provide and maintain peace in the country
                    </Link>
                  </h4>
                  <div className='blog-one__btn-box'>
                    <Link href='blog-details' className='blog-one__btn thm-btn'>
                      rEAD mORe
                      <span>
                        <i className='icon-arrow-right'></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*Blog One Single End*/}
          </div>
        </div>
      </section>
      {/*Blog One End */}
    </>
  );
}
