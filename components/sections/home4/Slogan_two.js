"use client";
import Link from "next/link";

export default function Slogan_two() {
  return (
    <>
      {/*Slogan One Start */}
      <section className='slogan-one'>
        <div
          className='slogan-one__bg jarallax'
          data-jarallax
          data-speed='0.3'
          data-imgPosition='100% 100%'
          style={{
            backgroundImage: " url(assets/images/resources/slogan-v1-1.jpg)",
          }}
        ></div>
        <div className='container'>
          <div className='slogan-one__content text-center'>
            <div className='title-box'>
              <h2>Message from Chairman</h2>
            </div>
            <div className='text-box'>
              <p>
                Namaskar ! <br />
It gives me great pleasure to welcome you to the website of the Nepal Transition to Peace
Institute (NTTP-I).
                It gives me great pleasure to welcome you to the website of the Nepal Transition to Peace
Institute (NTTP-I).
              </p>
            </div>
            <div className='btn-box'>
              <Link href='index4' className='thm-btn'>
                learn More
                <span>
                  <i className='icon-arrow-right'></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*Slogan One End */}
    </>
  );
}
