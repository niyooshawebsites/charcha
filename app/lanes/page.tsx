import { Grid, Typography } from "@mui/material";
import UiCard from "@/components/ui/UiCard";
import lanes from "@/data/lane.json";

const page = () => {
  return (
    <Grid container spacing={3} className="p-4">
      {lanes.map((lane) => (
        <Grid container key={lane.name} className="bg-blue-100 p-4 rounded-xl">
          <Grid container size={12}>
            <Typography variant="h5">{lane.name}</Typography>
          </Grid>
          {lane.spaces.map((ln, index) => (
            <Grid size={3} key={index}>
              <UiCard customClass="rounded-lg bg-purple-200 h-50">
                <Typography variant="h6">{ln.name}</Typography>
                <Typography>{ln.description}</Typography>
              </UiCard>
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default page;
