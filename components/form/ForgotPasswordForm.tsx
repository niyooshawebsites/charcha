import React from "react";
import { Stack, Box, TextField } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import UiButton from "../ui/UiButton";

const ForgotPasswordForm = () => {
  return (
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
          placeholder="Enter registered email"
          variant="outlined"
          size="small"
          fullWidth
          required
        />
      </Box>

      <UiButton
        type="submit"
        variant="contained"
        color="primary"
        btnText="Submit"
        fullWidth={true}
      />
    </Stack>
  );
};

export default ForgotPasswordForm;
