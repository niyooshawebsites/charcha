import { Stack, Box, Typography, Popover } from "@mui/material";
import UiButton from "../ui/UiButton";
import Image from "next/image";
import UiPopover from "../ui/UiPopover";

interface LanePopoverProps {
  title: string;
  description: string;
  laneImage: string;
  followers: string;
  contributors: string;
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  createdAt: string;
}

const LanePopover = ({
  title,
  description,
  laneImage,
  followers,
  contributors,
  anchorEl,
  open,
  onClose,
  createdAt,
}: LanePopoverProps) => (
  <UiPopover
    anchorEl={anchorEl}
    open={open}
    onClose={onClose}
    type="lane"
    data={data}
  />
  // <Popover anchorEl={anchorEl} open={open} onClose={onClose} className=" mt-10">
  //   <Stack
  //     direction="column"
  //     spacing={2}
  //     className="p-5 bg-gray-900 text-gray-100 rounded-lg"
  //   >
  //     <Box className="flex justify-start items-center gap-2">
  //       <Box>
  //         <Image
  //           src={laneImage}
  //           alt={title}
  //           width={100}
  //           height={100}
  //           className="border rounded-lg"
  //         />
  //       </Box>
  //       <Box>
  //         <Typography variant="h6">{title}</Typography>
  //         <Typography className="text-sm text-gray-500">
  //           {description}
  //         </Typography>
  //       </Box>
  //     </Box>

  //     <Box className="flex justify-between">
  //       <Typography>Contributors: {contributors}</Typography>
  //       <Typography>Followers: {followers}</Typography>
  //       <Typography>Formed on: {createdAt}</Typography>
  //     </Box>

  //     <UiButton
  //       type="button"
  //       variant="contained"
  //       color="primary"
  //       btnText="Follow"
  //       fullWidth={false}
  //     />
  //   </Stack>
  // </Popover>
);

export default LanePopover;
