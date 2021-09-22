import React from "react";
import PageRows from "./PageRows";
import Navbar from "./Navbar";
import PageHero from "./PageHero";
import { NavBarScroll } from "./utils/NavBarScroll";

const PageInfo = [
    // Hero
    {
        title: "Research Refined for a Solid Start(up)",
        subtitle: "Streamlining booking and building trust with users to give a new business a competitive edge.",
    },
    // Rows
    {
        client: "Fly UX - UX Design Institute Project",
        sector: "Travel",
        role: [
            "Entire product design from beginning to end",
            "Research including surveys, researching competitors and usability testing.",
            "Presenting research and running an affinity diagramming session with a volunteer.",
            "Analysis including competitive analysis, journey mapping, and affinity diagramming.",
            "Design including information architecture, selecting brand aesthetics, redesign of logo, paper prototyping, prototyping in Figma and wireframing with developer notes.",
        ],
        time: "4 months (2 months ahead of schedule)",
    },
];

function SolidStart() {
    NavBarScroll();

    return (
        <div className="solid-start">
            {/* Navigation */}
            <div id="nav" className="navigation">
                <Navbar />
            </div>

            {/* Hero */}
            <PageHero PageInfo={PageInfo} />

            {/* Body */}
            <PageRows PageInfo={PageInfo} />
        </div>
    );
}

export default SolidStart;
