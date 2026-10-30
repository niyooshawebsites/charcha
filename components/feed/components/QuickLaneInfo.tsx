"use client";

import { useState } from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Stack,
} from "@mui/material";
import type { PopoverDataType } from "@/types/popover";
import Link from "next/link";
import lanelist from "@/data/lanes.json";
import LanePopover from "@/components/popover/LanePopover";

const QuickLaneInfo = () => {
  const [popoverType, setPopoverType] = useState<PopoverDataType | null>(null);

  const handleLanePopoverOpen = (e: React.MouseEvent<HTMLElement>) => {
    setPopoverType({
      anchorEl: e.currentTarget,
      open: true,
      onClose: () => setPopoverType(null),
      type: "lane",
      data: lanelist[0].subLanes[0],
    });
  };

  const handleUserPopoverOpen = (e: React.MouseEvent<HTMLElement>) => {
    setPopoverType({
      anchorEl: e.currentTarget,
      open: true,
      onClose: () => setPopoverType(null),
      type: "user",
      data: {
        // Pass your actual user data here
        id: "1",
        username: "Babai Bose",
        image: "/static/images/avatar/1.jpg",
        address: {
          city: "Delhi",
          country: "India",
        },
        activeLanes: 5,
        followers: 100,
        joiningDate: "May 30, 2026",
      },
    });
  };

  return (
    <>
      <List>
        <ListItem className="flex items-center">
          <ListItemAvatar>
            <Avatar
              alt="The journey to the end of the Earth"
              src="/static/images/avatar/1.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Stack direction="row" spacing={2} className="flex items-center">
                <Link href={"/lane/The journey to the end of the Earth"}>
                  <Typography
                    variant="h6"
                    className="text-blue-500 hover:underline cursor-pointer"
                    id="laneTitle"
                    onMouseEnter={handleLanePopoverOpen}
                  >
                    The journey to the end of the Earth
                  </Typography>
                </Link>
              </Stack>
            }
            secondary={
              <Typography
                component="span"
                variant="body2"
                color="text.secondary"
              >
                Posted on May 30, 2026 By{" "}
                <Typography
                  component="span"
                  variant="body2"
                  className="font-semibold text-blue-500 hover:underline cursor-pointer mr-3"
                  id="postUser"
                  onMouseEnter={handleUserPopoverOpen}
                >
                  Babai Bose
                </Typography>
              </Typography>
            }
          />
        </ListItem>
      </List>

      {popoverType && <LanePopover {...popoverType} />}
    </>
  );
};

export default QuickLaneInfo;
