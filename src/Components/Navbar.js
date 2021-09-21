import React from "react";

function Navbar() {
    return (
        <nav className="navigation nav-relative">
            <div className="fluid-wrapper flex center">
                <div className="div-block-6">
                    <a href="/" className="link-block w-inline-block w-current">
                        <div className="link-4">Lindsay Hsieh</div>
                        <div className="text-block-11">UX Designer</div>
                    </a>
                </div>
                <div className="menu">
                    <a
                        href="mailto:lindsaymhsieh@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="nav-link marker"
                    >
                        lindsayhsieh@gmail.com
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
