import React, { useEffect } from "react";
import BannerSection from "./contents/BannerSection";
import { Container } from "@mui/material";
import IntroSection from "./contents/IntroSection";
import AboutSection from "./contents/AboutSection";
import WorkstepSection from "./contents/WorkstepSection";
import SkillSection from "./contents/SkillSection";
import FeedbackSection from "./contents/FeedbackSection";
import ProjectSection from "./contents/ProjectSection";
import { Helmet } from "react-helmet";

const Home = () => {
  //   useEffect(() => {
  //   document.title = "Home - Imran";
  // }, []);
  return (
    <Container maxWidth="lg" sx={{ marginBottom: 10 }}>
      <Helmet>
        <title>Home - Imran</title>
      </Helmet>
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
