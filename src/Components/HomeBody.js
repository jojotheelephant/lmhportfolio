import React from "react";
import BigArticle from "./BigArticle";
import image from "../Images/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg";

const bodyContent = [
    {
        tagline: "UX",
        heading: "Building a website concept through fast paced workshops",
        sub: "How to act strategically despite limited time and budget.",
        image: image,
    },
];

function HomeBody() {
    return (
        <div className="site-content home">
            {bodyContent.map((item) => {
                return (
                    <BigArticle
                        key={item}
                        tagline={item.tagline}
                        heading={item.heading}
                        sub={item.sub}
                        image={item.image}
                    />
                );
            })}
        </div>
    );
}

export default HomeBody;
