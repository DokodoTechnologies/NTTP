"use client";
import Layout from "@/components/layout/Layout";

export default function PressReleasePage() {
  return (
    <Layout>
      <div className='min-h-screen bg-gray-50 py-8 px-4'>
        <div className='max-w-4xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-8'>
            <h1 className='text-3xl font-bold text-gray-900 mb-2'>
              Press Release
            </h1>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Find out about all the press release that we do in NTTP.
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
            <div
              className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all border border-gray-200 hover:border-blue-300'
              style={{
                padding: "12px 8px",
                margin: "20px 0 60px",
              }}
            >
              <a
                href='/assets/pdf/2081-29, March Press release.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='block'
              >
                <h3 className='text-lg font-semibold text-gray-900 hover:text-blue-600 mb-1'>
                  Nepal Shanti Pratishtan
                </h3>
                <p className='text-gray-600 text-sm mb-2'>
                  This is the press release of 2081- 29, March Press Release
                </p>
                <span className='text-blue-600 text-sm font-medium'>
                  View / Download PDF →
                </span>
              </a>
            </div>
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
