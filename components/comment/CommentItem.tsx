import React from "react";
import UserInfo from "../feed/components/UserInfo";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

interface CommentProp {
  comment: string;
  time: string;
}

const CommentItem = ({ comment, time }: CommentProp) => {
  return (
    <List className="flex flex-col">
      <ListItem className="flex flex-col items-start bg-blue-50 rounded-lg border border-purple-500">
        <Box className="flex justify-between items-center w-full">
          <UserInfo />
          <Typography component={"span"} className="text-sm text-gray-500 ">
            {time}
          </Typography>
        </Box>
        <ListItemText secondary={comment} className="-mt-2" />
      </ListItem>
    </List>
  );
};

export default CommentItem;
