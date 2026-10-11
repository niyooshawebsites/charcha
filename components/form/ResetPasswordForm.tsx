"use client";

import { useState } from "react";
import { Stack, Box, TextField, IconButton } from "@mui/material";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import UiButton from "@/components/ui/UiButton";

const ResetPasswordForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
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

        <Box className="flex items-center flex-end relative">
          <VpnKeyIcon className="mr-1 my-0.5 text-blue-500" />
          <TextField
            type={showConfirmPassword ? "text" : "password"}
            label="Confirm Password"
            variant="outlined"
            size="small"
            placeholder="****"
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

        <UiButton
          type="submit"
          variant="contained"
          color="primary"
          btnText="Reset"
          fullWidth={true}
        />
      </Stack>
    </>
  );
};

export default ResetPasswordForm;
