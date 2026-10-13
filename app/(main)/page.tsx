import { Grid, Typography } from "@mui/material";
import ActionBar from "@/components/action/ActionBar";
import Feed from "@/components/feed/Feed";
import AdTile from "@/components/ads/AdTile";

const LanePage = () => {
  return (
    <Grid
      container
      spacing={3}
      className="bg-gray-50 min-h-screen p-5 my-3 rounded-2xl border border-gray-100"
    >
      <Grid size={2}>
        <Typography variant="h6">My Lanes</Typography>
      </Grid>
      <Grid size={7}>
        <ActionBar />
        <Feed />
      </Grid>
      <Grid size={3}>
        <Typography variant="h6">Advertisements</Typography>
        <AdTile src="/images/coke.jpg" />
        <AdTile src="/images/lays.jpg" />
      </Grid>
    </Grid>
  );
};

export default LanePage;
