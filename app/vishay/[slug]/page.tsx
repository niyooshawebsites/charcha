import { Grid, Typography } from "@mui/material";
import UiCard from "@/components/ui/UiCard";
import vishays from "@/data/vishay.json";

const page = () => {
  return (
    <Grid container spacing={3} className="p-4">
      {vishays.map((vishay) => (
        <Grid
          container
          key={vishay.name}
          className="bg-blue-100 p-4 rounded-xl"
        >
          <Grid container size={12}>
            <Typography variant="h5">{vishay.name}</Typography>
          </Grid>
          {vishay.spaces.map((space, index) => (
            <Grid size={3} key={index}>
              <UiCard customClass="rounded-lg bg-purple-200 h-50">
                <Typography variant="h6">{space.name}</Typography>
                <Typography>{space.description}</Typography>
              </UiCard>
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default page;
