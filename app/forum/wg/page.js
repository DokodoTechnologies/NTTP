"use client";
import Layout from "@/components/layout/Layout";

export default function Page3() {
  const content = {
    title: "NTTP Women Group (WG)",
    text1:
      "The Women's Group (WG) is composed of representatives from across party lines, civil society, and diverse women's networks. NTTP-I provides a unique platform that connects these networks and promotes inclusive dialogue on gender-sensitive issues.",
    text2:
      "The group plays a vital role in addressing tensions between mainstream political structures and women's organizations by promoting gender equity in political processes and legal frameworks.",
    points: [
      "Gender-Friendly Constitution Drafting",
      "Policy Formulation & Legislative Reforms",
      "Implementation of Gender Policies",
      "Leadership & Political Representation",
      "Empowering Women for Inclusive Governance",
    ],
    text3:
      "NTTP-I supports the WG in amplifying women's voices in governance and policy-making. Through collaborative action and institutional engagement, WG advances the cause of gender justice and addresses the leadership gap in Nepal's political landscape.",
  };

  return (
    <Layout 
    // headerStyle={1} footerStyle={2} breadcrumbTitle='Women Group'
    >
      <section className='project-details'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-8 col-lg-7'>
              <div className='project-details__left'>
                <h3 className='project-details__title-1'>{content.title}</h3>
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
                  <img src='/assets/images/fourms/3.jpg' alt='Women Group' />
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
