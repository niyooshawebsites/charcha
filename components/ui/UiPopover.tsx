import { Stack, Box, Typography, Popover } from "@mui/material";
import LanePopover from "../popover/LanePopover";
import UserPopover from "../popover/UserPopover";

export type PopoverType = "post" | "user";

interface UiPopoverProps {
  title: string;
  description: string;
  laneImage: string;
  followers: string;
  contributors: string;
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  type: PopoverType | null;
}

const renderPopover = (type: PopoverType) => {
  switch (type) {
    case "post":
      return (
        <LanePopover
          title={title}
          description={description}
          laneImage={laneImage}
          followers={followers}
          contributors={contributors}
          anchorEl={anchorEl}
          open={open}
          onClose={onClose}
        />
      );

    case "user":
      return <UserPopover />;

    default:
      return null;
  }
};

const UiPopover = ({
  title,
  description,
  laneImage,
  followers,
  contributors,
  anchorEl,
  open,
  onClose,
  type,
}: UiPopoverProps) => {
  if (!type) return null;
  return (
    <>
      {renderPopover({
        title,
        description,
        laneImage,
        followers,
        contributors,
        anchorEl,
        open,
        onClose,
        type,
      })}
    </>
  );
};

export default UiPopover;
