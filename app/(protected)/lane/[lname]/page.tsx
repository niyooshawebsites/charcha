import { Stack, Box, Grid, Typography } from "@mui/material";
import UiButton from "@/components/ui/UiButton";
import Feed from "@/components/feed/Feed";
import AdTile from "@/components/ads/AdTile";

const Lane = () => {
  return (
    <Grid>
      <Grid size={12}>
        <Grid size={12}></Grid>
        <Grid size={12}>
          <Grid size={10}>
            <Typography variant="h3">
              The journey to the end of the Earth
            </Typography>
            <Typography variant="h3">
              The journey to the end of the Earth
            </Typography>
            <Typography variant="h3">8 Contributors 5.5K followers</Typography>
          </Grid>
          <Grid size={2}>
            <UiButton
              type="button"
              variant="contained"
              color="primary"
              btnText="Follow Lane"
              fullWidth={false}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid size={7}>
          <Feed />
        </Grid>
        <Grid size={5}>
          <Typography variant="h6">Advertisements</Typography>
          <AdTile src="/images/coke.jpg" />
          <AdTile src="/images/lays.jpg" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Lane;
