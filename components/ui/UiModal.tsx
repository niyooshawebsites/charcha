import { Typography, Modal } from "@mui/material";
import UiCard from "./UiCard";

export type ActionType = "ask" | "answer" | "post";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  type: ActionType | null;
}

const modalConfig = {
  ask: {
    title: "Ask a Question",
    description: "Submit a question to the community.",
  },
  answer: {
    title: "Write an Answer",
    description: "Share your knowledge and help others.",
  },
  post: {
    title: "Create a Post",
    description: "Share an update with the community.",
  },
};

const UiModal = ({ open, onClose, type }: ModalProps) => {
  if (!type) return null;

  const config = modalConfig[type];

  console.log(config.title);

  return (
    <Modal open={open} onClose={onClose}>
      <UiCard>
        <Typography variant="h6" className="mb-1">
          {config.title}
        </Typography>
        <Typography className="text-gray-700">{config.description}</Typography>
      </UiCard>
    </Modal>
  );
};

export default UiModal;
