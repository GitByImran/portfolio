import React from "react";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <Container
        sx={{ py: 5, display: "flex", justifyContent: "space-between" }}
      >
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Link to="" style={{ textDecoration: "none", color: "#fff" }}>
            Home
          </Link>
          <Link to="" style={{ textDecoration: "none", color: "#fff" }}>
            Github
          </Link>
          <Link to="" style={{ textDecoration: "none", color: "#fff" }}>
            LinkedIn
          </Link>
          <Link to="" style={{ textDecoration: "none", color: "#fff" }}>
            About
          </Link>
          <Link to="" style={{ textDecoration: "none", color: "#fff" }}>
            Contact
          </Link>
        </Box>
        <Box>
          <Typography color="#fff"></Typography>
        </Box>
        <Box>
          <Typography color="#fff">&copy; All rights reserved</Typography>
        </Box>
      </Container>
    </Container>
  );
};

export default Footer;
