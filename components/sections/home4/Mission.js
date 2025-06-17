import Link from "next/link";

export default function Mission() {
  return (
    <>
      {/*Mission One Start */}
      <section className='mission-one'>
        <div className='container'>
          <div className='section-title text-center sec-title-animation animation-style2'>
            <div className='section-title__tagline-box'>
              <span className='section-title__tagline'>Forum</span>
            </div>
            <h2 className='section-title__title title-animation'>Our Forums</h2>
          </div>

          <div className='row'>
            {/* Single Mission One Start */}
            <div className='col-xl-4'>
              <div className='single-mission-one'>
                <div className='icon-box'>
                  <div className='inner-box'>
                    <i className='icon-user'></i>
                  </div>
                </div>
                <div className='content-box'>
                  <div className='text'>
                    <h3>NTTP Young Political Leader Group</h3>
                    <p>
                      Are you asking about charities in general, how they
                      function, or perhaps how to support...
                    </p>
                  </div>
                  <div className='btn-box'>
                    <Link href='project-details' className='thm-btn'>
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Mission One End */}
            {/* Single Mission One Start */}
            <div className='col-xl-4'>
              <div className='single-mission-one'>
                <div className='icon-box'>
                  <div className='inner-box'>
                    <i className='icon-love'></i>
                  </div>
                </div>
                <div className='content-box'>
                  <div className='text'>
                    <h3>NTTP Women Group</h3>
                    <p>
                      Are you asking about charities in general, how they
                      function, or perhaps how to support...
                    </p>
                  </div>
                  <div className='btn-box'>
                    <Link href='project-details' className='thm-btn'>
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Mission One End */}
            {/* Single Mission One Start */}
            <div className='col-xl-4'>
              <div className='single-mission-one'>
                <div className='icon-box'>
                  <div className='inner-box'>
                    <i className='icon-pin'></i>
                  </div>
                </div>
                <div className='content-box'>
                  <div className='text'>
                    <h3>NTTP Madhesh Group</h3>
                    <p>
                      Are you asking about charities in general, how they
                      function, or perhaps how to support...
                    </p>
                  </div>
                  <div className='btn-box'>
                    <Link href='project-details' className='thm-btn'>
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Mission One End */}
            {/* Single Mission One Start */}
            <div className='col-xl-4'>
              <div className='single-mission-one'>
                <div className='icon-box'>
                  <div className='inner-box'>
                    <i className='icon-help'></i>
                  </div>
                </div>
                <div className='content-box'>
                  <div className='text'>
                    <h3>NTTP Janjati</h3>
                    <p>
                      Are you asking about charities in general, how they
                      function, or perhaps how to support...
                    </p>
                  </div>
                  <div className='btn-box'>
                    <Link href='project-details' className='thm-btn'>
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Mission One End */}
            {/* Single Mission One Start */}
            <div className='col-xl-4'>
              <div className='single-mission-one'>
                <div className='icon-box'>
                  <div className='inner-box'>
                    <i className='icon-hand'></i>
                  </div>
                </div>
                <div className='content-box'>
                  <div className='text'>
                    <h3>NTTP Dalit Group</h3>
                    <p>
                      Are you asking about charities in general, how they
                      function, or perhaps how to support...
                    </p>
                  </div>
                  <div className='btn-box'>
                    <Link href='project-details' className='thm-btn'>
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Mission One End */}
            {/* Single Mission One Start */}
            <div className='col-xl-4'>
              <div className='single-mission-one'>
                <div className='icon-box'>
                  <div className='inner-box'>
                    <i className='icon-comment'></i>
                  </div>
                </div>
                <div className='content-box'>
                  <div className='text'>
                    <h3>Sub-national Dialouge Group</h3>
                    <p>
                      Are you asking about charities in general, how they
                      function, or perhaps how to support...
                    </p>
                  </div>
                  <div className='btn-box'>
                    <Link href='project-details' className='thm-btn'>
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Mission One End */}
{/* <div className='col-xl-4'>
  <div className='single-mission-one'>
    <div className='icon-box'>
      <div className='inner-box' style={{overflow: 'hidden'}}>
        <img 
          src='/assets/images/backgroud/multiculture.jpg' 
          alt='Sub-national Dialogue Group'
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '8px',
            transition: 'transform 0.3s ease'
          }}
        />
      </div>
    </div>
    <div className='content-box'>
      <div className='text'>
        <h3>Sub-national Dialouge Group</h3>
        <p>
          Are you asking about charities in general, how they
          function, or perhaps how to support...
        </p>
      </div>
      <div className='btn-box'>
        <Link href='project-details' className='thm-btn'>
          Read More
        </Link>
      </div>
    </div>
  </div>
</div> */}
            
          </div>
        </div>
      </section>
      {/*Mission One End */}
    </>
  );
}
