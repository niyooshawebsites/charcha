import { Stack, Box, TextField } from "@mui/material";
import UiButton from "../ui/UiButton";

const SearchForm = () => {
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
          placeholder="Search genres, posts, users..."
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
          btnText="Search"
          fullWidth={false}
        />
      </Box>
    </Stack>
  );
};

export default SearchForm;
