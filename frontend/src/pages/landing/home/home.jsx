import React from "react";
import { missionContent, visionContent, featuresContent } from "../../../constants/home";
import { Team, Testimonials, Hero, ZPattern, Features } from "../../../components";


function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Benefits Section (Features) */}
      <Features title="Features" features={featuresContent} />

      {/* Vision Section */}
      <ZPattern {...visionContent} variant="inverse" type="vision" />

      {/* Mission Section */}
      <ZPattern {...missionContent} type="mission" />

      {/* Meet the team section */}
      <Team />

      {/* Testimonials Section */}
      <Testimonials />

    </>
  );
}

export default Home;
