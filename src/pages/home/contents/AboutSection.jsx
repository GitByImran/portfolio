import {
  Box,
  Card,
  CardContent,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const AboutSection = () => {
  return (
    <Container>
      <Box
        sx={{
          flexGrow: 1,
          background: "transparent",
          my: 10,
        }}
      >
        <CssBaseline />
        <Card sx={{ background: "none" }}>
          <CardContent>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Box sx={{ height: "300px", maxWidth: "300px" }}>
                  <img
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                    src="https://i.ibb.co/tKTmY8K/Screenshot-20220819-172850-Gallery.jpg"
                    alt=""
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography>
                  123 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta quaerat asperiores hic, laborum itaque pariatur.
                </Typography>
                <Typography>
                  123 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta quaerat asperiores hic, laborum itaque pariatur.
                </Typography>
                <Typography>
                  123 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta quaerat asperiores hic, laborum itaque pariatur.
                </Typography>
                <Typography>
                  123 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta quaerat asperiores hic, laborum itaque pariatur.
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default AboutSection;
