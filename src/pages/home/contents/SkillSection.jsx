import React, { useContext, useState } from "react";

import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Tab,
  Tabs,
  Tooltip,
  Typography,
} from "@mui/material";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BsBootstrap } from "react-icons/bs";
import { BiLogoTailwindCss } from "react-icons/bi";
import { DiSass, DiCss3Full } from "react-icons/di";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import {
  SiMailgun,
  SiRedux,
  SiReactquery,
  SiAxios,
  SiMongodb,
  SiExpress,
  SiMui,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { providerContext } from "../../../provider/Provider";

import Title from "../shared/Title";

const FrontendSection = () => {
  const frontendData = [
    {
      icon: <AiOutlineHtml5 fontSize={75} color="#DF4A17" />,
      label: "HTML",
    },
    {
      icon: <DiCss3Full fontSize={75} color="#07B0CE" />,
      label: "CSS",
    },
    {
      icon: <BsBootstrap fontSize={75} color="#07B0CE" />,
      label: "Bootstrap",
    },
    {
      icon: <BiLogoTailwindCss fontSize={75} color="#1BAAB4" />,
      label: "Tailwind",
    },
    {
      icon: <SiMui fontSize={75} color="#007BF7" />,
      label: "Material UI",
    },
    {
      icon: <DiSass size={75} color="#C76494" />,
      label: "Sass",
    },
    {
      icon: <RiJavascriptFill fontSize={75} color="#E8D44D" />,
      label: "Javascript",
    },
    {
      icon: <FaReact fontSize={75} color="#04D0F3" />,
      label: "ReactJS",
    },
    {
      icon: <SiRedux fontSize={75} color="#7248B6" />,
      label: "Redux",
    },
    {
      icon: <TbBrandNextjs fontSize={75} color="#ffffff" />,
      label: "NextJS",
    },
  ];

  return (
    <Card sx={{ background: "none", boxShadow: "none !important" }}>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {frontendData.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box>{item.icon}</Box>
            <Typography color="#fff">{item.label}</Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

const BackendSection = () => {
  const backendData = [
    {
      icon: <RiJavascriptFill fontSize={75} color="#E8D44D" />,
      label: "Javascript",
    },
    {
      icon: <FaNodeJs fontSize={75} color="#83C532" />,
      label: "NodeJS",
    },
    {
      icon: <SiExpress fontSize={75} color="#ffffff" />,
      label: "ExpressJS",
    },
  ];

  return (
    <Card sx={{ background: "none", boxShadow: "none !important" }}>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {backendData.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box>{item.icon}</Box>
            <Typography color="#fff">{item.label}</Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

const DatabaseSection = () => {
  const databaseData = [
    {
      icon: <SiMongodb fontSize={75} color="#1F8630" />,
      label: "MongoDB",
    },
  ];

  return (
    <Card sx={{ background: "none", boxShadow: "none !important" }}>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {databaseData.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box>{item.icon}</Box>
            <Typography color="#fff">{item.label}</Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

const SkillSection = () => {
  const isMobile = useContext(providerContext);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Container>
      <Title title="I have skilled on- " />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center ",
          mb: 5,
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          indicatorColor="primary"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#34f1d8 !important",
            },
            "& .Mui-selected": {
              color: "#34f1d8 !important",
            },
          }}
        >
          <Tab
            label="Frontend"
            icon={<AiOutlineHtml5 fontSize={20} />}
            sx={{ color: "#fff" }}
          />
          <Tab
            label="Backend"
            icon={<FaNodeJs fontSize={20} />}
            sx={{ color: "#fff" }}
          />
          <Tab
            label="Database"
            icon={<FaReact fontSize={20} />}
            sx={{ color: "#fff" }}
          />
        </Tabs>
      </Box>
      {activeTab === 0 && <FrontendSection />}
      {activeTab === 1 && <BackendSection />}
      {activeTab === 2 && <DatabaseSection />}
    </Container>
  );
};

export default SkillSection;
