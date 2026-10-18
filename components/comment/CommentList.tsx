import comments from "@/data/comments.json";
import { List } from "@mui/material";
import CommentItem from "./CommentItem";

const CommentList = () => {
  return (
    <List className="max-h-[70vh] overflow-y-scroll p-3 my-5 bg-blue-100 rounded-lg">
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment.comment}
          time={comment.createdAt}
        />
      ))}
    </List>
  );
};

export default CommentList;
