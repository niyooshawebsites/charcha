import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AccountCircle from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

const LoginForm = () => {
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
          type="email"
          label="Email"
          variant="outlined"
          size="small"
          placeholder="john@example.com"
          fullWidth
          required
        />
      </Box>

      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <VpnKeyIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          size="small"
          placeholder="****"
          fullWidth
          required
        />
      </Box>

      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
    </Stack>
  );
};

export default LoginForm;
