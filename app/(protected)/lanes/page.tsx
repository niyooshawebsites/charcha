import { Grid, Typography, Box } from "@mui/material";
import UiCard from "@/components/ui/UiCard";
import lanes from "@/data/lanes.json";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <Grid container spacing={3} className="p-5">
      {lanes.map((lane) => (
        <Grid container key={lane.id} className="bg-blue-100 p-4 rounded-xl">
          <Grid container size={12}>
            <Typography variant="h4" className="text-blue-500">
              {lane.title}
            </Typography>
          </Grid>
          {lane.subLanes.map((ln) => (
            <Grid size={3} className="hover:scale-101" key={ln.id}>
              <Link href={`/lane/${ln.title}`}>
                <UiCard customClass="rounded-lg bg-purple-200 h-full hover:cursor-pointer">
                  <Typography variant="h6" className="text-center mb-5 ">
                    {ln.title}
                  </Typography>

                  {/* logo */}
                  <Box className="w-full mb-5 flex justify-center">
                    <Box className="relative w-28 aspect-square overflow-hidden rounded-full border-4 border-gray-900 bg-blue-100">
                      <Image
                        src={ln.image}
                        alt={`${ln.title} logo`}
                        fill
                        sizes="112px"
                        className="object-cover"
                        unoptimized
                      />
                    </Box>
                  </Box>

                  <Typography className="text-center text-sm">
                    {ln.shortDesc}
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
