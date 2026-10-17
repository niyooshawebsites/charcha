"use client";

import { useState } from "react";
import { Tooltip } from "@mui/material";
import UiButton from "@/components/ui/UiButton";
import CommentIcon from "@mui/icons-material/Comment";
import { ActionType } from "@/components/ui/UiModal";
import UiModal from "@/components/ui/UiModal";

const CommentsButton = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [activeAction, setActiveAction] = useState<ActionType | null>(null);

  const handleOpenModal = (action: ActionType): void => {
    setActiveAction(action);
    setModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setModalOpen(false);
  };

  return (
    <>
      <Tooltip title="Comments">
        <UiButton
          type="button"
          variant="text"
          color="secondary"
          btnText="200"
          fullWidth={false}
          icon={<CommentIcon className="mr-2" />}
          onClick={() => handleOpenModal("comment")}
        />
      </Tooltip>

      <UiModal
        open={modalOpen}
        onClose={handleCloseModal}
        type={activeAction}
      />
    </>
  );
};

export default CommentsButton;
