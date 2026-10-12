import { Typography, Modal, Box } from "@mui/material";
import UiCard from "./UiCard";
import UiButton from "./UiButton";

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

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] bg-blue-100 border-2 border-blue-600 p-4 shadow rounded-lg">
        <Box className="flex justify-between mb-2">
          <Typography variant="h6" className="mb-1">
            {config.title}
          </Typography>
          <UiButton
            type="button"
            variant="contained"
            color="primary"
            btnText="X"
            fullWidth={false}
            onClick={onClose}
          />
        </Box>

        <UiCard>
          <Typography className="text-gray-700">
            {config.description}
          </Typography>
        </UiCard>
      </Box>
    </Modal>
  );
};

export default UiModal;
