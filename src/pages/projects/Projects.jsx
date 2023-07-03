import React, { useEffect } from "react";
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
import Title from "../home/shared/Title";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export const projectsData = [
  {
    id: 1,
    name: "Legend Toy Universe",
    image:
      "https://i.ibb.co/z44HRR5/screencapture-legends-toy-universe-web-app-2023-06-30-22-07-52.png",
    githubLink: "https://github.com/GitByImran/legends-toy-universe.git",
    liveLink: "https://legends-toy-universe.web.app/",
    summary:
      "This single-page application serves as a platform to showcase action series toys from popular franchises like Marvel, Star Wars, DC, and Guardians. It offers several routes for navigation, including the Home page, which displays toys organized by categories using tabs. The All Toys page provides a comprehensive collection of toys added by different users. Users who are logged in have the option to add their own toys for sale through the Add Toy page. The My Toys page allows logged-in users to manage and view their personal collection of added toys. Additionally, the application features a blog page for relevant content. Overall this application provides a convenient and immersive experience for toy enthusiasts to explore, contribute, and interact with the action series toy community.",
    technologies: [
      "Bootstrap",
      "Vanilla Css",
      "React",
      "Vite",
      "Express.js",
      "MongoDB",
    ],
    screenShots: [
      "https://i.ibb.co/7N21ftK/screencapture-legends-toy-universe-web-app-mytoys-2023-07-01-20-25-13.png",
      "https://i.ibb.co/SB4xwCf/screencapture-legends-toy-universe-web-app-addtoy-2023-07-01-20-24-59.png",
      "https://i.ibb.co/mvxcVm3/screencapture-legends-toy-universe-web-app-register-2023-07-01-20-21-01.png",
      "https://i.ibb.co/84jSXsg/screencapture-legends-toy-universe-web-app-login-2023-07-01-20-20-47.png",
      "https://i.ibb.co/BTH2gGS/screencapture-legends-toy-universe-web-app-2023-07-01-20-23-50.png",
      "https://i.ibb.co/bFK7Trh/screencapture-legends-toy-universe-web-app-blog-2023-07-01-20-20-24.png",
      "https://i.ibb.co/D9Twkdg/screencapture-legends-toy-universe-web-app-alltoys-2023-07-01-20-20-08.png",
      "https://i.ibb.co/GQBRDvg/screencapture-legends-toy-universe-web-app-2023-07-01-20-19-46.png",
      "https://i.ibb.co/cYFSkdw/screencapture-legends-toy-universe-web-app-2023-06-30-22-07-52.png",
      "https://i.ibb.co/jrrZMM5/screencapture-legends-toy-universe-web-app-2023-06-30-22-07-52.png",
      "https://i.ibb.co/2PV10nM/image.png",
    ],
  },
  {
    id: 2,
    name: "Foodian",
    image:
      "https://i.ibb.co/g3Rn7Wg/screencapture-chef-recipe-hunter-c8ddf-web-app-2023-06-30-22-07-35.png",
    githubLink: "https://github.com/GitByImran/foodian-client.git",
    liveLink: "https://chef-recipe-hunter-c8ddf.web.app/",
    summary:
      "This single-page React application provides an immersive experience for users to explore chef recipes from a specific cuisine. It offers features such as user authentication, responsive design, lazy loading, a custom 404 page, a fun PDF creation, and a blogs page. These features showcase the power and versatility of React in building dynamic web applications.",
    technologies: [
      "Bootstrap",
      "Vanilla Css",
      "React",
      "Vite",
      "Express.js",
      "MongoDB",
    ],
    screenShots: [
      "https://i.ibb.co/SKwKcKf/screencapture-chef-recipe-hunter-c8ddf-web-app-2023-07-01-20-16-15.png",
      "https://i.ibb.co/mRmprcG/screencapture-chef-recipe-hunter-c8ddf-web-app-blog-2023-07-01-20-16-40.png",
      "https://i.ibb.co/QHcBZvK/screencapture-chef-recipe-hunter-c8ddf-web-app-2023-07-01-20-18-18.png",
      "https://i.ibb.co/MNyd5zg/screencapture-chef-recipe-hunter-c8ddf-web-app-login-2023-07-01-20-16-56.png",
      "https://i.ibb.co/MSYw4Sp/screencapture-chef-recipe-hunter-c8ddf-web-app-register-2023-07-01-20-17-13.png",
      "https://i.ibb.co/JsDC1Sw/screencapture-chef-recipe-hunter-c8ddf-web-app-recipe-1-2023-07-01-20-18-48.png",
    ],
  },
  {
    id: 3,
    name: "Higher Hires",
    image:
      "https://i.ibb.co/10kL9vp/screencapture-higherhires-netlify-app-2023-06-30-22-06-57.png",
    githubLink: "https://github.com/GitByImran/Job-hunter.git",
    liveLink: "https://higherhires.netlify.app/",
    technologies: ["Bootstrap", "Vanilla Css", "React", "Vite"],
    summary:
      "This single-page application consists of various routes for navigation. The default Home route includes a banner, job category list, and a featured job list. The Statistics route presents assignment names and marks in an area chart format. The Applied route displays a list of applied jobs and their overviews, with the ability to filter by job type. The Blogs route provides a Q&A page. Lastly, the Details route is dynamic and allows users to view job details and apply for jobs, adding them to the applied job list. Overall, this application offers a seamless user experience with different routes catering to specific functionalities and information display.",
    screenShots: [
      "https://i.ibb.co/10kL9vp/screencapture-higherhires-netlify-app-2023-06-30-22-06-57.png",
      "https://i.ibb.co/wcq2SqF/screencapture-higherhires-netlify-app-applieds-2023-07-01-20-15-18.png",
      "https://i.ibb.co/sjN8dBj/screencapture-higherhires-netlify-app-statistics-2023-07-01-20-15-02.png",
      "https://i.ibb.co/7vjvXmZ/screencapture-higherhires-netlify-app-blogs-2023-07-01-20-15-30.png",
    ],
  },
];

const Projects = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  //   useEffect(() => {
  //   document.title = "About - Imran";
  // }, []);

  let itemsPerRow;
  if (isSmallScreen) {
    itemsPerRow = 1;
  } else if (isMediumScreen) {
    itemsPerRow = 2;
  } else {
    itemsPerRow = 3;
  }

  return (
    <Container>
      <Helmet>
        <title>Projects - Imran</title>
      </Helmet>
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
  );
};

export default Projects;
