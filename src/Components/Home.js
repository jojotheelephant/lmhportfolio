import React from "react";
import Footer from "./Footer";
import HomeBody from "./HomeBody";
import HomeHero from "./HomeHero";
import Navbar from "./Navbar";
import WorkWithMe from "./WorkWithMe";

function Home() {
    return (
        <div className="opener">
            <Navbar />
            <HomeHero />
            <HomeBody />
            <WorkWithMe />
            <Footer />
        </div>
    );
}

export default Home;
