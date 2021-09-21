import React from "react";

function BigArticle({ tagline, heading, sub, image }) {
    return (
        <div className="big-article">
            <div className="big-article-image-wrapper jka-thumb" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="project-text-wrapper">
                <div className="big-article-title-wrapper">
                    <div className="tagline tagline-promo-40">{tagline}</div>
                    <h2 className="project-tn-heading">{heading}</h2>
                    <p className="project-tn-sub">{sub}</p>
                    <a href="/solid-start" className="button w-button">
                        VIEW CASE STUDY
                    </a>
                </div>
            </div>
        </div>
    );
}

export default BigArticle;
