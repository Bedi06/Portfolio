import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function AboutMe() {
  return (
    <Box
      id="about"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh" // Set the height to fill the viewport
    >
      <div>
        <Typography variant="h2" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1">
          Your about me content goes here.
        </Typography>
      </div>
    </Box>
  );
}

export default AboutMe;
