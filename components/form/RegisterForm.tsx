"use client";

import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AccountCircle from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

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
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
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

      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
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

      <Box
        sx={{ display: "flex", alignItems: "flex-end", position: "relative" }}
      >
        <VpnKeyIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
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
          sx={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
      </Box>

      <Box
        sx={{ display: "flex", alignItems: "flex-end", position: "relative" }}
      >
        <VpnKeyIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          type={`${showConfirmPassword ? "text" : "password"}`}
          label="Password"
          variant="outlined"
          size="small"
          placeholder="****"
          name="confirmPassword"
          fullWidth
          required
        />
        <IconButton
          onClick={toggleShowConfirmPassword}
          sx={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
      </Box>

      <Button type="submit" variant="contained" color="primary"></Button>
    </Stack>
  );
};

export default RegisterForm;
