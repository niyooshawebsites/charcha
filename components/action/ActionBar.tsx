"use client";

import { useState } from "react";
import SearchForm from "../form/SearchForm";
import { Grid } from "@mui/material";
import UiButton from "../ui/UiButton";
import QuizIcon from "@mui/icons-material/Quiz";
import QuickreplyIcon from "@mui/icons-material/Quickreply";
import PostAddIcon from "@mui/icons-material/PostAdd";
import UiModal from "../ui/UiModal";
import type { ActionType } from "../ui/UiModal";

const ActionBar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeAction, setActiveAction] = useState<ActionType | null>(null);

  const handleOpenModal = (action: ActionType) => {
    setActiveAction(action);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

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
            onClick={() => handleOpenModal("ask")}
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
            onClick={() => handleOpenModal("answer")}
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
            onClick={() => handleOpenModal("post")}
          />
        </Grid>
      </Grid>

      <UiModal
        open={modalOpen}
        onClose={handleCloseModal}
        type={activeAction}
      />
    </>
  );
};

export default ActionBar;
