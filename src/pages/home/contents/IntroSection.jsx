import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import React from "react";
import CountUp from "react-countup";
import { AiOutlineProject, AiOutlineFieldTime } from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";
const IntroSection = () => {
  return (
    <Container maxWidth="lg" sx={{}}>
      <Card>
        <CardContent
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            height: "fix-content",
            paddingTop: 3,
            gap: "30px",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <AiOutlineProject fontSize={30} />
            <Typography fontSize={20} fontWeight={600} ml={1}>
              <CountUp start={0} end={15} delay={0} />+
            </Typography>
            <Typography fontSize={20} fontWeight={600} mx={1}>
              Projects
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <AiOutlineFieldTime fontSize={30} />
            <Typography fontSize={20} fontWeight={600} ml={1}>
              <CountUp start={0} end={1000} delay={0} />+
            </Typography>
            <Typography fontSize={20} fontWeight={600} mx={1}>
              Coding Hours
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <GrTechnology fontSize={25} />
            <Typography fontSize={20} fontWeight={600} ml={1}>
              <CountUp start={0} end={10} delay={0} />+
            </Typography>
            <Typography fontSize={20} fontWeight={600} mx={1}>
              Technologies Used
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default IntroSection;
