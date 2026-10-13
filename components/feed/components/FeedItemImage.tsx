import Image from "next/image";
import { Box } from "@mui/material";

const FeedItemImage = () => {
  return (
    <Box className="relative w-full h-[400px]">
      <Image
        src="https://wallpaperaccess.com/full/1094033.jpg"
        alt="Placeholder image"
        fill
        sizes="(max-width: 768px) 100vw, 600px"
        className="rounded-lg object-cover"
      />
    </Box>
  );
};

export default FeedItemImage;
