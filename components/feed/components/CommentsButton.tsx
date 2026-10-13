import { Tooltip } from "@mui/material";
import UiButton from "@/components/ui/UiButton";
import CommentIcon from "@mui/icons-material/Comment";

const CommentsButton = () => {
  return (
    <Tooltip title="Comments">
      <UiButton
        type="button"
        variant="text"
        color="secondary"
        btnText="200"
        fullWidth={false}
        icon={<CommentIcon className="mr-2" />}
      />
    </Tooltip>
  );
};

export default CommentsButton;
