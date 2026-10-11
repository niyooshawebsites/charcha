import { LoginPage } from "@/app/(auth)/login/page";
import { Stack } from "@mui/material";
import MainPage from "./(main)/page";

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
