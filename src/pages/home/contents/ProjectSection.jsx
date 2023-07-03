import React, { useState } from "react";
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  CardActions,
  Box,
  Grid,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { projectsData } from "../../projects/Projects";
import Title from "../shared/Title";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init();

const ProjectSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  let itemsPerRow;
  if (isSmallScreen) {
    itemsPerRow = 1;
  } else if (isMediumScreen) {
    itemsPerRow = 2;
  } else {
    itemsPerRow = 3;
  }

  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <Container>
        <Title title="My Projects"></Title>
        <Grid container spacing={2}>
          {projectsData.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Card
                sx={{
                  marginBottom: 2,
                  background: "transparent",
                  boxShadow: "0px 0px 25px rgba(0,0,0,30%) !important",
                }}
              >
                <Box>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.name}
                    sx={{
                      cursor: "pointer",
                      objectFit: "cover",
                      objectPosition: "top",
                      transition: "5s ease-in-out",
                      "&:hover": {
                        objectPosition: "bottom",
                      },
                    }}
                  />
                </Box>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight={600}
                    color="#fff"
                    my={2}
                  >
                    {project.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="#fff"
                    display="flex"
                    flexWrap="wrap"
                    alignItems="center"
                    gap={1}
                  >
                    {project.technologies.map((technology, index) => (
                      <span
                        key={index}
                        style={{
                          boxShadow: "0 0 10px #fff2",
                          padding: "5px 20px",
                          borderRadius: "5px",
                        }}
                      >
                        {technology}
                      </span>
                    ))}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0  16px !important",
                  }}
                >
                  <Box>
                    <IconButton
                      component={Link}
                      to={project.liveLink}
                      target="_blank"
                    >
                      <PlayCircleIcon
                        sx={{
                          fontSize: "30px",
                          color: "#fff",
                          "&:hover": { color: "#fff5" },
                        }}
                      />
                    </IconButton>
                    <IconButton
                      component={Link}
                      to={project.githubLink}
                      target="_blank"
                    >
                      <GitHubIcon
                        sx={{
                          fontSize: "30px",
                          color: "#fff",
                          "&:hover": { color: "#fff5" },
                        }}
                      />
                    </IconButton>
                  </Box>
                  <Box>
                    <Button
                      component={Link}
                      to={`/projects/${project.id}`}
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
                      Details
                    </Button>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ProjectSection;
