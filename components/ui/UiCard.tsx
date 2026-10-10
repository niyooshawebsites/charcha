import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { ReactNode } from "react";

interface UiCardProps {
  children?: ReactNode;
  customClass: string;
}

const UiCard = ({ children, customClass }: UiCardProps) => {
  return (
    <Card variant="outlined" className={customClass}>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default UiCard;
