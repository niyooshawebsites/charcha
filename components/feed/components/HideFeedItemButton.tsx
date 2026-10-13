import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Tooltip } from "@mui/material";

const HideFeedItemButton = () => {
  return (
    <Tooltip title="Hide">
      <IconButton className="absolute top-2 right-2">
        <CloseIcon />
      </IconButton>
    </Tooltip>
  );
};

export default HideFeedItemButton;
