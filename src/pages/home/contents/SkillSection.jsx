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
import { BiLogoTailwindCss, BiLogoFirebase, BiLogoTypescript } from "react-icons/bi";
import { DiSass, DiCss3Full } from "react-icons/di";
import { FaNodeJs, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { RiJavascriptFill, RiToolsLine } from "react-icons/ri";
import { SiMongoose } from "react-icons/si";
import {
  SiMailgun,
  SiRedux,
  SiReactquery,
  SiAxios,
  SiMongodb,
  SiExpress,
  SiMui,
  SiGnubash,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandVscode } from "react-icons/tb";
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
      icon: <BiLogoTypescript fontSize={75} color="#07B0CE" />,
      label: "Typescript",
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
          gap: "50px",
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
      icon: <FaNodeJs fontSize={75} color="#83C532" />,
      label: "NodeJS",
    },
    {
      icon: <SiExpress fontSize={75} color="#ffffff" />,
      label: "ExpressJS",
    },
    {
      icon: <BiLogoFirebase fontSize={75} color="#F7C427" />,
      label: "Firebase",
    },
    {
      icon: <SiMongodb fontSize={75} color="#1F8630" />,
      label: "MongoDB",
    },
    {
      icon: <SiMongoose fontSize={75} color="#E84D31" />,
      label: "Mongoose",
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
          gap: "50px",
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
      icon: <TbBrandVscode fontSize={75} color="#2D9EEA" />,
      label: "VS Code",
    },
    {
      icon: <SiGnubash fontSize={75} color="#fff" />,
      label: "Bash",
    },
    {
      icon: <FiFigma fontSize={75} color="#F76F5E" />,
      label: "Figma",
    },
    {
      icon: <FaGitAlt fontSize={75} color="#E84D31" />,
      label: "Git",
    },
    {
      icon: <FaGithub fontSize={75} color="#E84D31" />,
      label: "Github",
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
          gap: "50px",
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
            label="Tools"
            icon={<RiToolsLine fontSize={20} />}
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
