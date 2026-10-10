"use client";

import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import UiButton from "@/components/ui/UiButton";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Stack
      direction="column"
      spacing={3}
      component="form"
      noValidate
      autoComplete="off"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <AccountCircle
          sx={{
            color: "action.active",
            mr: 1,
            my: 0.5,
          }}
        />
        <TextField
          type="email"
          label="Email"
          variant="outlined"
          size="small"
          placeholder="john@example.com"
          fullWidth
          required
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          position: "relative",
        }}
      >
        <VpnKeyIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          type={showPassword ? "text" : "password"}
          label="Password"
          variant="outlined"
          size="small"
          placeholder="****"
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

      <UiButton
        type="submit"
        variant="contained"
        color="primary"
        btnText="Login"
        fullWidth={true}
      />
    </Stack>
  );
};

export default LoginForm;
