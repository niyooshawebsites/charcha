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
import user from "@/data/user.json";
import type { PopoverType } from "@/components/ui/UiPopover";
import Link from "next/link";
import lanelist from "@/data/lanes.json";
import LanePopover from "@/components/popover/LanePopover";

const QuickLaneInfo = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [popoverType, setPopoverType] = useState<PopoverType>("lane");

  const handlePopoverOpen = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handlePopoverTypeChange = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget.id == "laneTitle") {
      setPopoverType("lane");
    }

    if (e.currentTarget.id == "postUser") {
      setPopoverType("user");
    }
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
                <Link href={"/lane/The journey to the end of the Earth"}>
                  <Typography
                    variant="h6"
                    className="text-blue-500 hover:underline cursor-pointer"
                    id="laneTitle"
                    onMouseEnter={(e) => {
                      handlePopoverOpen(e);
                      handlePopoverTypeChange(e);
                    }}
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
                  onMouseEnter={(e) => {
                    handlePopoverOpen(e);
                    handlePopoverTypeChange(e);
                  }}
                >
                  Babai Bose
                </Typography>
              </Typography>
            }
          />
        </ListItem>
      </List>

      {/* <UiPopover
        username={user.name}
        activeLanes={user.activeLanes}
        joiningDate={user.joiningDate}
        address={user.address}
        title="The journey to the end of the Earth"
        description="The most serene places on the planet"
        image="https://wallpaperaccess.com/full/625497.jpg"
        followers="200.0K"
        contributors="120"
        anchorEl={anchorEl}
        open={open}
        onClose={handlePopoverClose}
        type={popoverType}
      /> */}

      <LanePopover
        anchorEl={anchorEl}
        open={open}
        onClose={handlePopoverClose}
        type="lane"
        data={lanelist[0].spaces[0]}
      />
    </>
  );
};

export default QuickLaneInfo;
