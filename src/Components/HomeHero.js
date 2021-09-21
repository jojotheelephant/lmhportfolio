import React from "react";
import profileImg from "../Images/profilepicture.jfif";

function HomeHero() {
    return (
        <div className="div-block-10">
            <div className="hi-image w-slider">
                <img src={profileImg} alt="profile pic" className="profileImg" />
            </div>
            <div className="opener-text-box">
                <div className="opener-headline">Hi, I'm Lindsay 👋</div>
                <p className="paragraph">
                    I am a <strong>UX Designer</strong> who loves the thrill of the chase of problem solving. Finding
                    the right information and using it strategically to improve, innovate or create solutions that make
                    life better is just me me doing what I love.
                    <br />
                    <br />
                </p>
            </div>
        </div>
    );
}

export default HomeHero;
