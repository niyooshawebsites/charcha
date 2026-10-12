import { Grid, Typography } from "@mui/material";
import ActionBar from "@/components/action/ActionBar";
import Feed from "@/components/feed/Feed";

const VishayPage = () => {
  return (
    <Grid
      container
      spacing={3}
      className="bg-gray-50 min-h-screen p-5 my-3 rounded-2xl border border-gray-100"
    >
      <Grid size={2}>
        <p>Lorem, ipsum.</p>
      </Grid>
      <Grid size={7}>
        <ActionBar />
        <Feed />
      </Grid>
      <Grid size={3}>
        <Typography>Advertisements</Typography>
      </Grid>
    </Grid>
  );
};

export default VishayPage;
