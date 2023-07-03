import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Container, TextField, Button } from "@mui/material";
import Title from "../shared/Title";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const MessageSection = () => {
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
                "I have got your email, thanks for visiting my website and share your feedback.",
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
  return (
    <Container maxWidth="sm">
      <Title title="Leave a feedback to me"></Title>
      <form
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        style={{ background: "#fff", borderRadius: "8px", padding: "20px" }}
      >
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
            style: { color: "#000" },
          }}
          InputProps={{
            style: {
              color: "#000",
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
            style: { color: "#000" },
          }}
          inputProps={{
            style: { color: "#000" },
          }}
        />
        <TextField
          label="Feedback"
          name="message"
          {...register("message", { required: true })}
          error={!!errors.message}
          helperText={errors.message && "Message is required"}
          fullWidth
          margin="normal"
          // variant="standard"
          InputLabelProps={{
            style: { color: "#000" },
          }}
          inputProps={{
            style: { color: "#000" },
          }}
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Send
        </Button>
      </form>
    </Container>
  );
};

export default MessageSection;
