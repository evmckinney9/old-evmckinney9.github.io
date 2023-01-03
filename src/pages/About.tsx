import React, { ReactElement, FC, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Typed from "typed.js";

const About: FC<any> = (): ReactElement => {
  useEffect(() => {
    var options = {
      strings: [
        "I am a graduate student at the University of Pittsburgh.",
        "I am a computer engineer, with a background in physics and math.",
        "I am a programmer, fluent in Python, Java, and C.",
      ],
      typeSpeed: 60,
      backSpeed: 45,
      loop: true,
      loopCount: Infinity,
      smartBackspace: true
    };

    new Typed(".element", options);
  }, []);

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "primary.main",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography className="element" style={{ fontSize: "25px", fontFamily: "Consolas" }}></Typography>

    </Box>
  );
};

export default About;

