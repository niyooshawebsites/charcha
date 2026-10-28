// import { useState } from "react";
// import {
//   Typography,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemAvatar,
//   Avatar,
// } from "@mui/material";
// import UiPopover from "../ui/UiPopover";
import UiList from "../ui/UiList";

export type ContributorAddress = {
  city: string;
  country: string;
};

export type ContributorProps = {
  id: string;
  name: string;
  username: string;
  image: string;
  address: ContributorAddress;
  activeLanes: number;
  followers: string;
  joiningDate: string;
};

export type ContributorsProps = {
  data: ContributorProps[];
};

const ContributorList = ({ data }: ContributorsProps) => {
  // const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  // const [hoveredUserId, setHoveredUserId] = useState<string | null>(null);

  // const handlePopoverOpen = (
  //   e: React.MouseEvent<HTMLElement>,
  //   userId: string,
  // ) => {
  //   setAnchorEl(e.currentTarget);
  //   setHoveredUserId(userId);
  // };

  // const handlePopoverClose = () => {
  //   setAnchorEl(null);
  //   setHoveredUserId(null);
  // };

  return (
    // <List className="h-104 overflow-y-auto">
    //   {contributors.map((contributor) => (
    //     <ListItem
    //       key={contributor.id}
    //       className="bg-purple-200 mb-3 rounded-lg hover:border hover:border-purple-500"
    //     >
    //       <ListItemAvatar>
    //         <Avatar src={`/images/${contributor.image}`} />
    //       </ListItemAvatar>

    //       <ListItemText
    //         primary={
    //           <Typography
    //             onMouseEnter={(e) => handlePopoverOpen(e, contributor.id)}
    //             className="inline pointer hover:underline"
    //           >
    //             {contributor.name}
    //           </Typography>
    //         }
    //         secondary={
    //           <Typography className="text-xs text-gray-700">
    //             Active in {contributor.activeLanes} Lanes
    //           </Typography>
    //         }
    //       />

    //       <UiPopover
    //         username={contributor.name}
    //         activeLanes={contributor.activeLanes}
    //         joiningDate={contributor.joiningDate}
    //         address={contributor.address}
    //         title="The journey to the end of the Earth"
    //         description="The most serene places on the planet"
    //         image={`/images/${contributor.image}`}
    //         followers={contributor.followers}
    //         contributors="120"
    //         anchorEl={anchorEl}
    //         open={hoveredUserId === contributor.id}
    //         onClose={handlePopoverClose}
    //         type="user"
    //       />
    //     </ListItem>
    //   ))}
    // </List>

    <UiList type="contributor" data={data} />
  );
};

export default ContributorList;
