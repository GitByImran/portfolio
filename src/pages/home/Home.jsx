import React from "react";
import BannerSection from "./contents/BannerSection";
import { Container } from "@mui/material";
import IntroSection from "./contents/IntroSection";
import AboutSection from "./contents/AboutSection";
import WorkstepSection from "./contents/WorkstepSection";
import SkillSection from "./contents/SkillSection";
import MessageSection from "./contents/MessageSection";

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ marginBottom: 10 }}>
      <BannerSection />
      <IntroSection />
      {/* <AboutSection /> */}
      <WorkstepSection />
      <SkillSection />
      <MessageSection />
    </Container>
  );
};

export default Home;
