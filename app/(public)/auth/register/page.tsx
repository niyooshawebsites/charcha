import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import UiButton from "@/components/ui/UiButton";
import UiCard from "@/components/ui/UiCard";
import RegisterForm from "@/components/form/RegisterForm";

const RegisterPage = () => {
  return (
    <Box className="flex justify-center items-center">
      <UiCard customClass="bg-blue-100 p-3 w-100">
        <>
          <Typography variant="h4" className="mb-3">
            Register
          </Typography>
          <RegisterForm />
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

export default RegisterPage;
