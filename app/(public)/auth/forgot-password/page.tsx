import { Box, Typography } from "@mui/material";
import ForgotPasswordForm from "@/components/form/ForgotPasswordForm";
import UiCard from "@/components/ui/UiCard";

const ForgotPasswordPage = () => {
  return (
    <Box className="flex justify-center items-center">
      <UiCard customClass="bg-blue-100 p-3 w-100">
        <>
          <Typography variant="h4" className="mb-3">
            Forgot Password
          </Typography>
          <ForgotPasswordForm />
        </>
      </UiCard>
    </Box>
  );
};

export default ForgotPasswordPage;
