import { Stack, Box, TextField } from "@mui/material";
import UiButton from "@/components/ui/UiButton";

const PostForm = () => {
  return (
    <>
      <Stack
        direction="column"
        spacing={3}
        component="form"
        noValidate
        autoComplete="off"
      >
        <Box className="flex items-center flex-end">
          <TextField
            type="text"
            label="Post"
            variant="outlined"
            multiline
            minRows={10}
            size="small"
            placeholder="Share something..."
            fullWidth
            required
          />
        </Box>

        <UiButton
          type="submit"
          variant="contained"
          color="primary"
          btnText="Post"
          fullWidth={true}
        />
      </Stack>
    </>
  );
};

export default PostForm;
