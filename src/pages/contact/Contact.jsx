import React from "react";
import { useForm } from "react-hook-form";
import { Container, Grid, Typography, TextField, Button } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import Title from "../home/shared/Title";
import { Link } from "react-router-dom";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Title title="Contact Me"></Title>
      <Container
        maxWidth="md"
        sx={{
          padding: "35px 20px !important",
          boxShadow: "0 0 25px rgba(255,255,255,10%)",
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <div>
              <Typography variant="h6" color="rgba(255,255,255,70%)" mt={1}>
                If you want to work together on a project or just leave a
                message, please don't hesitate to contact me via contact
                information below.
              </Typography>
              <Link style={{ textDecoration: "none" }}>
                <Typography
                  variant="body1"
                  display="flex"
                  alignItems="center"
                  gap={1}
                  my={2}
                  fontSize={20}
                  fontWeight={400}
                  color="rgba(255,255,255,70%)"
                >
                  <EmailIcon /> imran.h.ovi.95@gmail.com
                </Typography>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to="https://www.linkedin.com/in/imranhasanovi95/"
              >
                <Typography
                  variant="body1"
                  display="flex"
                  alignItems="center"
                  gap={1}
                  my={2}
                  fontSize={20}
                  fontWeight={400}
                  color="rgba(255,255,255,70%)"
                >
                  <LinkedInIcon /> .../ to linkedin
                </Typography>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <Typography
                  variant="body1"
                  display="flex"
                  alignItems="center"
                  gap={1}
                  my={2}
                  fontSize={20}
                  fontWeight={400}
                  color="rgba(255,255,255,70%)"
                >
                  <GitHubIcon /> .../ to github
                </Typography>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <Typography
                  variant="body1"
                  display="flex"
                  alignItems="center"
                  gap={1}
                  my={2}
                  fontSize={20}
                  fontWeight={400}
                  color="rgba(255,255,255,70%)"
                >
                  <PhoneInTalkIcon /> 123-456-7890
                </Typography>
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  label="Name"
                  {...register("name", { required: true })}
                  error={!!errors.name}
                  helperText={errors.name && "Name is required"}
                  fullWidth
                  margin="normal"
                  // variant="standard"
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                  InputProps={{
                    style: {
                      color: "white",
                    },
                  }}
                />
                <TextField
                  label="Email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  error={!!errors.email}
                  helperText={
                    errors.email
                      ? errors.email.type === "required"
                        ? "Email is required"
                        : "Invalid email format"
                      : ""
                  }
                  fullWidth
                  margin="normal"
                  // variant="standard"
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                  inputProps={{
                    style: { color: "white" },
                  }}
                />
                <TextField
                  label="Message"
                  {...register("message", { required: true })}
                  error={!!errors.message}
                  helperText={errors.message && "Message is required"}
                  fullWidth
                  margin="normal"
                  // variant="standard"
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                  inputProps={{
                    style: { color: "white" },
                  }}
                  multiline
                  rows={4}
                />
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
                  Send Message
                </Button>
              </form>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Contact;
