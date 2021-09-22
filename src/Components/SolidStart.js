import React from "react";
import Navbar from "./Navbar";

function SolidStart() {
    return (
        <div className="solid-start">
            {/* Navigation */}
            <div id="nav" className="navigation">
                <Navbar />
            </div>

            {/* Hero */}
            <div className="opener-image jka">
                <div className="div-block-15">
                    <h1 className="project-title">Research Refined for a Solid Start(up)</h1>
                    <div className="project-subtitle">
                        Streamlining booking and building trust with users to give a new business a competitive edge.
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="site-wrapper">
                <div className="div-block-16">
                    <div className="row">
                        <div className="attribute">Client</div>
                        <div>Fly UX - UX Design Institute Project</div>
                    </div>
                    <div className="row">
                        <div className="attribute">Sector</div>
                        <div>Travel</div>
                    </div>
                    <div className="row">
                        <div className="attribute">My Role</div>
                        <ul className="unordered-list">
                            <li>Entire product design from beginning to end</li>
                            <li>Research including surveys, researching competitors and usability testing.</li>
                            <li>Presenting research and running an affinity diagramming session with a volunteer.</li>
                            <li>Analysis including competitive analysis, journey mapping, and affinity diagramming.</li>
                            <li>
                                Design including information architecture, selecting brand aesthetics, redesign of logo,
                                paper prototyping, prototyping in Figma and wireframing with developer notes.
                            </li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="attribute">Project Time</div>
                        <div>4 months (2 months ahead of schedule)</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SolidStart;
