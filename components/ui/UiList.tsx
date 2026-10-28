"use client";

import { useState } from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
} from "@mui/material";
import UiPopover from "./UiPopover";

export type ListType = "contributor" | "user" | "lane";

interface Address {
  city: string;
  country: string;
}

interface ContributorOrUserProps {
  id: string;
  name: string;
  username: string;
  image: string;
  followers: string;
  activeLanes: number;
  joiningDate: string;
  address: Address;
}

interface LaneProps {
  id: string;
  title: string;
  image: string;
  banner: string;
  followers: string;
  shortDesc: string;
  longDesc: string;
  formationDate: string;
}

// interface DataItem {
//   id: string;
//   title: string;
//   name: string;
//   username: string;
//   image: string;
//   followers: string;
//   shortDesc?: string;
//   longDesc?: string;
//   activeLanes?: number;
//   joiningDate?: string;
//   address?: Address;
//   formationDate?: string;
// }

// interface DataProps {
//   data: DataItem[];
//   type: ListType | null;
// }

interface DataProps {
  data: ContributorOrUserProps[] | LaneProps[];
  type: ListType | null;
}

const UiList = ({ type, data }: DataProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [hoveredDataId, setHoveredDataId] = useState<string | null>(null);

  const handlePopoverOpen = (
    e: React.MouseEvent<HTMLElement>,
    userId: string,
  ) => {
    setAnchorEl(e.currentTarget);
    setHoveredDataId(userId);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setHoveredDataId(null);
  };

  if (type == "contributor" || type == "user") {
    return (
      <List className="h-104 overflow-y-auto">
        {data.map((d) => (
          <ListItem
            key={d.id}
            className="bg-purple-200 mb-3 rounded-lg hover:border hover:border-purple-500"
          >
            <ListItemAvatar>
              <Avatar src={`/images/${d.image}`} />
            </ListItemAvatar>

            <ListItemText
              primary={
                <Typography
                  onMouseEnter={(e) => handlePopoverOpen(e, d.id)}
                  className="inline pointer hover:underline"
                >
                  {d.name}
                </Typography>
              }
              secondary={
                <Typography className="text-xs text-gray-700">
                  Active in {d.activeLanes} Lanes
                </Typography>
              }
            />

            <UiPopover
              username={d.name}
              activeLanes={d.activeLanes}
              joiningDate={d.joiningDate}
              address={d.address}
              title="The journey to the end of the Earth"
              description="The most serene places on the planet"
              image={`/images/${d.image}`}
              followers={d.followers}
              contributors="120"
              anchorEl={anchorEl}
              open={hoveredDataId === d.id}
              onClose={handlePopoverClose}
              type={"user"}
            />
          </ListItem>
        ))}
      </List>
    );
  }

  if (type == "lane") {
    return (
      <List className="h-104 overflow-y-auto">
        {data.map((d) => (
          <ListItem
            key={d.id}
            className="bg-purple-200 mb-3 rounded-lg hover:border hover:border-purple-500"
          >
            <ListItemAvatar>
              <Avatar src={`/images/${d.image}`} />
            </ListItemAvatar>

            <ListItemText
              primary={
                <Typography
                  onMouseEnter={(e) => handlePopoverOpen(e, d.id)}
                  className="inline pointer hover:underline"
                >
                  {d.title}
                </Typography>
              }
              secondary={
                <Typography className="text-xs text-gray-700">
                  {d.shortDesc}
                </Typography>
              }
            />

            <UiPopover
              title={d.title}
              shortDesc={d.shortDesc}
              image={`/images/${d.image}`}
              followers={d.followers}
              contributors="120"
              anchorEl={anchorEl}
              open={hoveredDataId === d.id}
              onClose={handlePopoverClose}
              type={"user"}
            />
          </ListItem>
        ))}
      </List>
    );
  }

  return (
    <List className="h-104 overflow-y-auto">
      {data.map((d) => (
        <ListItem
          key={d.id}
          className="bg-purple-200 mb-3 rounded-lg hover:border hover:border-purple-500"
        >
          <ListItemAvatar>
            <Avatar src={`/images/${d.image}`} />
          </ListItemAvatar>

          <ListItemText
            primary={
              <Typography
                onMouseEnter={(e) => handlePopoverOpen(e, d.id)}
                className="inline pointer hover:underline"
              >
                {d.name}
              </Typography>
            }
            secondary={
              <Typography className="text-xs text-gray-700">
                Active in {d.activeLanes} Lanes
              </Typography>
            }
          />

          {type == "user" || type == "contributor" ? (
            <UiPopover
              username={d.name}
              activeLanes={d.activeLanes}
              joiningDate={d.joiningDate}
              address={d.address}
              title="The journey to the end of the Earth"
              description="The most serene places on the planet"
              image={`/images/${d.image}`}
              followers={d.followers}
              contributors="120"
              anchorEl={anchorEl}
              open={hoveredDataId === d.id}
              onClose={handlePopoverClose}
              type={"user"}
            />
          ) : (
            <UiPopover
              username={d.name}
              title={d.title}
              shortDesc={d.shortDesc}
              longDesc={d.longDesc}
              image={`/images/${d.image}`}
              followers={d.followers}
              contributors="120"
              anchorEl={anchorEl}
              open={hoveredDataId === d.id}
              onClose={handlePopoverClose}
              type={"lane"}
            />
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default UiList;
