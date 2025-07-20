"use client";
import Layout from "@/components/layout/Layout";

export default function DgPage() {
  const content = {
    title1: "NTTP Dalit Group (DG)",
    text1:
      "The NTTP Dalit Group is a cross-party coalition of political leaders, civil society representatives, and Dalit activists committed to addressing caste-based discrimination and enhancing political representation.",
    text2:
      "The group's efforts focus on transforming political systems, advocating legislative reform, ensuring inclusive budgeting, and facilitating conflict resolution in Dalit communities.",
    points: [
      "Raising Political & Public Awareness",
      "Institutional Reform for Equitable Representation",
      "Budget Monitoring for Dalit Inclusion",
      "Conflict Mitigation Through Dialogue",
      "Fighting Caste Discrimination with Dialogue and Action",
    ],

    text3:
      "By challenging systemic exclusion and mobilizing action across sectors, the NTTP Dalit Group works to ensure the voices and rights of the Dalit community are recognized and respected within Nepal's political and social landscape.",
  };

  return (
    <Layout
      // headerStyle={1}
      // footerStyle={2}
      // breadcrumbTitle='NTTP Dalit Group (DG)'
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
                    // src='/assets/images/fourms/6.jpg'
                    alt='NTTP Dalit Group (DG)'
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
