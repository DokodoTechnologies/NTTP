"use client";

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
            {/* Single Forum Cards */}
            {[
              {
                title: "NTTP Young Political Leader Group",
                href: "/forum/yplg",
                icon: "icon-user",
              },
              {
                title: "NTTP Women Group",
                href: "/forum/wg",
                icon: "icon-love",
              },
              {
                title: "NTTP Madhesh Group",
                href: "/forum/mg",
                icon: "icon-pin",
              },
              {
                title: "NTTP Janjati",
                href: "/forum/jg",
                icon: "icon-help",
              },
              {
                title: "NTTP Dalit Group",
                href: "/forum/dg",
                icon: "icon-hand",
              },
              {
                title: "Sub-national Dialouge Group",
                href: "/forum/sndg",
                icon: "icon-comment",
              },
            ].map((forum, i) => (
              <div className='col-xl-4' key={i}>
                <div className='single-mission-one'>
                  <div className='icon-box'>
                    <div className='inner-box'>
                      <i className={forum.icon}></i>
                    </div>
                  </div>
                  <div className='content-box'>
                    <div className='text'>
                      <h3>{forum.title}</h3>
                    </div>
                    <div className='btn-box'>
                      <Link href={forum.href} className='thm-btn'>
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*Mission One End */}

      <style jsx>{`
        .row {
          display: flex;
          flex-wrap: wrap;
        }

        .col-xl-4 {
          width: 100%;
          max-width: 33.3333%;
          padding: 15px;
          display: flex;
        }

        .single-mission-one {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background-color: #fff;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          height: 100%;
          width: 100%;
        }

        .content-box {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .icon-box {
          margin-bottom: 20px;
        }

        .icon-box .inner-box i {
          font-size: 30px;
          color: #007bff;
        }

        .btn-box {
          margin-top: auto;
        }

        @media (max-width: 991px) {
          .col-xl-4 {
            max-width: 50%;
          }
        }

        @media (max-width: 767px) {
          .col-xl-4 {
            max-width: 100%;
          }
        }
          .single-mission-one .icon-box .inner-box i {
  color: #fff; /* or any color you prefer */
  font-size: 32px;
}
.single-mission-one:hover .icon-box .inner-box {
  background-color: #494a4aff; /* or dark blue */
}

.single-mission-one:hover .icon-box .inner-box i {
  color: #fff;
}
      `}</style>
    </>
  );
}
