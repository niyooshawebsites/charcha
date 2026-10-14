"use client";

import { Box, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { List, type RowComponentProps } from "react-window";
import myLanes from "@/data/myLanes.json";

type Lane = { name: string };

const renderRow = ({ index, style }: RowComponentProps) => {
  const lane = myLanes[index] as Lane;

  return (
    <ListItem style={style} key={lane.name} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={lane.name} />
      </ListItemButton>
    </ListItem>
  );
};

const MyLanes = () => {
  return (
    <Box className="my-3 w-full max-w-[360] rounded-lg bg-blue-100 p-2">
      <List
        rowComponent={renderRow}
        rowCount={myLanes.length}
        rowHeight={46}
        rowProps={{}}
        overscanCount={5}
        className="max-h-400 rounded-lg"
      />
    </Box>
  );
};

export default MyLanes;
