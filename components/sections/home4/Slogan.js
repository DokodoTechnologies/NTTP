"use client";
import Link from "next/link";

export default function Slogan() {
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
              <h2>Message for Peace</h2>
            </div>
            <div className='text-box'>
              <p>
                Let us create the social space that brings truth, mercy,
                justice, and peace together within a conflicted group or
                setting. Then energies are crystallized that create deeper
                understanding and unexpected new paths, leading toward
                restoration and reconciliation.
              </p>
            </div>
            <div className='btn-box'>
              <Link href='index4' className='thm-btn'>
                Learn More
                <span>
                  <i className='icon-arrow-right'></i>
                </span>
              </Link>
              {/* <Link href='index4' className='thm-btn'>
                larn More
                <span>
                  <i className='icon-arrow-right'></i>
                </span>
              </Link> */}
            </div>
          </div>
        </div>
      </section>
      {/*Slogan One End */}
    </>
  );
}
