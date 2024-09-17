/* eslint-disable react/display-name */
import { CSS, VariantProps, styled } from "@/styles";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import React from "react";

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: "unset",
  boxSizing: "border-box",
  userSelect: "none",
  border: "1px solid $midnight",

  "&::before": {
    boxSizing: "border-box",
  },

  "&::after": {
    boxSizing: "border-box",
  },

  alignItems: "center",
  width: "16px",
  height: "16px",
  borderRadius: "$1",
  cursor: "pointer",
  display: "inline-flex",
  justifyContent: "center",
  lineHeight: "1",
  margin: "0",
  outline: "none",
  padding: "0",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  color: "$midnight",
  overflow: "hidden",
  // boxShadow: "inset 0 0 0 1px $colors$slate7",

  "&:hover": {
    borderColor: "$midnight",
  },

  "&:focus": {
    outline: "none",
    borderColor: "$midnight",
    // boxShadow: "inset 0 0 0 1px #0000000D, 0 0 0 1px #0000000D",
  },

  "&[data-state=unchecked]": {
    backgroundColor: "transparent",
  },

  "&[data-state=checked]": {
    color: "$white",
    backgroundColor: "$midnight",
  },
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  alignItems: "center",
  display: "flex",
  height: "100%",
  justifyContent: "center",
  width: "100%",
});

type CheckboxPrimitiveProps = React.ComponentProps<
  typeof CheckboxPrimitive.Root
>;
type CheckboxVariants = VariantProps<typeof StyledCheckbox>;
type CheckboxProps = CheckboxPrimitiveProps & CheckboxVariants & { css?: CSS };

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof StyledCheckbox>,
  CheckboxProps
>((props, forwardedRef) => (
  <StyledCheckbox {...props} ref={forwardedRef}>
    <StyledIndicator>
      <CheckIcon />
    </StyledIndicator>
  </StyledCheckbox>
));
