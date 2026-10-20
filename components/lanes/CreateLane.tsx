"use client";

import { useState } from "react";
import UiButton from "../ui/UiButton";
import UiModal from "../ui/UiModal";
import { ActionType } from "../ui/UiModal";

const CreateLane = (): React.JSX.Element => {
  const [modalOpen, setModalOpen] = useState(false);
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
      <UiButton
        type="button"
        color="primary"
        variant="contained"
        fullWidth={true}
        btnText="Create Lane"
        customClass="my-3"
        onClick={() => handleOpenModal("createLane")}
      />

      <UiModal
        open={modalOpen}
        onClose={handleCloseModal}
        type={activeAction}
      />
    </>
  );
};

export default CreateLane;
