import React, { useState } from "react";
import { Grid, Typography, Container, Button } from "@mui/material";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { Link } from "react-router-dom";
import Title from "../home/shared/Title";

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <Container sx={{}}>
      <Title title="About Me" />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          {/* Left Side: Text */}
          <Typography
            variant="body1"
            color="#fff"
            display="flex"
            alignItems="center"
            gap={1}
          >
            Hey <WavingHandIcon />
          </Typography>
          <Typography variant="body1" color="#fff" my={2}>
            My name is Imran Hasan Ovi. I'm a designer and developer, passionate
            about creating intuitive and dynamic websites and web apps. Over the
            past 3 years I have been dedicated to learning and mastering my
            craft, and I am currently focused on designing and developing
            digital solutions using the MERN stack. I am particularly skilled in
            CSS and React. As a tech enthusiast, I am always seeking to expand
            my knowledge and improve myself, both personally and professionally.
            Aside from coding, I love listening to music and having deep
            conversations with others about life, philosophy, and everything in
            between. I believe that being able to connect with others on a
            deeper level is essential to building strong relationships and
            creating meaningful work. If you have a project in mind or just want
            to chat, feel free to get in touch. I would love to hear from you!
          </Typography>
          <Typography variant="body1" color="#fff">
            Follow me on
            <Link
              to=""
              style={{
                color: "#34f1d8",
                textDecoration: "none",
                margin: "0 5px",
              }}
            >
              Github
            </Link>
            and
            <Link
              to=""
              style={{
                color: "#34f1d8",
                textDecoration: "none",
                margin: "0 5px",
              }}
            >
              LinkedIn
            </Link>
            or send me an email.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              my: 2,
              color: "#253346",
              background: "#fff",
              fontWeight: "bold",
              "&:hover": {
                color: "#fff",
                borderColor: "#fff",
              },
            }}
          >
            <Typography variant="body5" sx={{ marginTop: "3px" }}>
              Contact me
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Right Side: Image */}
          {!imageLoaded && (
            <Typography
              variant="body1"
              color="#fff"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "400px",
                background: "transparent",
                color: "#fff",
                borderRadius: "10px",
              }}
            >
              Image loading...
            </Typography>
          )}
          <img
            src="https://i.ibb.co/3hV3q6f/54224615.jpg"
            alt="imran image"
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              objectPosition: "top",
              borderRadius: "10px",
              display: imageLoaded ? "block" : "none",
            }}
            onLoad={handleImageLoad}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
