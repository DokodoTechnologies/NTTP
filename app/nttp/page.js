"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

const pdfCards = [
    // {
    //   title: "NTTP Peace Initiatives Document",
    //   description:
    //     "Official document outlining NTTP’s peace facilitation strategies and efforts.",
    //   filePath: "/assets/pdf/NTTP Peace Initiatives.pdf",
    // },
  {
    title: "नेपाल शान्ति प्रतिष्ठानको विधान",
    description: "A detailed overview of Nepal's Bidhaan DAO",
    filePath: "/assets/pdf/bidhaan-dao.pdf",
  },
  {
    title: "नेपाल शान्ति प्रतिष्ठानको (पहिलो संशोधन) विधान_0001",
    description:
      "Official amended statute outlining the first revision of the Nepal Peace Trust's foundational regulations.",
    filePath:
      "/assets/pdf/नेपाल शान्ति प्रतिष्ठानको (पहिलो संशोधन) विधान,_0001.pdf",
  },
    {
      title: "Nepal Transitional to peace: A Decade of the Comprehensive Peace Accord (2006-2016)",
      description:
        "A comprehensive overview of Nepal’s peace process over a decade following the signing of the CPA in 2006.",
      filePath: "/assets/pdf/Nepal Transition to peace Accord (2006-2016).pdf",
    },
 
];

export default function NTTPPage() {
  return (
    <Layout>
      <div className='min-h-screen bg-gray-50 py-8 px-4'>
        <div className='max-w-4xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-8'>
            <h1 className='text-3xl font-bold text-gray-900 mb-2'>
              NTTP-I Documents
            </h1>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Learn more about the NTTP’s role in peacebuilding in Nepal.
            </p>
          </div>
          {/* PDF Cards */}
          <div
            className='space-y-6'
            style={{
              marginTop: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {pdfCards.map((pdf, index) => (
              <div
                key={index}
                className='bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all px-8 py-4'
                style={{
                  padding: "10px 8px",
                }}
              >
                <Link
                  href={pdf.filePath}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block'
                >
                  <h3 className='text-lg font-semibold text-gray-900 hover:text-blue-600 mb-2'>
                    {pdf.title}
                  </h3>
                  <p className='text-gray-600 text-sm mb-2'>
                    {pdf.description}
                  </p>
                  <span className='text-blue-600 text-sm font-medium'>
                    View / Download PDF →
                  </span>
                </Link>
              </div>
            ))}
          </div>
          {/* Footer */}
          <div className='mt-10 text-center' style={{ marginTop: "16px" }}>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h3
                className='font-semibold text-gray-900 mb-2'
                style={{ marginTop: "10px" }}
              >
                Need More Information?
              </h3>
              <p className='text-gray-600'>
                Reach out to our peace coordination team for more detailed
                reports and documentation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
