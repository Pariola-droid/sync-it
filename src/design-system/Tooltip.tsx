import { keyframes, styled } from "@/styles";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { PropsWithChildren, ReactElement, ReactNode } from "react";

const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const StyledTooltipTrigger = styled(TooltipPrimitive.Trigger, {
  outline: "none",
  border: "none",
});

const TooltipTrigger = StyledTooltipTrigger;

const fade = keyframes({
  from: { opacity: 0, scale: 0.96 },
  to: { opacity: 1, scale: 1 },
});

const StyledTooltipContent = styled(TooltipPrimitive.Content, {
  transition: "opacity 0.15s ease",
  whiteSpace: "nowrap",
  zIndex: 5,
  // transformOrigin: "var(--radix - tooltip - content - transform - origin)"
  animation: `${fade} 200ms ease-out`,
});

const TooltipContent = StyledTooltipContent;
export interface TooltipProps extends PropsWithChildren {
  content: string;
  renderContent?: (content: string) => ReactElement | ReactNode;
  showArrow?: boolean;
  showContent?: boolean;
  offset?: number;
  delay?: number;
  placement?: "top" | "right" | "bottom" | "left";
  alignment?: "start" | "center" | "end";
}

const TooltipContainer = ({
  delay = 0,
  children,
  content,
  offset = 6,
  placement = "bottom",
  alignment = "start",
  showContent = true,
  ...props
}: TooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={delay}>
        <TooltipTrigger>{children}</TooltipTrigger>
        {showContent && (
          <TooltipContent
            avoidCollisions
            sideOffset={offset}
            side={placement}
            align={alignment}
          >
            {!props?.renderContent && (
              <TooltipContentWrapper>{content}</TooltipContentWrapper>
            )}
            {props?.renderContent && props?.renderContent(content)}
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};

const TooltipContentWrapper = styled("div", {
  background: "$borderBgColorPrimary",
  padding: "5px 10px",
  color: "$textColor",
  fontSize: "0.75rem",
  borderRadius: "0.3rem",
  width: "max-content",
});

export { TooltipContainer, TooltipTrigger, Tooltip, TooltipProvider };
