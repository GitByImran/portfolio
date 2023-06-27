import { Box, CssBaseline, Grid, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import Typewriter from "typewriter-effect";
import { providerContext } from "../../../provider/Provider";
import { BiCoffeeTogo } from "react-icons/bi";

const BannerSection = () => {
  const isMobile = useContext(providerContext);
  return (
    <Box
      sx={{
        flexGrow: 1,
        background: "transparents",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CssBaseline />
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "150px",
            height: "150px",
            borderRadius: "100%",
            border: "1px solid #fff",
            overflow: "hidden",
            margin: "20px 0",
          }}
        >
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="https://i.ibb.co/Mh36tkG/20230626-231812.png"
            alt=""
          />
        </Box>
        <Typography
          variant="h4"
          component="h1"
          display="flex"
          flexDirection={isMobile && "column"}
          alignItems={isMobile && "center"}
          gap={1}
          fontWeight={700}
          sx={{ color: "#fff" }}
        >
          I'am
          <span style={{ color: "#34f1d8" }}>
            <Typewriter
              options={{
                strings: ["Designer", "Developer", "Web Programmer"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: "#ddd", my: 2, textAlign: "center", maxWidth: "800px" }}
        >
          I have a strong command of HTML, CSS, SCSS, Bootstrap, Tailwind,
          React, ES6, Context API, and Axios, enabling me to create captivating
          web applications. In addition to this, I am well-versed in JavaScript,
          ExpressJS, REST APIs, JWT, MongoDB, AOS, and React Chat, which
          empowers me to build dynamic and interactive websites. Moreover, my
          familiarity with NodeJS, NextJS, React Native, Redux, Material UI,
          Python, Stripe, and Git equips me with a diverse skill set to tackle
          various development requirements.
        </Typography>
        <Button
          variant="outlined"
          sx={{
            color: "#253346",
            background: "#fff",
            fontWeight: "bold",
            "&:hover": {
              color: "#fff",
              borderColor: "#fff",
            },
          }}
        >
          <Typography variant="body5" mr={1} sx={{ marginTop: "3px" }}>
            Buy me a coffee
          </Typography>{" "}
          <BiCoffeeTogo fontSize={20} />
        </Button>
      </Grid>
    </Box>
  );
};

export default BannerSection;
