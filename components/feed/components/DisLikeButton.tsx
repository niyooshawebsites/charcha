import UiButton from "@/components/ui/UiButton";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const DisLikeButton = () => {
  return (
    <UiButton
      type="button"
      variant="outlined"
      color="secondary"
      btnText=""
      fullWidth={false}
      icon={<ThumbDownIcon className="mr-2" />}
    />
  );
};

export default DisLikeButton;
