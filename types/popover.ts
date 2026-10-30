export type PopoverType = "lane" | "user" | "contributor";

export type LaneDataType = {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  banner: string;
  followers: number;
  contributors: number;
  createdAt: string;
};

export type ContributorOrUserDataType = {
  id: string;
  username: string;
  image: string;
  address: {
    city: string;
    country: string;
  };
  activeLanes: number;
  followers: number;
  joiningDate: string;
};

type BasePopoverProps = {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
};

export type PopoverDataType = BasePopoverProps &
  (
    | {
        type: "lane";
        data: LaneDataType;
      }
    | {
        type: "user" | "contributor";
        data: ContributorOrUserDataType;
      }
  );
