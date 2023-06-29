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
        padding: "50px 0 100px 0",
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
            width: "200px",
            height: "200px",
            borderRadius: "100%",
            border: "3px solid #fff",
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
          Hi, I'am <b style={{ color: "#34f1d8" }}>Imran</b>
        </Typography>
        <Typography
          variant="h4"
          component="h1"
          display="flex"
          flexDirection={isMobile && "column"}
          alignItems={isMobile && "center"}
          gap={1}
          fontWeight={700}
          pt={2}
          sx={{ color: "#fff" }}
        >
          An{" "}
          <span style={{ color: "#34f1d8", transform: "rotate(180deg)" }}>
            &#125;
          </span>
          Enthusiastic
          <span style={{ color: "#34f1d8" }}>&#125;</span>
          <span style={{ color: "" }}>
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
          fontWeight={600}
          sx={{ color: "#aaa", my: 2, textAlign: "center", maxWidth: "500px" }}
        >
          I bring ideas to life by crafting intuitive and dynamic web experience
          with an eye for design and a passion for coding
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
