import LanePopover from "../popover/LanePopover";
import UserPopover from "../popover/UserPopover";

export type PopoverType = "post" | "user";

interface Address {
  city: string;
  country: string;
}

interface UiPopoverProps {
  username: string;
  address: Address;
  activeLanes: number;
  joiningDate: string;
  title: string;
  description: string;
  image: string;
  followers: string;
  contributors: string;
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  type: PopoverType | null;
}

const renderPopover = ({
  username,
  address,
  activeLanes,
  joiningDate,
  title,
  description,
  image,
  followers,
  contributors,
  anchorEl,
  open,
  onClose,
  type,
}: UiPopoverProps) => {
  switch (type) {
    case "post":
      return (
        <LanePopover
          title={title}
          description={description}
          laneImage={image}
          followers={followers}
          contributors={contributors}
          anchorEl={anchorEl}
          open={open}
          onClose={onClose}
        />
      );

    case "user":
      return (
        <UserPopover
          username={username}
          address={address}
          image={image}
          followers={followers}
          activeLanes={activeLanes}
          joiningDate={joiningDate}
          anchorEl={anchorEl}
          open={open}
          onClose={onClose}
        />
      );

    default:
      return null;
  }
};

const UiPopover = ({
  username,
  address,
  activeLanes,
  joiningDate,
  title,
  description,
  image,
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
        username,
        address,
        activeLanes,
        joiningDate,
        title,
        description,
        image,
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
