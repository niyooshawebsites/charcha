"use client";

import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import QuickreplyIcon from "@mui/icons-material/Quickreply";
import HomeIcon from "@mui/icons-material/Home";
import ReplyIcon from "@mui/icons-material/Reply";
import ForumIcon from "@mui/icons-material/Forum";
import QuizIcon from "@mui/icons-material/Quiz";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Groups3Icon from "@mui/icons-material/Groups3";
import ListAltIcon from "@mui/icons-material/ListAlt";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
  Tooltip,
  Avatar,
} from "@mui/material";

interface PageItem {
  name: string;
  link: string;
  icon: React.ReactNode;
}

const pages: PageItem[] = [
  {
    name: "Home",
    link: "/",
    icon: <HomeIcon className="text-4xl" />,
  },
  {
    name: "Followers",
    link: "/followers",
    icon: <Groups3Icon className="text-4xl" />,
  },
  {
    name: "Following",
    link: "/following",
    icon: <ListAltIcon className="text-4xl" />,
  },
  {
    name: "Questions",
    link: "/questions",
    icon: <QuizIcon className="text-4xl" />,
  },
  {
    name: "Answer",
    link: "/answer",
    icon: <ReplyIcon className="text-4xl" />,
  },
  {
    name: "Lanes",
    link: "/lanes",
    icon: <ForumIcon className="text-4xl" />,
  },
  {
    name: "Notifications",
    link: "/fotifications",
    icon: <NotificationsActiveIcon className="text-4xl" />,
  },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const LoggedInHeader = () => {
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
          <Box className="flex border p-1 rounded-lg justify-evenly items-center">
            <QuickreplyIcon className="hidden md:flex mr-3 text-4xl" />

            <Typography
              variant="h4"
              noWrap
              component="a"
              href="/"
              className="hidden md:flex font-inherit tracking-[.3rem] text-inherit no-underline"
            >
              {`${process.env.NEXT_PUBLIC_APP_NAME}`}
            </Typography>
          </Box>

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
                  <Tooltip title={page.name}>
                    <Link href={`${page.link}`}>{page.icon}</Link>
                  </Tooltip>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Computer menu */}

          <Box className="flex border p-1 rounded-lg justify-evenly items-center md:hidden">
            <QuickreplyIcon className="hidden md:flex mr-3 text-4xl" />

            <Typography
              variant="h4"
              noWrap
              component="a"
              href="/"
              className="hidden md:flex font-inherit tracking-[.3rem] text-inherit no-underline"
            >
              {`${process.env.NEXT_PUBLIC_APP_NAME}`}
            </Typography>
          </Box>

          <Box className="hidden md:flex grow">
            <Box className="m-auto">
              {pages.map((page) => (
                <Tooltip title={page.name} key={page.name}>
                  <Link
                    href={`${page.link}`}
                    onClick={handleCloseNavMenu}
                    className="mx-4 text-gray-200 inline-block no-underline text-md hover:text-gray-50"
                  >
                    {page.icon}
                  </Link>
                </Tooltip>
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

export default LoggedInHeader;
