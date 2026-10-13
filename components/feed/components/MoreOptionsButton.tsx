import { Tooltip, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const MoreOptionsButton = () => {
  return (
    <Tooltip title="more">
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    </Tooltip>
  );
};

export default MoreOptionsButton;
