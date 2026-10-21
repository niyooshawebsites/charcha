"use client";

import { useState } from "react";
import UserInfo from "../feed/components/QuickLaneInfo";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import LikeButton from "../feed/components/LikeButton";
import DisLikeButton from "../feed/components/DisLikeButton";
import MoreOptionsButton from "../feed/components/MoreOptionsButton";
import ReplyForm from "../form/ReplyForm";

interface CommentProp {
  comment: string;
  time: string;
}

const CommentItem = ({ comment, time }: CommentProp) => {
  const [showRepForm, setShowRepForm] = useState<boolean>(false);

  const toggleRepFormView = (): void => {
    setShowRepForm((prev) => !prev);
  };

  return (
    <List className="flex flex-col">
      <ListItem className="flex flex-col items-start bg-blue-50 rounded-lg border border-purple-500">
        <Box className="flex justify-between items-center w-full">
          <UserInfo />
          <Typography component={"span"} className="text-sm text-gray-500 ">
            {time}
          </Typography>
        </Box>

        <ListItemText secondary={comment} className="-mt-2 my-3" />

        <Box className="flex justify-between w-full my-3">
          <Box>
            <LikeButton />
            <DisLikeButton />
          </Box>

          <Box>
            <Typography
              component={"span"}
              className="cursor-pointer text-purple-600"
              onClick={toggleRepFormView}
            >
              Reply
            </Typography>
            <MoreOptionsButton />
          </Box>
        </Box>

        <Box className="w-full my-3">{showRepForm ? <ReplyForm /> : null}</Box>
      </ListItem>
    </List>
  );
};

export default CommentItem;
