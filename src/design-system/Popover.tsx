import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as React from "react";
import { styled, keyframes } from "@/styles";

const Popover = PopoverPrimitive.Root;

const StyledPopoverPrimitiveTrigger = styled(PopoverPrimitive.Trigger, {
  border: "none !important",
  outline: "none !important",
  userSelect: "none",
});

const PopoverTrigger = StyledPopoverPrimitiveTrigger;
const PopoverAnchor = PopoverPrimitive.Anchor;
const PopoverPortal = PopoverPrimitive.Portal;

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const StyledPopoverPrimitiveContent = styled(PopoverPrimitive.Content, {
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
});

const PopoverContent = StyledPopoverPrimitiveContent;

const PopoverContentWithPortal = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ align = "center", sideOffset = 5, ...props }, forwardedRef) => (
  <PopoverPortal>
    <PopoverContent
      ref={forwardedRef}
      align={align}
      sideOffset={sideOffset}
      {...props}
    />
  </PopoverPortal>
));
PopoverContentWithPortal.displayName = "PopoverContentWithPortal";

const PopoverContentWithoutPortal = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ align = "center", sideOffset = 4, ...props }, forwardedRef) => (
  <PopoverContent
    ref={forwardedRef}
    align={align}
    sideOffset={sideOffset}
    {...props}
  >
    {props.children}
  </PopoverContent>
));

PopoverContentWithoutPortal.displayName = "PopoverContentWithoutPortal";

export {
  Popover,
  PopoverAnchor,
  PopoverContentWithPortal,
  PopoverContentWithoutPortal,
  PopoverTrigger,
  PopoverPortal,
  PopoverContent,
};
