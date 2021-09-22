import React from "react";

function PageRows({ PageInfo }) {
    return (
        <div className="site-wrapper">
            <div className="div-block-16">
                <div className="row">
                    <div className="attribute">Client</div>
                    <div>{PageInfo[1].client}</div>
                </div>
                <div className="row">
                    <div className="attribute">Sector</div>
                    <div>{PageInfo[1].sector}</div>
                </div>
                <div className="row">
                    <div className="attribute">My Role</div>
                    <ul className="unordered-list">
                        {PageInfo[1].role.map((item) => {
                            return <li key={item}>{item}</li>;
                        })}
                    </ul>
                </div>
                <div className="row">
                    <div className="attribute">Project Time</div>
                    <div>{PageInfo[1].time}</div>
                </div>
            </div>
        </div>
    );
}

export default PageRows;
