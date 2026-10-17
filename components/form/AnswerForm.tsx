import { Stack, Box, TextField } from "@mui/material";
import UiButton from "@/components/ui/UiButton";

const AnswerForm = () => {
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
            label="Answer"
            variant="outlined"
            multiline
            minRows={10}
            size="small"
            placeholder="Type your answer here..."
            fullWidth
            required
          />
        </Box>

        <UiButton
          type="submit"
          variant="contained"
          color="primary"
          btnText="Answer"
          fullWidth={true}
        />
      </Stack>
    </>
  );
};

export default AnswerForm;
