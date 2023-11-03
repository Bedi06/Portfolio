import * as React from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List"; // Import List from Material-UI
import ListItem from "@mui/material/ListItem"; // Import ListItem from Material-UI
import Sheet from "@mui/joy/Sheet";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import PersonIcon from "@mui/icons-material/PersonOutline";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import WorkIcon from "@mui/icons-material/WorkOutline";
import ContactMailIcon from "@mui/icons-material/ContactMail";
function SideNav() {
  return (
    <Sheet className="SideNavContainer">
      <List>
        <ListItem>
          <Link to="/Home">
            <HomeIcon />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/AboutMe">
            <PersonIcon />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/Skills">
            <LibraryBooksIcon />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/Projects">
            <WorkIcon />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/ContactMe">
            <ContactMailIcon />
          </Link>
        </ListItem>
      </List>
    </Sheet>
  );
}

export default SideNav;
