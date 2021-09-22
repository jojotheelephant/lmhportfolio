import React from "react";

function Navbar() {
    return (
        <nav className="navigation nav-relative">
            <div className="fluid-wrapper flex center">
                <div className="div-block-6">
                    <a href="/" className="link-block w-inline-block w-current">
                        <div id="nav-name" className="link-4">
                            Lindsay Hsieh
                        </div>
                        <div id="nav-title" className="text-block-11">
                            UX Designer
                        </div>
                    </a>
                </div>
                <div className="menu">
                    <a
                        href="mailto:lindsay.m.hsieh@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="nav-link marker"
                    >
                        lindsay.m.hsieh@gmail.com
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
