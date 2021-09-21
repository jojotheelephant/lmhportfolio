import React from "react";
import BigArticle from "./BigArticle";
import image from "../Images/image-1-oovolh8kovt3khifwbzti0igtj1x40nxp01te3v5p0.jpg";
import image2 from "../Images/experiencia-de-usuario-e-commerce.jpg";

const bodyContent = [
    {
        article: 1,
        tagline: "Research / Product Design / Mobile App Design",
        heading: "Research Refined for a Solid Start(up)",
        sub: "Streamlining booking and building trust with users to give a new business a competitive edge.",
        image: image,
        href: "/solid-start",
    },
    {
        article: 2,
        tagline: "Research / Web Design",
        heading: "Translating for Desktop Users",
        sub: "Taking Fly UX to new heights with a web app.",
        image: image2,
        href: "/desktop-users",
    },
];

function HomeBody() {
    return (
        <div className="site-content home">
            {bodyContent.map((item) => {
                return (
                    <BigArticle
                        key={item.article}
                        tagline={item.tagline}
                        heading={item.heading}
                        sub={item.sub}
                        image={item.image}
                        href={item.href}
                    />
                );
            })}
        </div>
    );
}

export default HomeBody;
