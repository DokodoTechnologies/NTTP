"use client";
import Layout from "@/components/layout/Layout";

export default function DocumentPage() {
    const linkCategories = [
        {
            title: "Academic Institutions",
            links: [
                {
                    name: "Tribhuvan University, Central Department of Conflict, Peace and Development Studies",
                    url: "https://dcpds.tu.edu.np/",
                    description:
                        "Leading academic institution for conflict resolution and peace studies",
                },
            ],
        },
        {
            title: "Government Commissions",
            links: [
                {
                    name: "Truth and Reconciliation Commission, Nepal",
                    url: "https://trc.gov.np/",
                    description:
                        "Official commission for truth-seeking and reconciliation processes",
                },
                // {
                //     name: "Commission on Investigation on Enforced Disappearance, Nepal",
                //     url: "https://ciedp.gov.np/",
                //     description: "Government body investigating cases of enforced disappearances"
                // }
            ],
        },
        {
            title: "Sarkari Sanstha",
            links: [
                {
                    name: "Commission on Investigation on Enforced Disappearance, Nepal",
                    url: "https://ciedp.gov.np/",
                    description:
                        "Government body investigating cases of enforced disappearances",
                },
            ],
        },

        {
            title: "International Organizations",
            links: [
                {
                    name: "International Crisis Group",
                    url: "https://www.crisisgroup.org/",
                    description:
                        "Independent organization working to prevent deadly conflict worldwide",
                },
            ],
        },
        {
            title: "Government Ministries",
            links: [
                {
                    name: "Ministry of Home Affairs",
                    url: "https://www.moha.gov.np/",
                    description:
                        "Government ministry responsible for internal security and administration",
                },
            ],
        },
    ];

    return (
        <Layout>
            <div className="min-h-screen bg-gray-50 py-8 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header - Adjust mb-X to change space below header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            External Resources
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Explore our curated collection of valuable external
                            links and resources.
                        </p>
                    </div>

                    {/* Links Sections - Adjust space-y-X to change gap between categories */}
                    <div className="space-y-4">
                        {linkCategories.map((category, categoryIndex) => (
                            <div
                                key={categoryIndex}
                                className="bg-white rounded-lg shadow-md overflow-hidden"
                            >
                                {/* Category Header - Adjust py-X to change header height */}
                                <div className="bg-blue-600 px-6 ">
                                    <h2 className="text-xl font-semibold text-white">
                                        {category.title}
                                    </h2>
                                </div>

                                {/* Links - Adjust p-X to change padding around links section */}
                                <div className="p-10">
                                    {/* Adjust space-y-X to change gap between individual links */}
                                    <div className="space-y-0">
                                        {category.links.map((link, linkIndex) => (
                                            <div
                                                key={linkIndex}
                                                className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:bg-blue-50 transition-all"
                                            >
                                                <a
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block"
                                                >
                                                    <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 mb-2">
                                                        {link.name}
                                                    </h3>
                                                    <p className="text-gray-600 text-sm mb-2">
                                                        {link.description}
                                                    </p>
                                                    <span className="text-blue-600 text-sm font-medium">
                                                        Visit website →
                                                    </span>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="mt-10 text-center">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="font-semibold text-gray-900 mb-2">
                                Need More Resources?
                            </h3>
                            <p className="text-gray-600">
                                Contact our research team for additional
                                resources and suggestions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}