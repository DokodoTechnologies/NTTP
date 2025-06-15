"use client";
import Link from "next/link";
import { useState } from "react";

export default function Donation() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      {/*Donation One Start */}
      <section className='donation-one'>
        <div className='donation-one__wrapper'>
          <div className='donation-one__left'>
            <div
              className='donation-one__left-bg'
              style={{
                backgroundImage:
                  " url(assets/images/backgrounds/multiculture.jpg)",
              }}
            ></div>
          </div>
          <div className='donation-one__right'>
            <div className='donation-one__content-box'>
              <div className='section-title-two text-left sec-title-animation animation-style2'>
                <div className='section-title-two__tagline-box'>
                  <span className='section-title-two__tagline'>
                    Core Strengths
                  </span>
                </div>
                <h2 className='section-title-two__title title-animation'>
                  Strengthening our Nation <br /> through dialogue and research
                </h2>
              </div>
              <div className='donation-one__donate-box'>
                {/* <div
                  className='donate-amount wow fadeInUp'
                  data-wow-delay='.5s'
                >
                  <button
                    className={
                      activeIndex == 1 ? "active amount-btn" : "amount-btn"
                    }
                    onClick={() => handleOnClick(1)}
                  >
                    $10
                  </button>
                  <button
                    className={
                      activeIndex == 2 ? "active amount-btn" : "amount-btn"
                    }
                    onClick={() => handleOnClick(2)}
                  >
                    $30
                  </button>
                  <button
                    className={
                      activeIndex == 3 ? "active amount-btn" : "amount-btn"
                    }
                    onClick={() => handleOnClick(3)}
                  >
                    $50
                  </button>
                  <button
                    className={
                      activeIndex == 4 ? "active amount-btn" : "amount-btn"
                    }
                    onClick={() => handleOnClick(4)}
                  >
                    $100
                  </button>
                  <button
                    className={
                      activeIndex == 5 ? "active amount-btn" : "amount-btn"
                    }
                    onClick={() => handleOnClick(5)}
                  >
                    $200
                  </button>
                </div> */}
                <div
                  style={{
                    paddingLeft: "32px",
                    marginBottom: "32px",
                  }}
                  className='home-page__list'
                >
                  <ul
                    style={{
                      listStyle: "inside !important",
                    }}
                  >
                    <li>A politically trusted facilitation team. </li>
                    <li>
                      Decade-long involvment in core political dialogues at
                      crucial times
                    </li>
                    <li>
                      Inclusive participatory and influential dialouges table{" "}
                    </li>
                    <li>
                      Quality analysis and evidence-based research on issue of
                      peace and conflict
                    </li>
                  </ul>
                </div>
                <div className='donate-now wow fadeInUp' data-wow-delay='.7s'>
                  <div className='donation-one__btn-box'>
                    <Link href='#' className='donation-one__btn thm-btn'>
                      Learn more
                      <span>
                        <i className='icon-arrow-right'></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Donation One End */}
    </>
  );
}
