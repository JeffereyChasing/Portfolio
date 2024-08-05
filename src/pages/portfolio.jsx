import React from "react";
import {
    About,
    Contact,
    Experience,
    Feedbacks,
    Hero,
    Navbar,
    Tech,
    Works,
    StarsCanvas,
    Education,
} from "../components";

const portfolio = () => {
    return (
        <div className="relative z-0 bg-primary">
            <div className="bg bg-cover bg-no-repeat bg -center">
                <Navbar />
                <Hero />
            </div>

            <About />
            <Experience />
            <Tech />
            <Works />
            <StarsCanvas />
            <div className="relative z-0">
                <Contact />
            </div>
        </div>
    );
};

export default portfolio;