import { Stack, Box, TextField } from "@mui/material";
import UiButton from "@/components/ui/UiButton";

const AskForm = () => {
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
            label="Question"
            variant="outlined"
            size="small"
            placeholder="Type your question here..."
            fullWidth
            required
          />
        </Box>

        <UiButton
          type="submit"
          variant="contained"
          color="primary"
          btnText="Create Lane"
          fullWidth={true}
        />
      </Stack>
    </>
  );
};

export default AskForm;
