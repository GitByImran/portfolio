import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Container, Grid, Typography, TextField, Button } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Title from "../home/shared/Title";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Contact = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    sendEmail(data);
  };

  const sendEmail = (formData) => {
    emailjs
      .sendForm(
        "service_jsznqq4",
        "template_m2c49c9",
        form.current,
        "QHbRAeqqNQmNdvPu6"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            form.current.reset();
            Swal.fire({
              title:
                "I have got your email, thanks for visiting my website and try to contact.You will be emailed shortly to chat",
              width: 600,
              padding: "3em",
              color: "#34f1d8",
              background: "#253346",
              backdrop: `
                rgba(0,0,0,.6)
                url("/images/nyan-cat.gif")
                left top
                no-repeat
              `,
            });
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // useEffect(() => {
  //   document.title = "Contact - Imran";
  // }, []);

  return (
    <Container>
      <Helmet>
        <title>Contact - Imran</title>
      </Helmet>
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
              <Link
                to="mailto:imran.h.ovi.95@gmail.com"
                style={{ textDecoration: "none" }}
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
                  <EmailIcon /> imran.h.ovi.95@gmail.com
                </Typography>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to="https://www.linkedin.com/in/imranhasanovi95/"
                target="_blank"
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
                  <LinkedInIcon /> LinkedIn.com
                </Typography>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to="https://github.com/GitByImran"
                target="_blank"
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
                  <GitHubIcon /> Github.com
                </Typography>
              </Link>
              <Link
                to="https://wa.me/qr/C7IR5Q6I64YGL1"
                style={{ textDecoration: "none" }}
                target="_blank"
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
                  <WhatsAppIcon /> Whatsapp
                </Typography>
              </Link>
              <Link to="tel:+8801851442405" style={{ textDecoration: "none" }}>
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
                  <PhoneInTalkIcon /> +88 01851442405
                </Typography>
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  label="Name"
                  name="name"
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
                  name="email"
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
                  name="message"
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
                  type="submit"
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
