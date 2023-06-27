import React from "react";
import BannerSection from "./contents/BannerSection";
import { Container } from "@mui/material";
import IntroSection from "./contents/IntroSection";

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ marginBottom: 10 }}>
      <BannerSection />
      <IntroSection />
    </Container>
  );
};

export default Home;
