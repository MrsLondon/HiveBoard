import "../style/Footer.css";
import React from "react";
import { Typography, IconButton, Tooltip, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const drawerWidth = 240;
  return (
    /* Footer */
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "black",
        textAlign: "center",
        p: 2,
        position: "fixed",
        bottom: 0,
        left: drawerWidth,
        marginTop: 2,
        width: `calc(100% - ${drawerWidth}px)`,
      }}
    >
      <Tooltip title="Visit GitHub Repository">
        <IconButton
          component="a"
          href="https://github.com/MrsLondon/HiveBoard"
          target="_blank"
          rel="noopener noreferrer"
          color="secondary.main"
          aria-label="GitHub repository"
        >
          <GitHubIcon fontSize="large" />

          <Typography variant="body1">Visit GitHub Repository</Typography>
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default Footer;
