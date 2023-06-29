import React from "react";
import { useForm } from "react-hook-form";
import { Container, TextField, Button } from "@mui/material";
import Title from "../shared/Title";

const MessageSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container maxWidth="sm">
      <Title title="Leave a message to me"></Title>
      <form
        style={{
          background: "#fff",
          borderRadius: 8,
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          label="Full Name"
          fullWidth
          {...register("fullname", { required: "Full name is required" })}
          error={Boolean(errors.fullname)}
          helperText={errors.fullname?.message}
        />

        <TextField
          label="Email"
          fullWidth
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
        />

        <TextField
          label="Message"
          fullWidth
          multiline
          rows={4}
          {...register("message")}
        />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Send
        </Button>
      </form>
    </Container>
  );
};

export default MessageSection;
