import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { ReactNode } from "react";

interface UiCardProps {
  children?: ReactNode;
  width: string | number;
}

const UiCard = ({ children, width = "50%" }: UiCardProps) => {
  return (
    <Card sx={{ width, p: 3 }} variant="outlined">
      <CardContent>{children && null}</CardContent>
    </Card>
  );
};

export default UiCard;
