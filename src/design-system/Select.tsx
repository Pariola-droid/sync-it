import { styled } from "@/styles";
import * as SelectPrimitive from "@radix-ui/react-select";
import * as React from "react";

const SelectRoot = SelectPrimitive.Root;

const SelectPortal = SelectPrimitive.Portal;

const SelectViewport = SelectPrimitive.Viewport;

const StyledSelectTrigger = styled(SelectPrimitive.Trigger, {
  outline: "none",
  cursor: "pointer",
  position: "relative",
  display: "flex",
  alignItems: "center",
  fontSize: "$body2",
  fontWeight: "300",
  lineHeight: "14.11px",
  transition: "300ms ease",
});

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ children, ...props }, forwardedRef) => (
  <StyledSelectTrigger ref={forwardedRef} {...props}>
    {children}
  </StyledSelectTrigger>
));

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const StyledSelectContent = styled(SelectPrimitive.Content, {
  zIndex: 999,
  backgroundColor: "$white",
  padding: "5px",
  borderRadius: "$2",
  transition: "300ms ease",
  overflow: "hidden",
  border: "1px solid $granite",
});

const SelectContent = StyledSelectContent;

const SelectContentContainer = React.forwardRef(({}, ref) => {
  return <StyledSelectContent></StyledSelectContent>;
});

SelectContentContainer.displayName = "SelectContentContainer";

const StyledSelectItem = styled(SelectPrimitive.Item, {
  border: "none",
  outline: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  minWidth: "100%",
  fontSize: "$body2",
  fontWeight: "300",
  lineHeight: "14.11px",
  transition: "300ms ease",

  "&:hover": {
    color: "$black2",
  },

  variants: {
    status: {
      selected: {
        backgroundColor: "$ghostWhite",
        transition: "300ms ease",
        color: "$black2",
      },
      default: {
        backgroundColor: "transparent",
        color: "$black",
      },
    },
  },
  defaultVariants: {
    status: "default",
  },
});

const SelectItem = StyledSelectItem;

export {
  SelectContentContainer,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectViewport,
  StyledSelectContent,
  SelectPortal,
  SelectContent,
};
