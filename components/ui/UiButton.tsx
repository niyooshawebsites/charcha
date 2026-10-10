import React from "react";
import Button from "@mui/material/Button";

interface CustomButton {
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
}

const UiButton = ({
  type,
  variant,
  color,
  fullWidth,
  btnText,
}: CustomButton): React.JSX.Element => {
  return (
    <Button type={type} variant={variant} color={color} fullWidth={fullWidth}>
      {btnText}
    </Button>
  );
};

export default UiButton;
