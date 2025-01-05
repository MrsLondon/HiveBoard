import "../style/Sidebar.css";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Divider,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BuildIcon from "@mui/icons-material/Build";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const drawerWidth = 240;
  return (
    // {/* Sidebar */}
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          bgcolor: "primary.light", // Sidebar background color
          color: "white", // Sidebar text color
          paddingTop: "38px",
        },
        //  mt: "140px", // Offset for Navbar (adjust based on Navbar height)
        p: 5,
      }}
    >
      <Toolbar />
      <Divider />

      <List>
        {[
          { text: "Home", icon: <HomeIcon />, path: "" },
          { text: "About", icon: <InfoIcon />, path: "/about" },
          { text: "Services", icon: <BuildIcon />, path: "" },
          { text: "Contact", icon: <ContactMailIcon />, path: "" },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
