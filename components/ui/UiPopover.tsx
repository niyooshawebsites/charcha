"use client";

import { Popover, Stack, Box, Typography } from "@mui/material";
import Image from "next/image";
import UiButton from "./UiButton";
import type { PopoverDataType } from "@/types/popover";

const UiPopover = (props: PopoverDataType) => {
  const { type, open, anchorEl, onClose } = props;

  if (type === "user" || type === "contributor") {
    const { data } = props;

    return (
      <Popover
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        className="mt-5"
      >
        <Stack
          direction="column"
          spacing={2}
          className="p-5 bg-gray-900 text-gray-100 rounded-lg"
        >
          <Box className="flex justify-start items-center gap-2">
            <Image
              src={data.image}
              alt={data.username}
              width={100}
              height={100}
              className="border rounded-lg"
            />

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

  if (type === "lane") {
    const { data } = props;

    return (
      <Popover
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        className="mt-10"
      >
        <Stack
          direction="column"
          spacing={2}
          className="p-5 bg-gray-900 text-gray-100 rounded-lg"
        >
          <Box className="flex justify-start items-center gap-2">
            <Image
              src={data.image}
              alt={data.title}
              width={100}
              height={100}
              className="border rounded-lg"
            />

            <Box>
              <Typography variant="h6">{data.title}</Typography>

              <Typography className="text-sm text-gray-500">
                {data.shortDesc}
              </Typography>
            </Box>
          </Box>

          <Box className="flex justify-between">
            <Typography>Contributors: {data.contributors}</Typography>
            <Typography>Followers: {data.followers}</Typography>
            <Typography>Formed on: {data.createdAt}</Typography>
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

  return null;
};

export default UiPopover;
