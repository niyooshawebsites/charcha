import React from "react";
import Button from "@mui/material/Button";

interface BtnProps {
  type: "button" | "submit";
  variant: "contained" | "outlined" | "text";
  color:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  fullWidth: boolean;
  btnText: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const UiButton = ({
  type,
  variant,
  color,
  fullWidth,
  btnText,
  icon,
}: BtnProps): React.JSX.Element => {
  return (
    <Button type={type} variant={variant} color={color} fullWidth={fullWidth}>
      {icon} {btnText}
    </Button>
  );
};

export default UiButton;
