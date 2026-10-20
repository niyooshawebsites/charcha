import React from "react";
import FeedItem from "./FeedItem";
import { Box } from "@mui/material";

const Feed = () => {
  return (
    <Box className="max-h-10/12 overflow-y-scroll">
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
    </Box>
  );
};

export default Feed;
