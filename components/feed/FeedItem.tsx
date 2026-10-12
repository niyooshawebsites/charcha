import React from "react";
import UiCard from "../ui/UiCard";
import UiButton from "../ui/UiButton";
import {
  Grid,
  IconButton,
  Typography,
  Avatar,
  Stack,
  Tooltip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

const FeedItem = () => {
  return (
    <UiCard customClass="w-full rounded-xl my-5 relative">
      <Grid container spacing={2}>
        <Grid size={10}>
          <List>
            <ListItem className="flex items-center">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Stack
                    direction="row"
                    spacing={2}
                    className="flex items-center"
                  >
                    <Typography variant="h6">Remy Sharp</Typography>
                    <Typography
                      component="span"
                      className="text-blue-500 text-sm cursor-pointer hover:text-blue-600"
                    >
                      Follow
                    </Typography>
                  </Stack>
                }
                secondary="Lived in Kolkata, West Bengal, India Oct 6"
              />
            </ListItem>
          </List>
        </Grid>
        <Grid size={2}>
          <IconButton className="absolute top-2 right-2">
            <CloseIcon />
          </IconButton>
        </Grid>
        <Grid size={12}>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
            reprehenderit, consequatur magni sint amet ad velit facilis cumque
            assumenda voluptatem dignissimos dicta facere enim impedit?
            Molestias, recusandae earum impedit delectus omnis autem, fugiat
            temporibus inventore ipsam assumenda ducimus eaque quis iusto quam,
            unde velit magnam. Tenetur voluptate quibusdam eligendi pariatur?
          </Typography>
        </Grid>
        <Grid size={12}>
          <img
            src="https://wallpaperaccess.com/full/1094033.jpg"
            alt="placeholder image"
          />
        </Grid>
        <Grid size={8}>
          <UiButton
            type="button"
            variant="contained"
            color="primary"
            btnText={`Like 100`}
            fullWidth={false}
            customClass="mr-2"
            icon={<ThumbUpIcon className="mr-2" />}
          />
          <UiButton
            type="button"
            variant="outlined"
            color="secondary"
            btnText=""
            fullWidth={false}
            icon={<ThumbDownIcon className="mr-2" />}
          />
        </Grid>
        <Grid size={1}>
          <Tooltip title="Share">
            <IconButton>
              <ShareIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid size={2}>
          <Tooltip title="Comments">
            <UiButton
              type="button"
              variant="text"
              color="secondary"
              btnText="200"
              fullWidth={false}
              icon={<CommentIcon className="mr-2" />}
            />
          </Tooltip>
        </Grid>
        <Grid size={1}>
          <Tooltip title="more">
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </UiCard>
  );
};

export default FeedItem;
