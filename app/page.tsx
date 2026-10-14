import { LoginPage } from "@/app/(public)/auth/login/page";
import { Stack } from "@mui/material";
import MainPage from "./(protected)/(main)/page";

const isLoggedIn = true;

export default function Home() {
  if (isLoggedIn) {
    return (
      <Stack>
        <MainPage />
      </Stack>
    );
  }

  return (
    <Stack>
      <LoginPage />
    </Stack>
  );
}
