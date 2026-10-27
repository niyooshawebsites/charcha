import { Typography, Modal, Box, IconButton } from "@mui/material";
import UiCard from "./UiCard";
import CloseIcon from "@mui/icons-material/Close";
import AskForm from "../form/AskForm";
import AnswerForm from "../form/AnswerForm";
import PostForm from "../form/PostForm";
import CommentForm from "../form/CommentForm";
import CommentList from "../comment/CommentList";
import CreateLaneForm from "../form/CreateLaneForm";
import ContributorList from "../contributor/ContributorList";
import type { ContributorProps } from "../contributor/ContributorList";

export type ActionType =
  | "ask"
  | "answer"
  | "post"
  | "comment"
  | "createLane"
  | "contributors";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  type: ActionType | null;
  data?: ContributorProps[];
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
    description:
      "Share your interests, curate content, host discussions, and more.",
  },
  contributors: {
    title: "",
    description: "",
  },
};

const renderElement = (type: ActionType, data: ContributorProps[] = []) => {
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

    case "createLane":
      return <CreateLaneForm />;

    case "contributors":
      return <ContributorList contributors={data} />;

    default:
      return null;
  }
};

const UiModal = ({ open, onClose, type, data }: ModalProps) => {
  if (!type) return null;

  const config = modalConfig[type];

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[600] max-w-[800] max-h-8/12 max-h- bg-blue-100 border-2 border-blue-600 p-3 shadow rounded-xl">
        <Box className="flex justify-between mb-2">
          <Typography variant="h6" className="mb-1">
            {type == "contributors"
              ? `${data!.length} Contributors`
              : config.title}
          </Typography>
          <IconButton className="absolute top-2 right-2" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <UiCard>
          {config.description ? (
            <Typography className="text-gray-700 mb-5">
              {config.description}
            </Typography>
          ) : (
            <></>
          )}
          {renderElement(type, data)}
        </UiCard>
      </Box>
    </Modal>
  );
};

export default UiModal;
