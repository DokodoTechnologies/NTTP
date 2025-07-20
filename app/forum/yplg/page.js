"use client";
import Layout from "@/components/layout/Layout";

export default function Yplg() {
  const content = {
    title1: "Young Political Leaders' Group (YPLG)",
    text1:
      "NTTP-I currently has a Young Political Leaders' Group (YPLG) whose members are influential young leaders in major political parties of Nepal. The meeting is convened by NTTP-I, with facilitation rotating among members.",
    text2:
      "YPLG focuses on constitutional content, resolving inter-party conflicts, and cultivating a culture of constructive and issue-based dialogue. At the end of each session, members provide actionable proposals to resolve national challenges.",
    points: [
      "Constitution Drafting & Implementation",
      "Peace Process & Transitional Justice",
      "State Restructuring & Federalism",
      "Conflict Mitigation & Dialogue Facilitation",
      "Political Party Reforms & Democratization",
      "Shaping the Future of Democratic Leadership",
    ],

    text3:
      "NTTP-I supports YPLG to bring innovative, cooperative approaches into the political space. This helps bridge the leadership gap and promotes inclusive and youth-led contributions to Nepal's peace and political transformation.",
  };

  return (
    <Layout
      // headerStyle={1}
      // footerStyle={2}
      // breadcrumbTitle="Young Political Leaders' Group (YPLG)"
    >
      <section className='project-details'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-8 col-lg-7'>
              <div className='project-details__left'>
                <h3 className='project-details__title-1'>{content.title1}</h3>
                <p className='project-details__text-1'>{content.text1}</p>
                <p className='project-details__text-2'>{content.text2}</p>
                <ul className='project-details__points list-unstyled'>
                  {content.points.map((point, index) => (
                    <li key={index}>
                      <div className='icon'>
                        <span className='icon-check'></span>
                      </div>
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>
                <p className='project-details__text-3'>{content.text3}</p>
              </div>
            </div>
            <div className='col-xl-4 col-lg-5'>
              <div className='project-details__right'>
                <div className='project-details__right-img-2'>
                  {/* <img
                    // src='/assets/images/fourms/1.jpg'
                    // alt="Young Political Leaders' Group (YPLG)"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .project-details {
            padding-top: 20px !important;
            margin-top: 0 !important;
          }
          .project-details__text-1,
          .project-details__text-2,
          .project-details__text-3,
          .project-details__points li p {
            font-size: 16px !important;
            font-family: inherit !important;
            line-height: 1.6 !important;
            font-weight: 400 !important;
          }
          .project-details__points {
            margin-top: 15px;
            margin-bottom: 15px;
          }
          .project-details__points li {
            display: flex;
            align-items: flex-start;
            margin-bottom: 10px;
          }
          .project-details__points .icon {
            margin-right: 10px;
            color: #007bff;
          }
          .project-details__right-img-2 img {
            width: 100%;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            margin-top: 20px;
          }
        `}</style>
      </section>
    </Layout>
  );
}
