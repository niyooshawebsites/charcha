import { Stack, Box, TextField } from "@mui/material";
import UiButton from "../ui/UiButton";

const CommentForm = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      component="form"
      noValidate
      autoComplete="off"
    >
      <Box className="w-full">
        <TextField
          type="text"
          variant="outlined"
          placeholder="Type your comment here..."
          size="small"
          fullWidth
          required
        />
      </Box>

      <Box>
        <UiButton
          type="submit"
          variant="contained"
          color="primary"
          btnText="Comment"
          fullWidth={false}
        />
      </Box>
    </Stack>
  );
};

export default CommentForm;
