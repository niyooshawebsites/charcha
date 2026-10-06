import LoginCard from "@/components/ui/LoginCard";
import Box from "@mui/material/Box";

const LoginPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginCard />
    </Box>
  );
};

export { LoginPage };
