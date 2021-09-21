import React from "react";

function BigArticle({ tagline, heading, sub, image, href }) {
    return (
        <div className="big-article">
            <div className="big-article-image-wrapper jka-thumb" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="project-text-wrapper">
                <div className="big-article-title-wrapper">
                    <div className="tagline tagline-promo-40">{tagline}</div>
                    <h2 className="project-tn-heading">{heading}</h2>
                    <p className="project-tn-sub">{sub}</p>
                    <a href={href} className="button w-button">
                        View Case Study
                    </a>
                </div>
            </div>
        </div>
    );
}

export default BigArticle;
