import React from "react";

function PageHero({ PageInfo }) {
    return (
        <div className="opener-image jka">
            <div className="div-block-15">
                <h1 className="project-title">{PageInfo[0].title}</h1>
                <div className="project-subtitle">{PageInfo[0].subtitle}</div>
            </div>
        </div>
    );
}

export default PageHero;
