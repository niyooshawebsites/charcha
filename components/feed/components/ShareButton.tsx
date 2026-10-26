import { Tooltip, IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

const ShareButton = () => {
  return (
    <Tooltip title="Share">
      <IconButton>
        <ShareIcon color="primary" />
      </IconButton>
    </Tooltip>
  );
};

export default ShareButton;
