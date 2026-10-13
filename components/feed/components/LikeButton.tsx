"use client";

import UiButton from "@/components/ui/UiButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useState } from "react";

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likesCount, setLikesCount] = useState<number>(0);

  const updateLikesCount = () => {
    if (isLiked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }

    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  return (
    <UiButton
      type="button"
      variant="contained"
      color="primary"
      btnText={`Like (${likesCount})`}
      fullWidth={false}
      customClass="mr-2"
      icon={
        <ThumbUpIcon
          className={`mr-2 ${isLiked ? "text-gray-900" : "text-gray-50"}`}
        />
      }
      onClick={updateLikesCount}
    />
  );
};

export default LikeButton;
