import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Grid,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { projectsData } from "./Projects";

const ProjectDetails = () => {
  const { id } = useParams();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = projectsData.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: "2rem" }}>
      <Card sx={{ background: "none", boxShadow: "none !important" }}>
        <CardMedia
          component="img"
          height="400"
          image={project.image}
          alt={project.name}
          sx={{
            objectFit: "cover",
            objectPosition: "top",
            overflow: "hidden",
            borderRadius: "5px !important",
            border: "5px solid #fff",
          }}
        />
        <CardContent>
          <Typography
            variant="h4"
            color="#fff"
            fontWeight="bold"
            component="div"
            mb={2}
          >
            {project.name}
          </Typography>
          <Typography variant="body2" color="#fff" mb={2}>
            Technologies Used:
          </Typography>
          <Box sx={{ display: "flex", gap: "0.5rem" }}>
            {project.technologies.map((technology, index) => (
              <Typography
                key={index}
                variant="body2"
                color="#fff"
                sx={{
                  boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                  padding: "5px 20px",
                  borderRadius: "5px",
                }}
              >
                {technology}
              </Typography>
            ))}
          </Box>
          <Typography variant="body2" color="#fff" mt={2}>
            Description:
          </Typography>
          <Typography variant="h5" color="#aaa" fontWeight="bold" mt={2}>
            Screenshots :
          </Typography>
        </CardContent>
        <CardContent>
          <Grid container spacing={2}>
            {project.screenShots.map((ss, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card onClick={() => openLightbox(index)}>
                  <img
                    src={ss}
                    alt=""
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      objectPosition: "top",
                      cursor: "pointer",
                    }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
      <Dialog
        open={lightboxOpen}
        onClose={closeLightbox}
        maxWidth="md"
        fullWidth
        sx={{ "& .MuiDialog-paper": { overflow: "hidden" } }}
      >
        <DialogTitle>Screenshot</DialogTitle>
        <DialogContent sx={{ width: "100%", height: "100%", p: 0 }}>
          <img
            src={project.screenShots[currentImageIndex]}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default ProjectDetails;
