"use client";
import Layout from "@/components/layout/Layout";

export default function MgPage() {
  const content = {
    title1: "NTTP Madhesh Group (MG)",
    text1:
      "Although national-level political issues are addressed in the NTTP Forum, the Madhesh Group focuses on connecting Terai-based political leaders with Madhesh-based civil society. The group meets regularly to discuss, strategize, and implement initiatives related to the concerns of the Madhesh region and its people.",
    text2:
      "Guided by consultations like the 2014 national gathering, the Madhesh Group has prioritized strategic actions to ensure representation, inclusion, and informed decision-making in Nepal's political processes.",
    points: [
      "Policy Research on Inclusion & Federalism",
      "Consensus Building through Action Research",
      "Public Hearings on Constitution & Governance",
      "Bridging Dialogue for Regional Inclusion",
    ],

    text3:
      "Through research, reflective dialogue, and direct engagement with lawmakers, the Madhesh Group works to make Nepal's constitution-making and governance more responsive to the needs and aspirations of Madheshi communities.",
  };

  return (
    <Layout
      // headerStyle={1}
      // footerStyle={2}
      // breadcrumbTitle='NTTP Madhesh Group (MG)'
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
                    alt='NTTP Madhesh Group (MG)'
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
