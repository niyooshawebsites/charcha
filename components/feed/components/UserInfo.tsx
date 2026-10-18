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
              <Typography variant="h6" className="text-blue-500">
                Remy Sharp
              </Typography>
              <Typography
                component="span"
                className="text-purple-600 bg-purple-50 px-1 py-0.5 rounded-md text-sm cursor-pointer hover:font-bold"
              >
                Follow
              </Typography>
            </Stack>
          }
          secondary="Lives in Kolkata, West Bengal, India"
        />
      </ListItem>
    </List>
  );
};

export default UserInfo;
