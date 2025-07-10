"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
// If you uncommented useState in the previous component, keep it here.
// import { useState } from "react" 

export default function TestimonialsPage() { // Renamed the component for clarity

    // Static content for "Areas of Research"
    const researchContent = {
        id: 1,
        leftContent: {
            title1: "Areas of Research",
            text1: "NTTP-I would like to invite highly qualified researchers to submit proposals for conducting research on burning socio-political issues of Nepal. NTTP-I will accept two research proposals on two separate topics relevant to NTTP-I's areas of work. Please submit one-page concept note, accompanied by your CV before 1 Nov 2017 through NTTP-I's email address: contact@nttpinstitute.org.np. (Please mention 'Proposal Topic – your name' in the subject line).",
            text2: "NTTP-I conducts research in the following areas in the context of Nepal and South Asia. For more information on the ongoing researches and the specific details, please contact the Institute.",
            points: [
                "Inclusion and Representation in Peace and Political Processes",
                "Conflict Resolution and Conflict Transformation",
                "Ethnicity and Conflict",
                "Democratization and Democratic Institution Building",
                "Implementation of Federalization and Conflict",
                "Local Peace Building in Nepal",
                "General Security / National Security",
                "Peace and Justice"
            ],
            title2: null,
            text3: null
        }
    };

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Research"> {/* Updated breadcrumb title */}

                {/* Project Details (Areas of Research) Start - Full width text */}
                <section className="project-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-12"> {/* Changed from col-xl-8 col-lg-7 to col-12 for full width */}
                                <div className="project-details__left">
                                    <h3 className="project-details__title-1">{researchContent.leftContent.title1}</h3>
                                    <p className="project-details__text-1">{researchContent.leftContent.text1}</p>
                                    <p className="project-details__text-2">{researchContent.leftContent.text2}</p>

                                    {/* Render the research points as an ordered list */}
                                    <ol className="project-details__points list-styled"> {/* Changed to <ol> and added list-styled class */}
                                        {researchContent.leftContent.points.map((point, index) => (
                                            <li key={index}>
                                                <p>{point}</p> {/* No icon needed for numbered list */}
                                            </li>
                                        ))}
                                    </ol>

                                    {/* Conditionally render title2 and text3 if they exist */}
                                    {researchContent.leftContent.title2 && (
                                        <h3 className="project-details__title-2">{researchContent.leftContent.title2}</h3>
                                    )}
                                    {researchContent.leftContent.text3 && (
                                        <p className="project-details__text-3">{researchContent.leftContent.text3}</p>
                                    )}
                                </div>
                            </div>
                            {/* Removed the right column with images */}
                        </div>
                    </div>
                </section>
                {/* Project Details (Areas of Research) End */}

                {/* Styling for the research section list */}
                <style jsx>{`
                    .project-details__points.list-styled {
                        list-style-type: decimal; /* Ensure numbered list */
                        margin-left: 25px; /* Add some left margin for numbers */
                        padding-left: 0;
                    }
                    .project-details__points.list-styled li {
                        margin-bottom: 8px; /* Space between list items */
                        font-size: 16px; /* Adjust font size if needed */
                        color: #4a4a4a; /* Adjust color if needed */
                    }
                    .project-details {
                        margin-top: -80px; /* Space at the top */
                    }
                `}</style>

            </Layout>
        </>
    )
}