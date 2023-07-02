import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "../Home.css";
import Title from "../shared/Title";

const WorkstepSection = () => {
  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Container sx={{ padding: "50px 0" }}>
        <Title title="how i build websites - " />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="workstep-card" onContextMenu={handleContextMenu}>
              <CardContent>
                <Typography
                  variant="h5"
                  color="#34f1d8"
                  fontWeight={700}
                  mb={2}
                >
                  Planning
                </Typography>
                <Typography variant="body1" color="#aaa" fontWeight={500}>
                  Understand the project requirements and goals. Identify the
                  target audience. Research and gather inspiration from existing
                  websites. Create a sitemap to outline the website structure.
                  Plan the content needed for each page.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="workstep-card" onContextMenu={handleContextMenu}>
              <CardContent>
                <Typography
                  variant="h5"
                  color="#34f1d8"
                  fontWeight={700}
                  mb={2}
                >
                  Design
                </Typography>
                <Typography variant="body1" color="#aaa" fontWeight={500}>
                  Create wireframes to sketch out the page layouts. Design the
                  user interface (UI) using appropriate colors, typography, and
                  visual elements. Obtain feedback and make revisions based on
                  the input.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="workstep-card" onContextMenu={handleContextMenu}>
              <CardContent>
                <Typography
                  variant="h5"
                  color="#34f1d8"
                  fontWeight={700}
                  mb={2}
                >
                  Development
                </Typography>
                <Typography variant="body1" color="#aaa" fontWeight={500}>
                  Set up the development environment with necessary tools. Build
                  the front-end using HTML, CSS, and JavaScript. Implement
                  interactivity and functionality using JavaScript or frameworks
                  like React or Angular. Optimize performance for fast loading
                  times.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="workstep-card" onContextMenu={handleContextMenu}>
              <CardContent>
                <Typography
                  variant="h5"
                  color="#34f1d8"
                  fontWeight={700}
                  mb={2}
                >
                  Integration of Content
                </Typography>
                <Typography variant="body1" color="#aaa" fontWeight={500}>
                  Add the planned content, such as text, images, videos, etc.,
                  to the appropriate sections of the website. Set up a content
                  management system (CMS) if required for easy content
                  management.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="workstep-card" onContextMenu={handleContextMenu}>
              <CardContent>
                <Typography
                  variant="h5"
                  color="#34f1d8"
                  fontWeight={700}
                  mb={2}
                >
                  Testing and Debugging
                </Typography>
                <Typography variant="body1" color="#aaa" fontWeight={500}>
                  Perform cross-browser and cross-device testing. Test the
                  functionality of forms, links, and interactive elements. Debug
                  and fix any issues or errors that arise during testing.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="workstep-card" onContextMenu={handleContextMenu}>
              <CardContent>
                <Typography
                  variant="h5"
                  color="#34f1d8"
                  fontWeight={700}
                  mb={2}
                >
                  Deployment and Maintenance
                </Typography>
                <Typography variant="body1" color="#aaa" fontWeight={400}>
                  Choose a hosting provider and upload the website files to the
                  server. Configure the domain name and DNS settings to make the
                  website accessible. Continually maintain and update the
                  website, fixing bugs, applying security patches, and making
                  content updates as needed.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default WorkstepSection;
