import { Grid, Typography } from "@mui/material";
import ActionBar from "@/components/action/ActionBar";
import Feed from "@/components/feed/Feed";
import AdTile from "@/components/ads/AdTile";
import CreateLane from "@/components/lanes/CreateLane";
import MyLanes from "@/components/lanes/MyLanes";
import pages from "@/data/pages.json";
import QuickLinks from "@/components/quickLinks/QuickLinks";

const LanePage = () => {
  return (
    <Grid
      container
      spacing={3}
      className="bg-gray-50 max-h-svh p-5 my-3 rounded-2xl border border-gray-100"
    >
      <Grid size={2} className="">
        <Typography variant="h6">Create Lane</Typography>
        <CreateLane />

        <Typography variant="h6">My Lanes</Typography>
        <MyLanes />

        <Typography variant="h6">Quick Links</Typography>
        <QuickLinks pages={pages} />
      </Grid>

      <Grid size={7} className="max-h-svh">
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
