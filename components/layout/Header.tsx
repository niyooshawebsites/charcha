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
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ForumIcon from "@mui/icons-material/Forum";
import Link from "next/link";

const pages = [
  {
    name: "Login",
    link: "/",
  },
  {
    name: "Register",
    link: "/register",
  },
  {
    name: "Forgot Password",
    link: "/forgot-password",
  },
  {
    name: "Reset Password",
    link: "/reset-password/fgfgf",
  },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [anchorElNav, setAnChorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnChorElNav(e.currentTarget);
  };

  const handleOpenUserMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnChorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const stringToColor = (string: string) => {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  };

  const stringAvatar = (name: string) => {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Mobile menu */}
          <ForumIcon className="hidden md:flex mr-1" />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="../../app/page.tsx"
            className="mr-4 hidden md:flex font-inherit tracking-[.3rem] text-inherit no-underline"
          >
            CHARCHA
          </Typography>

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
          <ForumIcon className="flex md:hidden mr-1" />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            className="mr-2 flex md:hidden grow font-inherit tracking-[.3rem] text-inherit no-underline"
          >
            CHARCHA
          </Typography>

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

          {/* User menu */}
          <Box className="grow-0">
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} className="p-0">
                {/* <Avatar alt="Babai Bose" src="/static/images/avatar/2.jpg" /> */}
                <Avatar {...stringAvatar("Babai Bose")} />
              </IconButton>
            </Tooltip>

            <Menu
              className="mt-3"
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography className="text-center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
