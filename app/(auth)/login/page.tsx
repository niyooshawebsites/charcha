import UiCard from "@/components/ui/UiCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LoginForm from "@/components/form/LoginForm";
import UiButton from "@/components/ui/UiButton";

const LoginPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UiCard width={"50%"}>
        <>
          <Typography variant="h4"> Login </Typography>
          <LoginForm />
          <Typography variant="h6" align="center" sx={{ my: 2 }}>
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
