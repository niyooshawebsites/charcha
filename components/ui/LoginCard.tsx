import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LoginForm from "@/components/form/LoginForm";
import Button from "@mui/material/Button";

const LoginCard = () => {
  return (
    <Card sx={{ width: "50%", p: 3 }} variant="outlined">
      <CardContent>
        <Typography variant="h4" sx={{ marginBottom: "30px" }}>
          Login
        </Typography>
        <LoginForm />
        <Typography variant="h6" align="center" sx={{ margin: "20px 0" }}>
          OR
        </Typography>
        <Button variant="contained" color="secondary" fullWidth>
          Continue with google
        </Button>
      </CardContent>
    </Card>
  );
};

export default LoginCard;
