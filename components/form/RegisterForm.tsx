"use client";

import React, { useState } from "react";
import { Stack, Box, TextField, Button } from "@mui/material";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [passwordMismatch, setPasswordMismatch] = useState<boolean>(true);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <Stack
      direction="column"
      spacing={3}
      component="form"
      noValidate
      autoComplete="off"
    >
      <Box className="flex items-center flex-end">
        <PersonIcon className="mr-1 my-0.5 text-blue-500" />
        <TextField
          type="text"
          label="Username"
          variant="outlined"
          size="small"
          placeholder="john"
          name="username"
          fullWidth
          required
        />
      </Box>

      <Box className="flex items-center flex-end">
        <AlternateEmailIcon className="mr-1 my-0.5 text-blue-500" />
        <TextField
          type="email"
          label="email"
          variant="outlined"
          size="small"
          placeholder="john@example.com"
          name="email"
          fullWidth
          required
        />
      </Box>

      <Box className="flex items-center flex-end relative">
        <VpnKeyIcon className="mr-1 my-0.5 text-blue-500" />
        <TextField
          type={`${showPassword ? "text" : "password"}`}
          label="Password"
          variant="outlined"
          size="small"
          placeholder="****"
          name="password"
          fullWidth
          required
        />
        <IconButton
          onClick={toggleShowPassword}
          className="absolute right-0 top-1/2 -translate-y-1/2"
        >
          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
      </Box>

      <Box className="flex items-center flex-end relative">
        <VpnKeyIcon className="mr-1 my-0.5 text-blue-500" />
        <TextField
          type={`${showConfirmPassword ? "text" : "password"}`}
          label="Confirm Password"
          variant="outlined"
          size="small"
          placeholder="****"
          name="confirmPassword"
          fullWidth
          required
        />
        <IconButton
          onClick={toggleShowConfirmPassword}
          className="absolute right-0 top-1/2 -translate-y-1/2"
        >
          {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
      </Box>

      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </Stack>
  );
};

export default RegisterForm;
