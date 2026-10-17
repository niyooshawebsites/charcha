"use client";

import { useState } from "react";
import { Stack, Box, TextField, IconButton } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import UiButton from "@/components/ui/UiButton";
import Link from "next/link";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = ():void => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <Stack
        direction="column"
        spacing={3}
        component="form"
        noValidate
        autoComplete="off"
      >
        <Box className="flex items-center flex-end">
          <AlternateEmailIcon className="mr-1 my-0.5 text-blue-500" />
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

        <Box className="flex items-center flex-end relative">
          <VpnKeyIcon className="mr-1 my-0.5 text-blue-500" />
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
            className="absolute right-0 top-1/2 -translate-y-1/2"
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

      <Box className="mt-2">
        <Link href="/forgot-password" className="no-underline">
          Forgot password?
        </Link>
      </Box>
    </>
  );
};

export default LoginForm;
