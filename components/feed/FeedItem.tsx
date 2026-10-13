import UiCard from "../ui/UiCard";
import { Grid } from "@mui/material";
import ShareButton from "./components/ShareButton";
import LikeButton from "./components/LikeButton";
import MoreOptionsButton from "./components/MoreOptionsButton";
import CommentsButton from "./components/CommentsButton";
import DisLikeButton from "./components/DisLikeButton";
import UserInfo from "./components/UserInfo";
import HideFeedItemButton from "./components/HideFeedItemButton";
import FeedItemContent from "./components/FeedItemContent";
import FeedItemImage from "./components/FeedItemImage";

const FeedItem = () => {
  return (
    <UiCard customClass="w-full rounded-xl my-5 relative">
      <Grid container spacing={2}>
        <Grid size={10}>
          <UserInfo />
        </Grid>
        <Grid size={2}>
          <HideFeedItemButton />
        </Grid>
        <Grid size={12}>
          <FeedItemContent />
        </Grid>
        <Grid size={12}>
          <FeedItemImage />
        </Grid>
        <Grid size={8}>
          <LikeButton />
          <DisLikeButton />
        </Grid>
        <Grid size={1}>
          <ShareButton />
        </Grid>
        <Grid size={2}>
          <CommentsButton />
        </Grid>
        <Grid size={1}>
          <MoreOptionsButton />
        </Grid>
      </Grid>
    </UiCard>
  );
};

export default FeedItem;
