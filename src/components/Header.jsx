import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Container,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "../index.css";

const Header = () => {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const [activePath, setActivePath] = useState("");
  const location = useLocation();

  const handleDropdown = () => {
    setdropdownOpen(true)
  }

  const handleClose = () => {
    setdropdownOpen(false)
  }


  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  const menuLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  const renderMenuLinks = () => {
    return menuLinks.map((link, index) => (
      <ListItem
        button
        component={NavLink}
        to={link.path}
        key={index}
        onClick={() => setActivePath(link.path)}
        style={{
          borderBottom: activePath === link.path ? "3px solid #34f1d8" : "",
        }}
      >
        <ListItemText primary={link.label} />
      </ListItem>
    ));
  };

  return (
    <AppBar
      position="static"
      sx={{ background: "transparent", boxShadow: "none" }}
    >
      <Toolbar>
        <Container sx={{ display: "flex", alignItems: "center" }}>
          {!isSmScreen ? (
            <>
              <Typography
                variant="h5"
                component="div"
                fontWeight={700}
                textTransform="uppercase"
                sx={{ flexGrow: 1 }}
              >
                <span>&lt; imran /&gt;</span>
              </Typography>
              <List sx={{ display: "flex" }}>{renderMenuLinks()}</List>
            </>
          ) : (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                  onClick={handleDropdown}
                sx={{ marginRight: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                fontWeight={700}
                textTransform="uppercase"
                sx={{ flexGrow: 1, textAlign: isSmScreen ? "right" : "left" }}
              >
                <span>&lt; imran /&gt;</span>
              </Typography>
                <Menu
                  id="basic-menu"
                  anchorEl={dropdownOpen}
                  open={dropdownOpen}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                  className="dropdown-menu"
                  sx={{
                    '& .MuiPaper-elevation': {
                      top: '50px !important',
                      left: ' 30px!important'
                    },
                  }}
                >
                  {menuLinks.map((menu, index) =>
                    <MenuItem key={index} onClick={handleClose}>
                      <NavLink to={menu.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                        {menu.label}
                      </NavLink>
                    </MenuItem>
                  )}
                </Menu>
            </>
          )}
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
