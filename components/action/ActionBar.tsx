import React from "react";
import SearchForm from "../form/SearchForm";
import { Grid } from "@mui/material";
import UiButton from "../ui/UiButton";
import QuizIcon from "@mui/icons-material/Quiz";

const ActionBar = () => {
  return (
    <Grid container spacing={3} className="bg-blue-50 h-fit p-5 rounded-md">
      <Grid size={12}>
        <SearchForm />
      </Grid>

      <Grid size={4}>
        <QuizIcon />
        <UiButton
          type="button"
          variant="outlined"
          btnText="Ask"
          color="secondary"
          fullWidth={true}
        />
      </Grid>
      <Grid size={4}>
        <UiButton
          type="button"
          variant="outlined"
          btnText="Answer"
          color="secondary"
          fullWidth={true}
        />
      </Grid>
      <Grid size={4}>
        <UiButton
          type="button"
          variant="outlined"
          btnText="Post"
          color="secondary"
          fullWidth={true}
        />
      </Grid>
    </Grid>
  );
};

export default ActionBar;
