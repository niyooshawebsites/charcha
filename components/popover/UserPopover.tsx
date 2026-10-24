import { Stack, Box, Typography, Popover } from "@mui/material";
import UiButton from "../ui/UiButton";
import Image from "next/image";

interface Address {
  city: string;
  country: string;
}

interface UserPopoverProps {
  username: string;
  address: Address;
  image: string;
  followers: string;
  activeLanes: number;
  joiningDate: string;
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
}

const UserPopover = ({
  username,
  address,
  image,
  followers,
  activeLanes,
  joiningDate,
  anchorEl,
  open,
  onClose,
}: UserPopoverProps) => (
  <Popover anchorEl={anchorEl} open={open} onClose={onClose} className=" mt-5">
    <Stack
      direction="column"
      spacing={2}
      className="p-5 bg-gray-900 text-gray-100 rounded-lg"
    >
      <Box className="flex justify-start items-center gap-2">
        <Box>
          <Image
            src={image}
            alt={username}
            width={100}
            height={100}
            className="border rounded-lg"
          />
        </Box>
        <Box>
          <Typography variant="h6">{username}</Typography>
          <Typography className="text-sm text-gray-500">
            {address.city}, {address.country}
          </Typography>
        </Box>
      </Box>

      <Box className="flex flex-col justify-between">
        <Typography>Active lanes: {activeLanes}</Typography>
        <Typography>Followers: {followers}</Typography>
        <Typography>Joining Date: {joiningDate}</Typography>
      </Box>

      <UiButton
        type="button"
        variant="contained"
        color="primary"
        btnText="Follow"
        fullWidth={false}
      />
    </Stack>
  </Popover>
);

export default UserPopover;
