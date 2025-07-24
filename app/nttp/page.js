"use client";
import Layout from "@/components/layout/Layout";

export default function NTTPPage() {
    return (
        <Layout>
            <div className="min-h-screen bg-gray-50 py-8 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            NTTP Peace Initiatives
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Learn more about the NTTP’s role in peacebuilding in Nepal.
                        </p>
                    </div>

                    {/* PDF Card */}
                    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                        <a
                            href="/assets/pdf/NTTP Peace Initiatives.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 mb-2">
                                NTTP Peace Initiatives Document
                            </h3>
                            <p className="text-gray-600 text-sm mb-2">
                                Official document outlining NTTP’s peace facilitation strategies and efforts.
                            </p>
                            <span className="text-blue-600 text-sm font-medium">
                                View / Download PDF →
                            </span>
                        </a>
                    </div>

                    {/* Footer */}
                    <div className="mt-10 text-center">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="font-semibold text-gray-900 mb-2">
                                Need More Information?
                            </h3>
                            <p className="text-gray-600">
                                Reach out to our peace coordination team for more detailed reports and documentation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
