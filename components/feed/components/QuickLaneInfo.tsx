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
import UiPopover from "@/components/ui/UiPopover";
import type { PopoverType } from "@/components/ui/UiPopover";

const QuickLaneInfo = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handlePopoverClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);

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
                <Typography
                  variant="h6"
                  className="text-blue-500 hover:underline cursor-pointer"
                  onMouseEnter={handlePopoverOpen}
                >
                  The journey to the end of the Earth
                </Typography>
                <Typography
                  component="span"
                  className="text-purple-600 bg-purple-50 px-2 py-0.5 rounded-md text-sm cursor-pointer hover:font-bold hover:underline"
                >
                  Follow
                </Typography>
              </Stack>
            }
            secondary={
              <Typography
                component="span"
                variant="body2"
                color="text.secondary"
              >
                Posted By{" "}
                <Typography
                  component="span"
                  variant="body2"
                  className="font-semibold text-blue-500 hover:underline cursor-pointer"
                >
                  Babai Bose
                </Typography>
                . May 30, 2026
              </Typography>
            }
          />
        </ListItem>
      </List>

      <UiPopover
        title="The journey to the end of the Earth"
        description="The most serene places on the planet"
        laneImage="https://wallpaperaccess.com/full/625497.jpg"
        followers="200.0K"
        contributors="120"
        anchorEl={anchorEl}
        open={open}
        onClose={handlePopoverClose}
      />
    </>
  );
};

export default QuickLaneInfo;
