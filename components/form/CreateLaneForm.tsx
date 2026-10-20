import { Stack, Box, TextField } from "@mui/material";
import UiButton from "@/components/ui/UiButton";

const CreateLaneForm = () => {
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
            label="Name"
            variant="outlined"
            size="small"
            placeholder="Name your lane"
            fullWidth
            required
          />
        </Box>

        <Box className="flex items-center flex-end">
          <TextField
            type="text"
            label="Brief Description"
            variant="outlined"
            multiline
            minRows={10}
            size="small"
            placeholder="Include a few keywords to show people what to expect if they join."
            fullWidth
            required
          />
        </Box>

        <UiButton
          type="submit"
          variant="contained"
          color="primary"
          btnText="Create lane"
          fullWidth={true}
        />
      </Stack>
    </>
  );
};

export default CreateLaneForm;
