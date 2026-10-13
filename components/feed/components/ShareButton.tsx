import { Tooltip, IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

const ShareButton = () => {
  return (
    <Tooltip title="Share">
      <IconButton>
        <ShareIcon />
      </IconButton>
    </Tooltip>
  );
};

export default ShareButton;
