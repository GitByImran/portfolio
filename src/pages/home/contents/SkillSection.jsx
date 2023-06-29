import React, { useContext } from "react";
import Marquee from "react-fast-marquee";
import { Box, Container, Tooltip } from "@mui/material";
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

const SkillSection = () => {
  const isMobile = useContext(providerContext);

  const icons = [
    { icon: <AiOutlineHtml5 size={75} color="#DF4A17" />, percentage: "87" },
    { icon: <DiCss3Full size={75} color="#1579B8" />, percentage: "78" },
    { icon: <DiSass size={75} color="#F7F7F7" />, percentage: "56" },
    { icon: <BsBootstrap size={75} color="#07B0CE" />, percentage: "57" },
    { icon: <BiLogoTailwindCss size={75} color="#1BAAB4" />, percentage: "67" },
    { icon: <SiMui size={75} color="#007BF7" />, percentage: "54" },
    { icon: <RiJavascriptFill size={75} color="#E8D44D" />, percentage: "56" },
    { icon: <FaReact size={75} color="#04D0F3" />, percentage: "54" },
    { icon: <SiRedux size={75} color="#7248B6" />, percentage: "35" },
    { icon: <SiReactquery size={75} color="#F73F51" />, percentage: "57" },
    { icon: <SiAxios size={75} color="#813F90" />, percentage: "56" },
    { icon: <TbBrandNextjs size={75} color="#ffffff" />, percentage: "45" },
    { icon: <FaNodeJs size={75} color="#83C532" />, percentage: "78" },
    { icon: <SiExpress size={75} color="#ffffff" />, percentage: "45" },
    { icon: <SiMongodb size={75} color="#1F8630" />, percentage: "29" },
  ];

  return (
    <Container>
      <Title title="i have been working with - " />
      <Marquee>
        <Box sx={{ display: "flex", gap: "30px" }}>
          {icons.map((icon, index) => (
            <Tooltip key={index} title={icon.percentage}>
              <div>{icon.icon}</div>
            </Tooltip>
          ))}
        </Box>
      </Marquee>
    </Container>
  );
};

export default SkillSection;
