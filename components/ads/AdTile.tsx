import UiCard from "../ui/UiCard";
import Image from "next/image";
import { Box } from "@mui/material";

interface AdProps {
  src: string;
}

const AdTile = ({ src }: AdProps) => {
  return (
    <UiCard customClass="my-3 rounded-lg">
      <Box className="relative w-full h-[300px]">
        <Image
          src={src}
          alt="Placeholder ad"
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="rounded-lg object-cover"
        />
      </Box>
    </UiCard>
  );
};

export default AdTile;
