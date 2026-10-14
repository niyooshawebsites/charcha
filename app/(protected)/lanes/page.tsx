import { Grid, Typography, Box } from "@mui/material";
import UiCard from "@/components/ui/UiCard";
import lanes from "@/data/lane.json";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <Grid container spacing={3} className="p-5">
      {lanes.map((lane) => (
        <Grid container key={lane.name} className="bg-blue-100 p-4 rounded-xl">
          <Grid container size={12}>
            <Typography variant="h4" className="text-blue-500">
              {lane.name}
            </Typography>
          </Grid>
          {lane.spaces.map((ln, index) => (
            <Grid size={3} className="hover:scale-101" key={index}>
              <Link href={ln.name}>
                <UiCard customClass="rounded-lg bg-purple-200 h-full hover:cursor-pointer">
                  <Typography variant="h6" className="text-center mb-5 ">
                    {ln.name}
                  </Typography>

                  {/* logo */}
                  <Box className="relative w-full h-fit mb-5">
                    <Image
                      src={ln.logo}
                      alt={`${ln.name} logo`}
                      width={80}
                      height={80}
                      className="rounded-full p-3 object-contain block mx-auto border-4 border-gray-900 bg-blue-100"
                    />
                  </Box>

                  <Typography className="text-center text-sm">
                    {ln.description}
                  </Typography>
                </UiCard>
              </Link>
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default page;
