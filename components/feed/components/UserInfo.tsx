import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Stack,
} from "@mui/material";

const UserInfo = () => {
  return (
    <List>
      <ListItem className="flex items-center">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Stack direction="row" spacing={2} className="flex items-center">
              <Typography variant="h6">Remy Sharp</Typography>
              <Typography
                component="span"
                className="text-blue-500 text-sm cursor-pointer hover:text-blue-600"
              >
                Follow
              </Typography>
            </Stack>
          }
          secondary="Lived in Kolkata, West Bengal, India Oct 6"
        />
      </ListItem>
    </List>
  );
};

export default UserInfo;
