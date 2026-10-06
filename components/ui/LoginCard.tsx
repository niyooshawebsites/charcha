import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LoginForm from "@/components/form/LoginForm";

const LoginCard = () => {
  return (
    <Card sx={{ maxWidth: 450, p: 3 }}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <LoginForm />
      </CardContent>
    </Card>
  );
};

export default LoginCard;
