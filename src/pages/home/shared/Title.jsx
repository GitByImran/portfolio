import { Box, Typography } from "@mui/material";
import React from "react";

const Title = ({ title }) => {
  return (
    <Box pt={5} pb={5} textAlign="center">
      <Typography
        fontSize={30}
        fontWeight={600}
        color="rgba(255,255,255,50%)"
        textTransform="capitalize"
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Title;
