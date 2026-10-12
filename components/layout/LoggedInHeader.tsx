"use client";

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";

const pages = [
  {
    name: "Vishay",
    link: "/vishay",
  },
];

const LoggedInHeader = () => {
  const [anchorElNav, setAnChorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnChorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnChorElNav(null);
  };

  return (
    <AppBar position="static" className="bg-purple-600">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Mobile menu */}
          <Box className="flex grow md:hidden">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              className="flex md:hidden"
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link href={`${page.link}`}>
                    <Typography className="text-center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Computer menu */}
          <Box className="hidden md:flex grow">
            <Box className="m-auto">
              {pages.map((page) => (
                <Link
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  href={`${page.link}`}
                  className="mx-4 text-gray-200 inline-block no-underline text-md hover:text-gray-50"
                >
                  {page.name}
                </Link>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default LoggedInHeader;
