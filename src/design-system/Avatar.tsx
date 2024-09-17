import { styled } from "@/styles";

import { useState } from "react";
import { TooltipContainer } from "./Tooltip";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

export interface AvatarProps {
  name: string;
  src?: string;
  alt?: string;
  loading?: boolean;
  showTooltip?: boolean;
  css?: any;
  variant?: "primary";
  size?: "base" | "md" | "lg" | "xl" | "2xl" | "3xl";
  type?: "overlay" | "default";
}
const colors = ["#FEFEFF", "#D6EFFF", "#FED18C", "#FED99B", "#FE654F"];

function getRandomColor(colorArray: string[]) {
  return colorArray[Math.floor(Math.random() * colorArray.length)];
}

export const Avatar: React.FC<AvatarProps> = ({
  showTooltip = true,
  ...props
}) => {
  const [bgColor, setBgColor] = useState(getRandomColor(colors));

  return (
    <TooltipContainer
      showContent={showTooltip}
      content={props?.name}
      delay={100}
    >
      {/* @ts-ignore */}
      <StyledAvatar
        size={props?.size}
        variant={props?.variant}
        type={props?.type}
        css={{ backgroundColor: bgColor }}
      >
        {props?.loading && <>...</>}
        <StyledImage
          src={props?.src}
          alt={props?.name}
          onLoadingStatusChange={status => {
            if (status === "loading") {
              console.log("loading image", status);
            }
          }}
        />
        <StyledOverflow>
          <StyledFallback delayMs={0} size={props?.size}>
            {props?.name[0]}
          </StyledFallback>
        </StyledOverflow>
      </StyledAvatar>
    </TooltipContainer>
  );
};

const StyledAvatar = styled(AvatarPrimitive.Root, {
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  userSelect: "none",
  borderRadius: "$round",
  cursor: "pointer",

  "&:hover:before": {
    opacity: 1,
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: "#D9D9D9",
        border: "1px solid $midnight",
      },
    },
    size: {
      base: {
        width: "1.25rem",
        height: "1.25rem",
      },
      md: {
        width: "24px",
        height: "24px",
      },
      lg: {
        width: "36px",
        height: "36px",
      },
      xl: {
        height: "48px",
        width: "48px",
      },
      "2xl": {
        height: "72px",
        width: "72px",
      },
      "3xl": {
        height: "96px",
        width: "96px",
      },
    },
    type: {
      overlay: {
        marginLeft: "-0.3rem",
      },
      default: {},
    },
  } as any,

  defaultVariants: {
    variant: "primary",
    size: "base",
    type: "default",
  },
});

export const StyledImage = styled(AvatarPrimitive.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",

  variants: {
    loading: {
      true: {
        opacity: 0.5,
      },
    },
  },
});

const StyledOverflow = styled("div", {
  width: "100%",
  height: "100%",
  overflow: "hidden",
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: "100%",
  height: "100%",
  display: "grid",
  placeItems: "center",
  fontWeight: 400,
  textTransform: "uppercase",
  color: "#000",

  variants: {
    size: {
      sm: {
        fontSize: "10px",
        lineHeight: "16px",
      },
      base: {
        fontSize: "$body3",
        lineHeight: "16px",
      },
      md: {
        fontSize: "$body2",
        lineHeight: "24px",
      },
      lg: {
        fontSize: "$body1",
        lineHeight: "22px",
      },
      xl: {
        fontSize: "20px",
        lineHeight: "22px",
      },
      "2xl": {
        fontSize: "28px",
        lineHeight: "32px",
      },
      "3xl": {
        fontSize: "$display3",
      },
    },
  },

  defaultVariants: {
    size: "base",
  },
});

export const AvatarRoot = StyledAvatar;
export const AvatarImage = StyledImage;
export const AvatarFallback = StyledFallback;
