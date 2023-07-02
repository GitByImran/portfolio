import React, { useContext } from "react";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { providerContext } from "../provider/Provider";

const Footer = () => {
  const { isMobile } = useContext(providerContext);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container
      sx={{
        py: 5,
        display: "flex",
        justifyContent: "space-between",
        alignItems: isMobile && "center",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile && 1,
      }}
    >
      <Box sx={{ display: "flex", gap: "20px" }}>
        <Link
          to="#"
          style={{ textDecoration: "none", color: "#fff" }}
          onClick={handleScrollToTop}
        >
          Go top
        </Link>
        <Link
          to="https://github.com/GitByImran"
          target="_blank"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          Github
        </Link>
        <Link
          to="https://www.linkedin.com/in/imranhasanovi95/"
          target="_blank"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          LinkedIn
        </Link>
        <Link to="/about" style={{ textDecoration: "none", color: "#fff" }}>
          About
        </Link>
        <Link to="/contact" style={{ textDecoration: "none", color: "#fff" }}>
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
  );
};

export default Footer;
