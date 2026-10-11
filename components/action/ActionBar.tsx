import React from "react";
import SearchForm from "../form/SearchForm";
import { Grid } from "@mui/material";
import UiButton from "../ui/UiButton";
import QuizIcon from "@mui/icons-material/Quiz";
import QuickreplyIcon from "@mui/icons-material/Quickreply";
import PostAddIcon from "@mui/icons-material/PostAdd";
import UiModal from "../ui/UiModal";

const ActionBar = () => {
  const openAskModal = () => {};
  const openAnswerModal = () => {};
  const openPostModal = () => {};

  return (
    <>
      <Grid container spacing={2} className="bg-blue-50 h-fit p-3 rounded-md">
        <Grid size={12}>
          <SearchForm />
        </Grid>

        <Grid size={4}>
          <UiButton
            type="button"
            variant="outlined"
            btnText="Ask"
            color="secondary"
            icon={<QuizIcon />}
            fullWidth={true}
            onClick={openAskModal}
          />
        </Grid>

        <Grid size={4}>
          <UiButton
            type="button"
            variant="outlined"
            btnText="Answer"
            color="secondary"
            icon={<QuickreplyIcon />}
            fullWidth={true}
            onClick={openAnswerModal}
          />
        </Grid>

        <Grid size={4}>
          <UiButton
            type="button"
            variant="outlined"
            btnText="Post"
            color="secondary"
            icon={<PostAddIcon />}
            fullWidth={true}
            onClick={openPostModal}
          />
        </Grid>
      </Grid>

      <UiModal />
    </>
  );
};

export default ActionBar;
