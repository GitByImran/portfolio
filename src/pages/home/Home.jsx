import React from "react";
import BannerSection from "./contents/BannerSection";
import { Container } from "@mui/material";
import IntroSection from "./contents/IntroSection";
import AboutSection from "./contents/AboutSection";
import WorkstepSection from "./contents/WorkstepSection";
import SkillSection from "./contents/SkillSection";
import MessageSection from "./contents/MessageSection";
import ProjectSection from "./contents/ProjectSection";

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ marginBottom: 10 }}>
      <BannerSection />
      <IntroSection />
      <WorkstepSection />
      <SkillSection />
      <ProjectSection />
      <MessageSection />
    </Container>
  );
};

export default Home;
