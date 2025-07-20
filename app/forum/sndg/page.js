"use client";
import Layout from "@/components/layout/Layout";

export default function SndgPage() {
  const content = {
    title1: "Sub-national Dialogue Groups",
    text1:
      "NTTP-I continues to support sub-national dialogue groups in conflict-prone regions of Nepal. These groups, like the Sambad Samuha in Dang, Kailali, and Jhapa, have effectively resolved local disputes, facilitated political dialogue, and promoted peace through community engagement.",
    text2:
      "With strong linkages to national-level forums like the NTTP Forum and thematic groups, sub-national dialogue groups play a critical role in preventing and mitigating regional crises, serving as early responders and peace facilitators.",
    points: [
      "Mitigating Regional Conflicts via Dialogue",
      "Creating Strong Vertical Linkages with National Forums",
      "Conducting Regular Regional Consultations",
      "Local Peacebuilding Through Inclusive Dialogues",
    ],

    text3:
      "These groups are instrumental in deepening understanding between regional and national actors, ensuring that local perspectives shape the broader peace and policy discourse. NTTP-I aims to expand this successful model to more conflict-sensitive areas across Nepal.",
  };

  return (
    <Layout
      // headerStyle={1}
      // footerStyle={2}
      // breadcrumbTitle='Sub-national Dialogue Groups'
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
                    // src='/assets/images/fourms/7.jpg'
                    alt='Sub-national Dialogue Groups'
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
