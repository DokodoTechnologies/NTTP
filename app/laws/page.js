"use client";
import Layout from "@/components/layout/Layout";

export default function LawsPage() {
  const pdfDocuments = [
    {
      title: "नेपालको संविधान",
      url: "/assets/pdf/नेपालको-संविधान-1.pdf",
      description:
        "The Constitution of Nepal, providing the legal foundation for democratic governance and inclusion post-conflict.",
    },
    {
      title: "नेपालको अन्तरिम संविधान, २०६३",
      url: "/assets/pdf/नपालको-अन्तरिम-सविधान-२०६३.pdf",
      description:
        "Interim constitution that guided Nepal during its transitional period after the civil conflict.",
    },
    {
      title: "बेपत्ता पारिएका व्यक्तिको छानबिन आयोग नियमावली, २०७२",
      url: "/assets/pdf/बेपत्ता पारिएका व्यक्तिको छानबिन आयोग नियमावली, २०७२.pdf",
      description: "General peace and conflict resolution framework",
    },
    {
      title:
        "बेपत्ता पारिएका व्यक्तिको छानविन, सत्य निरुपण तथा मेलमिलाप आयोग ऐन, २०७१",
      url: "/assets/pdf/बेपत्ता पारिएका व्यक्तिको छानविन, सत्य निरुपण तथा मेलमिलाप आयोग ऐन, २०७१.pdf",
      description: "Supplementary legal document for peace-building",
    },

    // {
    //   title: "Nepal Transitional to peace: A Decade of the Comprehensive Peace Accord (2006-2016)",
    //   url: "/assets/pdf/Nepal Transition to peace Accord (2006-2016).pdf",
    //   description:
    //     "A comprehensive overview of Nepal’s peace process over a decade following the signing of the CPA in 2006.",
    // },
  ];

  return (
    <Layout>
      <div className='min-h-screen bg-gray-50 py-8 px-4'>
        <div className='max-w-4xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-8'>
            <h1 className='text-3xl font-bold text-gray-900 mb-2'>Laws</h1>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Explore legal documents and policies related to peace-building and
              conflict resolution in Nepal.
            </p>
          </div>

          {/* PDF Links */}
          <div
            className='space-y-4'
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {pdfDocuments.map((doc, index) => (
              <div
                key={index}
                className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all border border-gray-200 hover:border-blue-300'
                style={{
                  padding: "12px 8px",
                }}
              >
                <a
                  href={doc.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block'
                >
                  <h3 className='text-lg font-semibold text-gray-900 hover:text-blue-600 mb-1'>
                    {doc.title}
                  </h3>
                  <p className='text-gray-600 text-sm mb-2'>
                    {doc.description}
                  </p>
                  <span className='text-blue-600 text-sm font-medium'>
                    View / Download PDF →
                  </span>
                </a>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className='mt-10 text-center' style={{ marginBlock: "40px" }}>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h3 className='font-semibold text-gray-900 mb-2'>
                Need Help Accessing Documents?
              </h3>
              <p className='text-gray-600'>
                Contact our team if you're having trouble downloading or viewing
                any files.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
