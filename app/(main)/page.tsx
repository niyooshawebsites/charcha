import { Stack, Box, Grid, Typography } from "@mui/material";
import ActionBar from "@/components/action/ActionBar";

const MainPage = () => {
  return (
    <Grid
      container
      spacing={3}
      className="border min-h-screen p-5 my-3 rounded-2xl"
    >
      <Grid size={2}>
        <p>Lorem, ipsum.</p>
      </Grid>
      <Grid size={7}>
        <ActionBar />
      </Grid>
      <Grid size={3}>
        <Typography>Advertisements</Typography>
      </Grid>
    </Grid>
  );
};

export default MainPage;
