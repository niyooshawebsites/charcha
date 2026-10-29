"use client";

// import LanePopover from "../popover/LanePopover";
// import UserPopover from "../popover/UserPopover";

import { Popover, Stack, Box, Typography } from "@mui/material";
import Image from "next/image";
import UiButton from "./UiButton";

export type PopoverType = "lane" | "user" | "contributor";

type Address = {
  city: string;
  country: string;
};

type ContributorOrUserProps = {
  name: string;
  username: string;
  image: string;
  address: Address;
  activeLanes: number;
  followers: number;
  joiningDate: string;
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
};

type LaneProps = {
  title: string;
  image: string;
  shortDesc: string;
  followers: number;
  contributors: number;
  createdAt: string;
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
};

type DataProps =
  | {
      type: "contributor" | "user";
      data: ContributorOrUserProps[];
      anchorEl: HTMLElement | null;
      open: boolean;
      onClose: () => void;
    }
  | {
      type: "lane";
      data: LaneProps[];
      anchorEl: HTMLElement | null;
      open: boolean;
      onClose: () => void;
    };

// const renderPopover = ({
//   username,
//   address,
//   activeLanes,
//   joiningDate,
//   createdAt,
//   title,
//   description,
//   image,
//   followers,
//   contributors,
//   anchorEl,
//   open,
//   onClose,
//   type,
// }: UiPopoverProps) => {
//   switch (type) {
//     case "lane":
//       return (
//         <LanePopover
//           title={title}
//           shortDesc={shortDesc}
//           image={image}
//           followers={followers}
//           contributors={contributors}
//           createdAt={createdAt!}
//           anchorEl={anchorEl}
//           open={open}
//           onClose={onClose}
//         />
//       );

//     case "user":
//       return (
//         <UserPopover
//           name={name}
//           username={username}
//           address={address!}
//           image={image}
//           followers={followers}
//           activeLanes={activeLanes!}
//           joiningDate={joiningDate!}
//           anchorEl={anchorEl}
//           open={open}
//           onClose={onClose}
//         />
//       );

//     case "contributor":
//       return (
//         <UserPopover
//           name={name}
//           username={username}
//           address={address!}
//           image={image}
//           followers={followers}
//           activeLanes={activeLanes!}
//           joiningDate={joiningDate!}
//           anchorEl={anchorEl}
//           open={open}
//           onClose={onClose}
//         />
//       );

//     default:
//       return null;
//   }
// };

const UiPopover = ({ type, data, open, anchorEl, onClose }: DataProps) => {
  if (type == "contributor" || type == "user") {
    return (
      <Popover
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        className=" mt-5"
      >
        <Stack
          direction="column"
          spacing={2}
          className="p-5 bg-gray-900 text-gray-100 rounded-lg"
        >
          <Box className="flex justify-start items-center gap-2">
            <Box>
              <Image
                src={data.image}
                alt={data.username}
                width={100}
                height={100}
                className="border rounded-lg"
              />
            </Box>
            <Box>
              <Typography variant="h6">{data.username}</Typography>
              <Typography className="text-sm text-gray-500">
                {data.address.city}, {data.address.country}
              </Typography>
            </Box>
          </Box>

          <Box className="flex flex-col justify-between">
            <Typography>Active lanes: {data.activeLanes}</Typography>
            <Typography>Followers: {data.followers}</Typography>
            <Typography>Joining Date: {data.joiningDate}</Typography>
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
  }

  if (type == "lane") {
    return (
      <Popover
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        className=" mt-10"
      >
        <Stack
          direction="column"
          spacing={2}
          className="p-5 bg-gray-900 text-gray-100 rounded-lg"
        >
          <Box className="flex justify-start items-center gap-2">
            <Box>
              <Image
                src={laneImage}
                alt={title}
                width={100}
                height={100}
                className="border rounded-lg"
              />
            </Box>
            <Box>
              <Typography variant="h6">{title}</Typography>
              <Typography className="text-sm text-gray-500">
                {description}
              </Typography>
            </Box>
          </Box>

          <Box className="flex justify-between">
            <Typography>Contributors: {contributors}</Typography>
            <Typography>Followers: {followers}</Typography>
            <Typography>Formed on: {createdAt}</Typography>
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
  }
};

// const UiPopover = ({
//   username,
//   address,
//   activeLanes,
//   joiningDate,
//   createdAt,
//   title,
//   description,
//   image,
//   followers,
//   contributors,
//   anchorEl,
//   open,
//   onClose,
//   type,
// }: DataProps) => {
//   if (!type) return null;
//   return (
//     <>
//       {renderPopover({
//         username,
//         address,
//         activeLanes,
//         joiningDate,
//         createdAt,
//         title,
//         description,
//         image,
//         followers,
//         contributors,
//         anchorEl,
//         open,
//         onClose,
//         type,
//       })}
//     </>
//   );
// };

export default UiPopover;
