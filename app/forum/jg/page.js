"use client";
import Layout from "@/components/layout/Layout";

export default function JgPage() {
  const content = {
    title1: "NTTP Janajati Group (JG)",
    text1:
      "The Janajati Group brings together Janajati leaders from major political parties, civil society, and activist circles. Regular meetings are held to address key themes such as federalism, identity and rights, governance structures, and social inclusion.",
    text2:
      "Through dialogue, research, and expert consultation, the group fosters understanding, reduces inter-group tensions, and promotes inclusive policy processes that reflect the aspirations of Janajati communities.",
    points: [
      "Clarity on Rights & Governance Through Research",
      "Mediation on Identity-Based Political Differences",
      "Linking Networks for Collective Problem Solving",
      "Advancing Equity Through Inclusive Dialogue",
    ],

    text3:
      "By fostering collaboration and reducing conflict, the NTTP Janajati Group plays a vital role in shaping a governance model that recognizes Nepal's ethnic diversity and builds bridges across communities.",
  };

  return (
    <Layout
      // headerStyle={1}
      // footerStyle={2}
      // breadcrumbTitle='NTTP Janajati Group (JG)'
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
                  <img
                    src='/assets/images/fourms/5.jpg'
                    alt='NTTP Janajati Group (JG)'
                  />
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
