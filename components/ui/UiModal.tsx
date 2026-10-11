"use client";

import React, { useState } from "react";
import { Box, Typography, Modal } from "@mui/material";
import UiCard from "./UiCard";

interface ModalProps {
  children?: React.ReactNode;
}

const UiModal = ({ children }: ModalProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Modal open={open} onClose={handleClose}>
      <UiCard>{children}</UiCard>
    </Modal>
  );
};

export default UiModal;
