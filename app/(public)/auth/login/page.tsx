import UiCard from "@/components/ui/UiCard";
import { Box, Typography } from "@mui/material";
import LoginForm from "@/components/form/LoginForm";
import UiButton from "@/components/ui/UiButton";

const LoginPage = () => {
  return (
    <Box className="flex justify-center items-center">
      <UiCard customClass="bg-blue-100 p-3 w-100">
        <>
          <Typography variant="h4" className="mb-3">
            Login
          </Typography>
          <LoginForm />
          <Typography variant="h6" className="my-2 text-center">
            OR
          </Typography>
          <UiButton
            type="button"
            variant="contained"
            color="secondary"
            fullWidth={true}
            btnText="Continue  with Google"
          />
        </>
      </UiCard>
    </Box>
  );
};

export { LoginPage };
