// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";

import React from "react";
import { Typography, AppBar, Toolbar, Box } from "@mui/material";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar() {
  return (
    //    {/* Header */}

    <AppBar
      position="fixed"
      sx={{
        bgcolor: "primary.main",
        zIndex: (theme) => theme.zIndex.drawer + 1, // Ensure Navbar is above the Sidebar
      }}
    >
      <Toolbar>
        <Box
          component="img"
          src={logo}
          alt="Website Logo"
          sx={{
            height: 100, // Adjust height as needed
            width: "auto",
            mr: 2,
            padding: "0.5rem",
            transition: "filter 0.3s ease",
            "&:hover": {
              filter: "brightness(0.8)",
            },
          }}
        />

        {/* Avatar or Icon */}
        <IconButton color="inherit">
          <Avatar>
            <AccountCircleIcon />
          </Avatar>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
