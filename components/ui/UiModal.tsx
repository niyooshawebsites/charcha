import { Typography, Modal, Box, IconButton } from "@mui/material";
import UiCard from "./UiCard";
import CloseIcon from "@mui/icons-material/Close";
import AskForm from "../form/AskForm";
import AnswerForm from "../form/AnswerForm";
import PostForm from "../form/PostForm";
import CommentForm from "../form/CommentForm";
import CommentList from "../comment/CommentList";

export type ActionType = "ask" | "answer" | "post" | "comment" | "createLane";

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
  comment: {
    title: "Leave a comment",
    description: "Your opinion matters.",
  },
  createLane: {
    title: "Create your own lane",
    description: "Describe your lane",
  },
};

const renderForm = (type: ActionType) => {
  switch (type) {
    case "ask":
      return <AskForm />;

    case "answer":
      return <AnswerForm />;

    case "post":
      return <PostForm />;

    case "comment":
      return (
        <>
          <CommentForm />
          <CommentList />
        </>
      );

    default:
      return null;
  }
};

const UiModal = ({ open, onClose, type }: ModalProps) => {
  if (!type) return null;

  const config = modalConfig[type];

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800] bg-blue-100 border-2 border-blue-600 p-4 shadow rounded-lg">
        <Box className="flex justify-between mb-2">
          <Typography variant="h6" className="mb-1">
            {config.title}
          </Typography>
          <IconButton className="absolute top-2 right-2" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <UiCard>
          <Typography className="text-gray-700 mb-5">
            {config.description}
          </Typography>
          {renderForm(type)}
        </UiCard>
      </Box>
    </Modal>
  );
};

export default UiModal;
