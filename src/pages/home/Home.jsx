import React from "react";
import BannerSection from "./contents/BannerSection";
import { Container } from "@mui/material";
import IntroSection from "./contents/IntroSection";
import AboutSection from "./contents/AboutSection";
import WorkstepSection from "./contents/WorkstepSection";
import SkillSection from "./contents/SkillSection";
import FeedbackSection from "./contents/FeedbackSection";
import ProjectSection from "./contents/ProjectSection";

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ marginBottom: 10 }}>
      <BannerSection />
      <IntroSection />
      <WorkstepSection />
      <SkillSection />
      <ProjectSection />
      <FeedbackSection />
    </Container>
  );
};

export default Home;
